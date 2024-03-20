import React, { useState, useMemo, useCallback } from 'react';
import { BaseEditor, Descendant, createEditor, Transforms, Editor, Node, Range } from 'slate';
import { ReactEditor, Slate, Editable, withReact, RenderElementProps, useSlateStatic } from 'slate-react';
import { Popover } from '@headlessui/react';
type FountainTypes = 'paragraph' | 'scene_heading' | 'character' | 'transition' | 'action' | 'parenthetical' | 'dialogue' | 'note' | 'section' | 'synopsis' | 'page_break' | 'title_page'
type CustomElement = {
    type: FountainTypes;
    children: CustomText[];
};

type CustomText = { text: string, type?: FountainTypes };

declare module 'slate' {
    interface CustomTypes {
        Editor: BaseEditor & ReactEditor;
        Element: CustomElement;
        Text: CustomText;
    }
}

const FountainEditor: React.FC = () => {
    const editor = useMemo(() => withReact(createEditor()), []);

    // Initialize with an empty editor or default content
    const [value, setValue] = useState<Descendant[]>([
        { type: 'scene_heading', children: [{ text: "EXT. BRICK'S PATIO - DAY" }] },
        { type: 'action', children: [{ text: "A gorgeous day.  The sun is shining.  But BRICK BRADDOCK, retired police detective, is sitting quietly, contemplating -- something." }] },
        { type: 'action', children: [{ text: "The SCREEN DOOR slides open and DICK STEEL, his former partner and fellow retiree, emerges with two cold beers." }] },
        { type: 'character', children: [{ text: 'STEEL' }] },
        { type: 'dialogue', children: [{ text: "Beer's ready!" }] },
        { type: 'character', children: [{ text: "BRICK" }] },
        { type: 'dialogue', children: [{ text: "Are they cold?" }] },
        { type: 'character', children: [{ text: "STEEL" }] },
        { type: 'dialogue', children: [{ text: "Does a bear crap in the woods?" }] },
        { type: 'action', children: [{ text: "Steel sits.  They laugh at the dumb joke." }] },
        { type: 'character', children: [{ text: "STEEL" }] },
        { type: 'parenthetical', children: [{ text: "(beer raised)" }] },
        { type: 'dialogue', children: [{ text: "To retirement." }] },


    ]);

    const renderElement = useCallback((props: RenderElementProps) => {
        const { element, children, attributes } = props;
        console.log('attributes', attributes)
        console.log("children", children)
        console.log('renderElement', element.children[0])
        console.log('element.type', element.type)

        switch (element.children[0]?.type || element.type) {
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
            if (nodeText.length > 3) {
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
                        left: rect.left + window.scrollX,
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
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent default to handle the enter key manually

            // Check if there is a current selection
            if (editor.selection) {
                // Insert a line break at the current selection
                // Editor.insertBreak(editor);

                // Create a new node with type 'action'
                const actionNode: { type: FountainTypes, children: { text: string, type: FountainTypes }[] } = { type: 'action', children: [{ text: '', type: 'action' }] };

                // Insert the new node at the selection
                Transforms.insertNodes(editor, actionNode);

                // Optional: You might want to move the selection to the start of the new node
                // Transforms.select(editor, Path.next(Path.parent(editor.selection.anchor.path)));
            }
            setIsPopoverVisible(true);
        } else if (event.key === 'Tab') {
            event.preventDefault()
            Editor.insertText(editor, '    ');
        }
    };

    return (
        <Slate editor={editor} initialValue={value} onChange={handleEditorChange}>
            <Editable
                className="screenplay"
                renderElement={renderElement}
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
        <div>
            {nodeTypes.map(({ type, label }) => (
                <button
                    key={type}
                    onMouseDown={e => {
                        e.preventDefault();
                        setNodeType(type);
                    }}
                    style={{ fontWeight: isNodeTypeActive(type) ? 'bold' : 'normal' }}
                >
                    {label}
                </button>
            ))}
        </div>
    );
};


export { FountainEditor };
