import React, { useState, useMemo, useCallback } from 'react';
import { FountainParser, FountainElement } from '../utils/FountainParser';
import { BaseEditor, Descendant, Node, createEditor } from 'slate';
import { ReactEditor, Slate, Editable, withReact, RenderElementProps } from 'slate-react';

type CustomElement = {
    type: 'paragraph' | 'scene_heading' | 'character' | 'transition' | 'action' | 'parenthetical'
    | 'dialogue' | 'note' | 'section' | 'synopsis' | 'page_break';
    children: CustomText[];
};

type CustomText = { text: string };

declare module 'slate' {
    interface CustomTypes {
        Editor: BaseEditor & ReactEditor;
        Element: CustomElement;
        Text: CustomText;
    }
}

// Convert FountainElement to Slate Node
const fountainElementToSlateNode = (element: FountainElement): Descendant => {
    console.log('fountainElementToSlateNode', element)
    switch (element.type) {
        case 'scene_heading':
            return {
                type: 'scene_heading',
                children: [{ text: element.text }],
            };
        case 'action':
            return {
                type: 'action',
                children: [{ text: element.text }],
            };
        case 'character':
            return {
                type: 'character',
                children: [{ text: element.text }],
            };
        case 'dialogue':
            return {
                type: 'dialogue',
                children: [{ text: element.text }],
            };
        case 'parenthetical':
            return {
                type: 'parenthetical',
                children: [{ text: element.text }],
            };
        case 'transition':
            return {
                type: 'transition',
                children: [{ text: element.text }],
            };
        case 'note':
            return {
                type: 'note',
                children: [{ text: element.text }],
            };
        case 'section':
            return {
                type: 'section',
                children: [{ text: element.text }],
            };
        case 'synopsis':
            return {
                type: 'synopsis',
                children: [{ text: element.text }],
            };
        case 'page_break':
            return {
                type: 'page_break',
                children: [{ text: '--- Page Break ---' }],
            };
        default:
            return {
                type: 'paragraph',
                children: [{ text: element.text }],
            };
    }
};



const FountainEditor: React.FC = () => {
    const editor = useMemo(() => withReact(createEditor()), []);
    const [value, setValue] = useState<Descendant[]>([
        { type: 'character', children: [{ text: 'STEEL' }] },
        { type: 'dialogue', children: [{ text: 'How are you?' }] },
        { type: 'character', children: [{ text: 'BOB' }] },
        { type: 'dialogue', children: [{ text: 'Fine and you?' }] }
    ]);

    const handleChange = useCallback(
        (newValue: Descendant[]) => {
            // setValue(newValue);
            const textContent = newValue.map(n => Node.string(n)).join('\n');
            console.log('textContent', textContent)
            const elements = new FountainParser(textContent).parse();
            console.log('elements', elements)
            const newNodes = elements.map(fountainElementToSlateNode);
            console.log('newNodes', newNodes)
            setValue(newNodes);
        },
        []
    );

    // Custom rendering for Slate nodes
    const renderElement = useCallback((props: RenderElementProps) => {
        const { element, children, attributes } = props;
        console.log('renderElement', props)

        switch (element.type) {
            case 'scene_heading':
                return <h3 className="scene_heading" {...attributes}>{children}</h3>;
            case 'action':
                return <span className="action" {...attributes}>{children}</span>;
            case 'character':
                return <span className="character bold" {...attributes}>{children}</span>;
            case 'dialogue':
                return <div className="dialogue" {...attributes}>{children}</div>;
            case 'parenthetical':
                return <div className="parenthetical" {...attributes}>{children}</div>;
            case 'transition':
                return <p className="transition" {...attributes}>{children}</p>;
            case 'note':
                return <div className="note" {...attributes}>{children}</div>;
            case 'section':
                return <h5 className="section" {...attributes}>{children}</h5>;
            case 'synopsis':
                return <p className="synopsis" {...attributes}>{children}</p>;
            case 'page_break':
                return <div className="page-break" {...attributes}>{children}</div>;
            default:
                return <p {...attributes}>{children}</p>;
        }
    }, [])

    return (
        <Slate editor={editor} initialValue={value} onChange={handleChange}>
            <Editable className="screenplay" renderElement={renderElement} disableDefaultStyles={true} />
        </Slate>
    );
};

export { FountainEditor };
