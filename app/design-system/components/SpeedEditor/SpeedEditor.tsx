import React, { useState, useMemo, useCallback } from 'react';
import { Descendant, createEditor, Transforms, Editor, Node, Range, Path } from 'slate';
import { ReactEditor, Slate, Editable, withReact, RenderElementProps, useSlateStatic } from 'slate-react';
import { Popover } from '@headlessui/react';
import { FountainTypes, FountainNode, CustomText } from './types';
import { Dropdown } from '~/design-system';
import { optionsForNodeType, nodeTypes, textExample } from './constants';
import { assignSceneNumbers } from './functions'
import { debugLog } from '~/utils'
import { useEditor } from './context';

interface SpeedEditorProps {
    projectId: string;
}

const SpeedEditor: React.FC<SpeedEditorProps> = ({ projectId }) => {

    const editor = useMemo(() => withReact(createEditor()), []);
    // Initialize with an empty editor or default content
    const { value, setValue, loaded } = useEditor();
    // const [value, setValue] = useState<Descendant[]>(textExample);
    const updateCurrentNodePrefix = (editor: Editor, newPrefix: string) => {
        const { selection } = editor;
        debugLog('newPrefix', newPrefix)
        // console.log('update Prefix', newPrefix)
        console.log("!selection", !selection, selection)
        // Ensure that there is a current selection in the editor
        if (!selection) return;

        // Get the current node at the selection
        const [node, path] = Editor.node(editor, selection.focus.path);
        console.log('node.type', node.type)
        // Check if the node is of a type that should have a prefix (e.g., 'scene_heading')
        if (node.type === 'scene_heading') {
            // Set the new prefix
            console.log("path", path)
            Transforms.setNodes(editor, { prefix: newPrefix }, { at: path });
        }
    };


    const renderElement = useCallback((props: RenderElementProps) => {
        const { element, children, attributes } = props;
        const type = element.children[0]?.type
        const prefix = element.children[0]?.prefix
        const path = ReactEditor.findPath(editor, element);

        switch (type) {
            case 'scene_heading':
                return <div className="scene_heading" {...attributes}>
                    {prefix && <span className="mr-4">
                        <Dropdown
                            direction="left-bottom"
                            button={{
                                variant: 'primary',
                                size: 'tiny',
                                text: prefix,
                                onClick: (event) => handleButtonClick(event, path)
                            }}
                            items={[
                                { text: 'INT.', type: 'button', action: () => updateCurrentNodePrefix(editor, 'INT.') },
                                { text: 'EXT.', type: 'button', action: () => updateCurrentNodePrefix(editor, 'EXT.') }
                            ]} />
                    </span>}
                    {children}
                </div>;
            case 'action':
                return <div className="action" {...attributes}>{children}</div>;
            case 'character':
                return <span className="character bold" {...attributes}>{children}</span>;
            case 'dialogue':
                return <div className="dialogue" {...attributes}>{children}</div>;
            case 'parenthetical':
                return <div className="parenthetical" {...attributes}>{children}</div>;
            case 'transition':
                return <div className="transition" {...attributes}>{children}</div>;
            case 'note':
                return <div className="note" {...attributes}>{children}</div>;
            case 'section':
                return <div className="section" {...attributes}>{children}</div>;
            case 'synopsis':
                return <div className="synopsis" {...attributes}>{children}</div>;
            case 'page_break':
                return <div className="page-break" {...attributes}>{children}</div>;
            case 'title_page':
                return <div className="title_page" {...attributes}>{children}</div>;
            case 'lyric':
                return <div className="lyric" {...attributes}>{children}</div>;
            case 'centered_text':
                return <div className="centered_text" {...attributes}>{children}</div>;
            case 'dual_dialogue':
                return <div className="dual_dialogue" {...attributes}>{children}</div>;
            default:
                return <p {...attributes}>{children}</p>;
        }
    }, [])

    const updateNodeIfNeeded = useCallback(() => {
        const { selection } = editor;
        if (!selection || !Editor.isBlock(editor, editor.children[selection.focus.path[0]])) {
            return;
        }

        const [node, path] = Editor.node(editor, selection.focus.path);
        const nodeText = Node.string(node);
        if (nodeText.length <= 2) return;

        const updateType = (type: FountainTypes) => {
            // Prevent changing the type if the current node is a scene_heading
            if (node.type === 'scene_heading' && type !== 'scene_heading') {
                console.log("Scene headings cannot be changed to other types.");
                return;
            }
            Transforms.setNodes(editor, { type }, { at: path });
        };
        const checkAndUpdateNode = () => {
            if (/^[A-Z]+$/.test(nodeText)) return updateType('character');
            if (nodeText.startsWith('!')) return updateType('action');
            if (nodeText.startsWith('[[') && nodeText.endsWith(']]')) return updateType('note');
            if (nodeText.startsWith('EXT.') || nodeText.startsWith('INT.')) return updateType('scene_heading');
            if (nodeText.startsWith('~')) return updateType('lyric');
            if (nodeText.startsWith('= ')) return updateType('synopsis');
            if (nodeText.startsWith('>') && nodeText.endsWith('<')) return updateType('centered_text');
            if (nodeText.startsWith('(') && nodeText.endsWith(')')) return updateType('parenthetical');
            if (nodeText === '===') return updateType('page_break');

            const prefixes = ['Title:', 'Credits:', 'Author:', 'Source:', 'Draft Date:', 'Contact:'];
            if (prefixes.some(prefix => nodeText.startsWith(prefix))) return updateType('title_page');

            // For checking section headers
            if (/^#+ /.test(nodeText)) return updateType('section');
        };

        checkAndUpdateNode();
    }, [editor]);


    React.useEffect(() => {
        updateNodeIfNeeded();
        assignSceneNumbers();
    }, [updateNodeIfNeeded, editor.children]);



    const [popoverPos, setPopoverPos] = useState<{ top: number; left: number } | null>(null);
    const [isPopoverVisible, setIsPopoverVisible] = useState(false);

    const updatePopoverPosition = () => {
        // Ensure the editor has focus
        if (!editor.selection || !ReactEditor.isFocused(editor)) {
            return;
        }

        const { selection } = editor;
        if (selection && Range.isCollapsed(selection)) {
            const domSelection = window.getSelection();
            if (domSelection && domSelection.rangeCount > 0) {
                const range = domSelection.getRangeAt(0);
                const rect = range.getBoundingClientRect();

                // Ensure the rect is valid
                if (rect.bottom !== 0 || rect.left !== 0) {
                    setPopoverPos({
                        top: rect.bottom + window.scrollY,
                        left: rect.left + window.scrollX - 400 / 2,  // Center the popover
                    });
                }
            }
        }
    };

    const handleEditorChange = (newValue: any[]) => {
        setValue(newValue);
        updatePopoverPosition();
    };

    const handlePrefixDetection = () => {
        const { selection } = editor;
        if (selection && Range.isCollapsed(selection)) {
            const [start,] = Range.edges(selection);
            const wordBefore = Editor.before(editor, start, { unit: 'word' });
            const beforeRange = wordBefore && Editor.range(editor, wordBefore, start);
            const beforeText = beforeRange && Editor.string(editor, beforeRange);

            const scenePrefixes = ['INT.', 'EXT.'];
            if (scenePrefixes.includes(beforeText)) {
                // Prevent default behavior
                event.preventDefault();

                // Update the node type to 'scene_heading' and store the prefix
                Transforms.setNodes(editor, { type: 'scene_heading', prefix: beforeText }, { at: selection.focus.path });

                // Replace the word with an empty string to remove it
                Transforms.delete(editor, { at: beforeRange });
            }
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        console.log("event.key", event.key)


        if (event.key === 'Backspace') {
            const { selection } = editor;
            if (selection && Range.isCollapsed(selection)) {
                const [node] = Editor.node(editor, selection.focus.path);
                if (node.type === 'scene_heading' && Node.string(node).length === 0) {
                    // Prevent backspace from deleting the scene_heading when its text is empty
                    event.preventDefault();
                    return;
                }
            }
        }

        switch (event.key) {
            case 'Escape':
                event.preventDefault();
                break;
            case 'Enter':
                if (event.shiftKey) {
                    console.log("Shift + Enter was pressed");
                    // Handle Shift+Enter here
                    // For example, insert a 'action' type node
                    event.preventDefault();
                    insertNewNode('action');
                } else {
                    event.preventDefault(); // Prevent default to handle the Enter key manually
                    handleEnterPress();
                }
                break;
            case ' ':
            case 'Tab':
                handlePrefixDetection();
                if (event.key === 'Tab') {
                    event.preventDefault();
                    Editor.insertText(editor, '    ');
                }
                break;
        }
    };

    const handleEnterPress = () => {
        if (!editor.selection) return;

        const currentPath = editor.selection.focus.path;
        let newNodeType: FountainTypes = 'action';

        if (currentPath[0] > 0) {
            const previousPath = [...currentPath];

            try {
                const previousNode = Node.get(editor, previousPath) as CustomText;
                console.log('Previous Node:', previousNode);

                if (previousNode.type === 'character') {
                    // Check if the text ends with a caret '^' for dual dialogue
                    const isDualDialogue = previousNode.text.endsWith('^');

                    newNodeType = isDualDialogue ? 'dual_dialogue' : 'dialogue';
                } else if (previousNode.type === 'dialogue') {
                    newNodeType = 'dialogue';
                }
            } catch (error) {
                console.error('Error fetching previous node:', error);
            }
        }

        insertNewNode(newNodeType);
    };


    const insertNewNode = (newNodeType: FountainTypes) => {
        const newNode: FountainNode = { children: [{ text: '', type: newNodeType }] };
        Transforms.insertNodes(editor, newNode);
        // Optional: Move the selection to the start of the new node
        // Transforms.select(editor, Path.next(Path.parent(editor.selection.anchor.path)));
    };

    const handleRightClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault(); // Prevent the default right-click menu
        setIsPopoverVisible(!isPopoverVisible); // Show the popover
        // You can add additional logic here if needed
    };

    function updateSelection(editor: Editor, newPath: number[], newOffset: number) {
        const newSelection = {
            anchor: { path: newPath, offset: newOffset },
            focus: { path: newPath, offset: newOffset }
        };
        debugLog('newSelection', newSelection)
        Transforms.select(editor, newSelection);

    }

    const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>, path: Path) => {
        // event.preventDefault();

        // Focus the editor and set the selection to the node's path
        ReactEditor.focus(editor);
        Transforms.select(editor, path);

        // Now you can trigger the dropdown knowing the selection is correctly set
        // Dropdown actions can now assume the selection is at the intended node
    };

    const handleEditorClick = (event: React.MouseEvent<HTMLDivElement>) => {
        // Check if the left mouse button was clicked
        if (event.button === 0) { // 0 is the button value for the left mouse button
            const { selection } = editor;
            debugLog('selection', selection)
            if (!selection) return;
            const [node, path] = Editor.node(editor, selection.focus.path);
            debugLog('node.type', node.type)
            if (selection) {
                // You might want to calculate the new path and offset here
                const newPath = selection.focus.path;
                const newOffset = selection.focus.offset;
                updateSelection(editor, newPath, newOffset);
            }
        }
    };

    if (!loaded) {
        return <div>Loading...</div>; // or any other loading indicator
    }
    
    return (
        <Slate editor={editor} initialValue={value} onChange={handleEditorChange} key={projectId}>
            <Editable
                className="screenplay h-[92vh]"
                renderElement={renderElement}
                onClick={handleEditorClick}
                onContextMenu={handleRightClick}
                onFocus={updatePopoverPosition}
                onKeyDown={handleKeyDown} />
            {isPopoverVisible && popoverPos && (
                <Popover style={{ position: 'absolute', top: `${popoverPos.top}px`, left: `${popoverPos.left}px` }}>
                    <Toolbar />
                </Popover>
            )}
        </Slate>
    );
};




