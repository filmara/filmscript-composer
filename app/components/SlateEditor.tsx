
import React, { useState, useMemo, useCallback } from 'react';
// import { FountainParser, FountainElement } from '../utils/FountainParser';
import { BaseEditor, Descendant, Node, createEditor } from 'slate'
import { ReactEditor, Slate, Editable, withReact } from 'slate-react'

type CustomElement = { type: 'paragraph'; children: CustomText[] }
type CustomText = { text: string }

declare module 'slate' {
    interface CustomTypes {
        Editor: BaseEditor & ReactEditor
        Element: CustomElement
        Text: CustomText
    }
}

const initialValue: Descendant[] = [
    {
        type: 'paragraph',
        children: [{ text: 'A line of text in a paragraph.' }],
    },
]

const SlateEditor: React.FC = () => {
    const [editor] = useState(() => withReact(createEditor()))

    return (
        <div>
            <div>Editor</div>
            <Slate editor={editor} initialValue={initialValue} >
                <Editable className="text-editor" />
            </Slate>
        </div>
    );
};

export { SlateEditor };


// const [value, setValue] = useState<Node[]>([{ type: 'paragraph', children: [{ text: '' }]}]);


// Convert Fountain script to Slate nodes
// const fountainToSlateNodes = (fountainElements: FountainElement[]): CustomElement[] => {
//     return fountainElements.map(el => {
//         // Example conversion logic
//         switch (el.type) {
//             case 'scene_heading':
//                 return { type: 'scene_heading', children: [{ text: el.text }] };
//             case 'action':
//                 return { type: 'action', children: [{ text: el.text }] };
//             // Handle other types as needed
//             default:
//                 return { type: 'paragraph', children: [{ text: el.text }] };
//         }
//     });
// };

// const handleChange = (newValue: Node[]) => {
//     // Update your local state and do any processing
//     setValue(newValue);

//     // Example: processing for FountainParser (if needed)
//     // const fountainContent = convertToPlainText(newValue);
//     // const parsedContent = new FountainParser(fountainContent).parse();
//     // Perform further actions with parsedContent
// };

// const handleChange = (value: Node[]) => {
//     const text = value.map(node => Node.string(node)).join('\n');
//     setScript(value);

//     const parser = new FountainParser(text);
//     const elements = parser.parse();
//     const newNodes = fountainToSlateNodes(elements);
//     setScript(newNodes);
// };

// const [script, setScript] = useState<Node[]>([{type: 'paragraph', children: [{ text: '' }]}]);
// const editor = useMemo(() => withReact(createEditor()), []);
