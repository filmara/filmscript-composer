import React, { useState, useMemo, useCallback } from 'react';
import { Descendant, createEditor, Transforms, Editor, Node, Range } from 'slate';
import { ReactEditor, Slate, Editable, withReact, RenderElementProps, useSlateStatic } from 'slate-react';
import { Popover } from '@headlessui/react';
import { FountainTypes, FountainNode, CustomText } from './types';
// import { Toolbar } from './Toolbar';

const assignSceneNumbers = () => {
    // Select all elements with the class 'scene_heading'
    const sceneElements = document.querySelectorAll('.scene_heading');

    sceneElements.forEach((element, index) => {
        // Scene numbers start from 1, so add 1 to the index
        const sceneNumber = index + 1;

        // Set the 'data-prefix' attribute with the scene number
        element.setAttribute('data-scene-number', sceneNumber.toString());
    });
};


const CutEditor: React.FC = () => {
    const editor = useMemo(() => withReact(createEditor()), []);

    // Initialize with an empty editor or default content
    const [value, setValue] = useState<Descendant[]>([
        { type: 'scene_heading', children: [{ text: "EXT. BRICK'S PATIO - DAY", type: 'scene_heading' }] },
        { type: 'action', children: [{ text: "A gorgeous day.  The sun is shining.  But BRICK BRADDOCK, retired police detective, is sitting quietly, contemplating -- something.", type: 'action' }] },
        { type: 'action', children: [{ text: "The SCREEN DOOR slides open and DICK STEEL, his former partner and fellow retiree, emerges with two cold beers.", type: 'action' }] },
        { type: 'character', children: [{ text: 'STEEL', type: 'character' }] },
        { type: 'dialogue', children: [{ text: "Beer's ready!", type: 'dialogue' }] },
        { type: 'character', children: [{ text: "BRICK", type: 'character' }] },
        { type: 'dialogue', children: [{ text: "Are they cold?", type: 'dialogue' }] },
        { type: 'character', children: [{ text: "STEEL", type: 'character' }] },
        { type: 'dialogue', children: [{ text: "Does a bear crap in the woods?", type: 'dialogue' }] },
        { type: 'action', children: [{ text: "Steel sits.  They laugh at the dumb joke.", type: 'action' }] },
        { type: 'character', children: [{ text: "STEEL", type: 'character' }] },
        { type: 'parenthetical', children: [{ text: "(beer raised)", type: 'parenthetical' }] },
        { type: 'dialogue', children: [{ text: "To retirement.", type: 'dialogue' }] },
        { type: 'character', children: [{ text: "BRICK", type: 'character' }] },
        { type: 'parenthetical', children: [{ text: "(another beer raised)", type: 'parenthetical' }] },
        { type: 'dialogue', children: [{ text: "To retirement.", type: 'dialogue' }] },
    ]);



    const renderElement = useCallback((props: RenderElementProps) => {
        const { element, children, attributes } = props;
        // console.log('attributes', attributes)
        // console.log("children", children)
        // console.log('renderElement', element.children[0])
        // console.log('element.type', element.type)

        // let classNames = "";

        // // Example: Checking if the first child's text contains "Title:"
        // const firstChildText = element.children[0]?.text;
        // if (firstChildText?.startsWith("Title:")) {
        //     classNames += " title_match"; // Add a class if it matches "Title:"
        // }
        console.log("match type", element.children[0]?.type === element.type, element.children[0]?.type, element.type)
        switch (element.children[0]?.type) {
            case 'scene_heading':
                return <div className="scene_heading" {...attributes}>{children}</div>;
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

        const updateType = (type: FountainTypes) => Transforms.setNodes(editor, { type }, { at: path });

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

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        console.log("event.key", event.key)

        switch (event.key) {
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

            case 'Tab':
                event.preventDefault();
                Editor.insertText(editor, '    ');
                break;

            // Add other cases as needed
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
        const newNode: FountainNode = { type: newNodeType, children: [{ text: '', type: newNodeType }] };
        Transforms.insertNodes(editor, newNode);
        // Optional: Move the selection to the start of the new node
        // Transforms.select(editor, Path.next(Path.parent(editor.selection.anchor.path)));
    };

    const handleRightClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault(); // Prevent the default right-click menu
        setIsPopoverVisible(!isPopoverVisible); // Show the popover
        // You can add additional logic here if needed
    };

    return (
        <Slate editor={editor} initialValue={value} onChange={handleEditorChange}>
            <Editable
                className="screenplay"
                renderElement={renderElement}
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


const nodeTypes: { type: FountainTypes; label: string }[] = [
    { type: 'scene_heading', label: 'Scene Heading' },
    { type: 'dialogue', label: 'Dialogue' },
    { type: 'action', label: 'Action' },
    { type: 'character', label: 'Character' },
    { type: 'transition', label: 'Transition' },
    { type: 'parenthetical', label: 'Parenthetical' },
    { type: 'note', label: 'Note' },
    { type: 'section', label: 'Section' },
    { type: 'synopsis', label: 'Synopsis' },
    { type: 'page_break', label: 'Page Break' },
    { type: 'title_page', label: 'Title Page' }
];

const Toolbar: React.FC = () => {
    const editor = useSlateStatic();

    const setNodeType = (type: FountainTypes) => {
        if (!editor.selection) return;
    
        // Get the current node and its path
        const [node, path] = Editor.node(editor, editor.selection.focus.path);
    
        // Create a new object with the updated type
        const newNode = { ...node, type: type };
    
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


    return (
        <div className="toolbar-menu">
            {nodeTypes.map(({ type, label }) => (
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


export { CutEditor };
