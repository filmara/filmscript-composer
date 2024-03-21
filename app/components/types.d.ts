export type FountainTypes = 'paragraph' | 'scene_heading' | 'character' | 'transition' | 'action' | 'parenthetical' | 'dialogue' | 'note' | 'section' | 'synopsis' | 'page_break' | 'title_page'

export type CustomElement = {
    type: FountainTypes;
    children: CustomText[];
};

export type CustomText = { text: string, type?: FountainTypes };
export type FountainNode = { type: FountainTypes, children: { text: string, type: FountainTypes }[] };

declare module 'slate' {
    interface CustomTypes {
        Editor: BaseEditor & ReactEditor;
        Element: CustomElement;
        Text: CustomText;
    }
}
