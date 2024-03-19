import React, { useState, useCallback } from 'react';
import { BaseEditor, createEditor, Descendant, Editor, Transforms, Text } from 'slate';
import { ReactEditor, Slate, Editable, withReact, useSlate, RenderElementProps } from 'slate-react';

type CustomElement = {
  type: 'paragraph' | 'quote' | 'link';
  url?: string;
  children: CustomText[];
};

type CustomText = { 
  text: string;
  [key: string]: boolean | string;  // Add index signature
};

// declare module 'slate' {
//   interface CustomTypes {
//     Editor: ReactEditor & BaseEditor;
//     Element: CustomElement;
//     Text: CustomText;
//   }
// }

const SlateEditor: React.FC = () => {
  const [editor] = useState(() => withReact(createEditor()));

  const [value, setValue] = useState<Descendant[]>([
    { type: 'paragraph', children: [{ text: '' }] },
  ]);

  const renderElement = useCallback(({ attributes, children, element }: RenderElementProps) => {
    const customElement = element as CustomElement;
    console.log('editor',editor)
    console.log('--- START ---')
    console.log('attributes', attributes)
    console.log('text:', customElement.children[0])
    console.log('type:', customElement.type)
    console.log('---- END ----')

    switch (customElement.type) {
      case 'quote':
        return <blockquote {...attributes}>{children}</blockquote>;
      case 'link':
        return <a {...attributes} href={customElement.url}>{children}</a>;
      default:
        return <p {...attributes}>{children}</p>;
    }
  }, []);

  return (
    <Slate editor={editor} initialValue={value} onChange={newValue => setValue(newValue)}>
      <Toolbar />
      <Editable renderElement={renderElement} style={{ minHeight: '200px', backgroundColor: '#C3C3C3', outline: 'none' }} onKeyDown={event => {
        console.log('event', event.key)
      }} />
    </Slate>
  );
};

type ButtonProps = {
  active: boolean;
  children: React.ReactNode;
  onMouseDown: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Button: React.FC<ButtonProps> = ({ active, children, onMouseDown }) => {
  return (
    <button
      onMouseDown={onMouseDown}
      style={{ fontWeight: active ? 'bold' : 'normal' }}
    >
      {children}
    </button>
  );
};

const Toolbar: React.FC = () => {
  const editor = useSlate();

  const isMarkActive = (editor: Editor, format: string) => {
    const [match] = Editor.nodes(editor, {
      match: n => Text.isText(n) && n[format] === true,
      mode: 'all',
    });
    return !!match;
  };

  const toggleMark = (editor: Editor, format: string) => {
    const isActive = isMarkActive(editor, format);
    if (isActive) {
      Editor.removeMark(editor, format);
    } else {
      Editor.addMark(editor, format, true);
    }
  };

  const isBoldActive = () => isMarkActive(editor, 'bold');
  const isItalicActive = () => isMarkActive(editor, 'italic');

  return (
    <div>
      <Button
        active={isBoldActive()}
        onMouseDown={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          event.preventDefault();
          toggleMark(editor, 'bold'); 
        }}
      >
        B
      </Button>
      <Button
        active={isItalicActive()}
        onMouseDown={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          event.preventDefault();
          toggleMark(editor, 'italic');
        }}
      >
        I
      </Button>
    </div>
  );
};
export { SlateEditor };
