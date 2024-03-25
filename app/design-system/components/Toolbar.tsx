import { Transforms, Editor, Node } from 'slate';
import { useSlateStatic } from 'slate-react';
import { FountainTypes } from './types';

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
export { Toolbar };