const Toolbar: React.FC = () => {
    const editor = useSlateStatic();

    const setNodeType = (type: FountainTypes) => {
        if (!editor.selection) return;

        // Get the current node and its path
        const [node, path] = Editor.node(editor, editor.selection.focus.path);

        // Create a new object with the updated type
        const newNode = { ...node, type: type, prefix: type };

        // Set the new node at the current path
        Transforms.setNodes(editor, newNode, { at: path });
    };

    const isNodeTypeActive = (type: FountainTypes): boolean => {
        const [match] = Editor.nodes(editor, {
            match: n => Node.isNode(n) && n.type === type,
            at: editor.selection ?? undefined,
            mode: 'highest',
        });

        return !!match;
    };

    // Function to determine the current node type
    const getCurrentNodeType = (): FountainTypes | null => {
        if (!editor.selection) return null;
        const [node] = Editor.node(editor, editor.selection.focus.path);
        return node.type ?? null;
    };

    const currentType = getCurrentNodeType();

    const currentOptions = currentType ? optionsForNodeType[currentType] : nodeTypes;


    return (
        <div className="toolbar-menu">
            {currentOptions.map(({ type, label }: any) => (
                <button
                    key={type}
                    onMouseDown={e => {
                        e.preventDefault();
                        setNodeType(type);
                    }}
                    className="toolbar-button"
                    style={{ fontWeight: isNodeTypeActive(type) ? 'bold' : 'normal' }}
                >
                    {label}
                </button>
            ))}
        </div>
    );
};

export { SpeedEditor };
