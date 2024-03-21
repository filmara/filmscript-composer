import React, { useState, useMemo, useCallback } from 'react';
import { Descendant, createEditor, Transforms, Editor, Node, Range } from 'slate';
import { ReactEditor, Slate, Editable, withReact, RenderElementProps, useSlateStatic } from 'slate-react';
import { Popover } from '@headlessui/react';
import { FountainTypes, FountainNode } from './types';
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
            default:
                return <p {...attributes}>{children}</p>;
        }
    }, [])

    const updateNodeIfNeeded = useCallback(() => {
        const { selection } = editor;

        if (selection && Editor.isBlock(editor, editor.children[selection.focus.path[0]])) {
            const [node, path] = Editor.node(editor, selection.focus.path);
            console.log("Node.string(node)", Node.string(node))
            console.log("path", path)
            console.log('node', node)
            // Check if the node's text length exceeds 3 characters
            const nodeText = Node.string(node);
            if (nodeText.length > 2) {
                if (/^[A-Z]+$/.test(nodeText)) {
                    Transforms.setNodes(editor, { type: 'character' }, { at: path });
                }
                if (nodeText.startsWith('EXT.') || nodeText.startsWith('INT.')) {
                    Transforms.setNodes(
                        editor,
                        { type: 'scene_heading' }, // Set the desired type
                        { at: path }
                    );
                }

                if (nodeText.startsWith('(') || nodeText.endsWith(')')) {
                    Transforms.setNodes(
                        editor,
                        { type: 'parenthetical' }, // Set the desired type
                        { at: path }
                    );
                }
                const prefixes = ['Title:', 'Credits:', 'Author:', 'Source:', 'Draft Date:', 'Contact:'];
                const matchesPrefix = prefixes.some(prefix => nodeText.startsWith(prefix));
                if (matchesPrefix) {
                    Transforms.setNodes(
                        editor,
                        { type: 'title_page' }, // Set the desired type
                        { at: path }
                    );
                }
            }
        }
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
            // const previousPath = Path.previous(currentPath);
            const previousPath = [...currentPath]
            try {
                const previousNode = Node.get(editor, previousPath) as FountainNode;
                console.log('Previous Node:', previousNode);
                if (previousNode.type === 'character') {
                    newNodeType = 'dialogue';
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

    // const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    //     console.log("event.key", event.key)
    //     if (event.key === 'Enter' && event.shiftKey) {
    //         console.log("Shift + Enter was pressed");
    //         // Handle the Shift+Enter key press here
    //     }
    //     if (event.key === 'Enter') {
    //         event.preventDefault(); // Prevent default to handle the enter key manually

    //         // Check if there is a current selection
    //         if (editor.selection) {
    //             const currentPath = editor.selection.focus.path;
    //             let newNodeType: FountainTypes = 'action';
    //             // First, check if there's a previous node and log it
    //             if (currentPath[0] > 0) {
    //                 // Manually construct the previous path
    //                 const previousPath = [...currentPath];
    //                 // Decrease the index to get the previous node

    //                 try {
                        
    //                     const previousNode = Node.get(editor, previousPath) as FountainNode;
    //                     console.log('Previous Node:', previousNode);
    //                     if (previousNode.type === 'character') {
    //                         newNodeType = 'dialogue';
    //                     } else if (previousNode.type === 'dialogue') {
    //                         newNodeType = 'dialogue';
    //                     }
    //                 } catch (error) {
    //                     console.error('Error fetching previous node:', error);
    //                 }
    //             }

    //             // Insert a line break at the current selection
    //             // Editor.insertBreak(editor);

    //             // Create a new node with type 'action'
    //             console.log('newNodeType', newNodeType)
    //             const newNode: FountainNode = { type: newNodeType, children: [{ text: '', type: newNodeType }] };

    //             // Insert the new node at the selection
    //             Transforms.insertNodes(editor, newNode);

    //             // Optional: You might want to move the selection to the start of the new node
    //             // Transforms.select(editor, Path.next(Path.parent(editor.selection.anchor.path)));
    //         }
    //         // setIsPopoverVisible(true);
    //     } else if (event.key === 'Tab') {
    //         event.preventDefault()
    //         Editor.insertText(editor, '    ');
    //     }
    // };

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
    { type: 'title_page', label: 'Title Page'}
];

const Toolbar: React.FC = () => {
    const editor = useSlateStatic();

    const setNodeType = (type: FountainTypes) => {
        const [match] = Editor.nodes(editor, {
            match: n => Editor.isBlock(editor, n),
            at: editor.selection ?? undefined,
        });

        if (match) {
            Transforms.setNodes(editor, { type }, { at: editor.selection ?? undefined });
        }
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
