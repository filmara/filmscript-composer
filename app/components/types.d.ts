export type FountainTypes = 'paragraph' | 'scene_heading' | 'character' | 'transition' | 'action' | 'parenthetical' | 'dialogue' | 'note' | 'section' | 'synopsis' | 'page_break' | 'title_page' | 'lyric' | 'centered_text' | 'dual_dialogue'

export type CustomElement = {
    children: CustomText[];
};

export type CustomText = { text: string, type?: FountainTypes };
export type FountainNode = { children: CustomText[] };

declare module 'slate' {
    interface CustomTypes {
        Editor: BaseEditor & ReactEditor;
        Element: CustomElement;
        Text: CustomText;
    }
}
