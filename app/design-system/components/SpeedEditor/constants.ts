import { FountainTypes, FountainNode, CustomText } from './types';
import { Descendant } from 'slate';

export const emptyPage: Descendant[] = [
    { children: [{ text: "", type: 'action'}] },
]

export const textExample: Descendant[] = [
    { children: [{ text: "BRICK'S PATIO - DAY", type: 'scene_heading', prefix: 'EXT.' }] },
    { children: [{ text: "A gorgeous day.  The sun is shining.  But BRICK BRADDOCK, retired police detective, is sitting quietly, contemplating -- something.", type: 'action' }] },
    { children: [{ text: "The SCREEN DOOR slides open and DICK STEEL, his former partner and fellow retiree, emerges with two cold beers.", type: 'action' }] },
    { children: [{ text: 'STEEL', type: 'character' }] },
    { children: [{ text: "Beer's ready!", type: 'dialogue' }] },
    { children: [{ text: "BRICK", type: 'character' }] },
    { children: [{ text: "Are they cold?", type: 'dialogue' }] },
    { children: [{ text: "STEEL", type: 'character' }] },
    { children: [{ text: "Does a bear crap in the woods?", type: 'dialogue' }] },
    { children: [{ text: "Steel sits.  They laugh at the dumb joke.", type: 'action' }] },
    { children: [{ text: "STEEL", type: 'character' }] },
    { children: [{ text: "(beer raised)", type: 'parenthetical' }] },
    { children: [{ text: "To retirement.", type: 'dialogue' }] },
    { children: [{ text: "BRICK", type: 'character' }] },
    { children: [{ text: "(another beer raised)", type: 'parenthetical' }] },
    { children: [{ text: "To retirement.", type: 'dialogue' }] },
]

export const nodeTypes: { type: FountainTypes; label: string }[] = [
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

export const optionsForNodeType = {
    'scene_heading': [
        { type: 'action', label: 'Action' },
        { type: 'character', label: 'Character' },
        { type: 'dialogue', label: 'Dialogue' }
        // Other options relevant to 'scene_heading'
    ],
    'dialogue': [
        { type: 'parenthetical', label: 'Parenthetical' },
        { type: 'character', label: 'Character' }
        // Other options relevant to 'dialogue'
    ],
    'action': [
        { type: 'scene_heading', label: 'Scene Heading' },
        { type: 'character', label: 'Character' }
        // Other options relevant to 'action'
    ],
    'character': [
        { type: 'dialogue', label: 'Dialogue' },
        { type: 'action', label: 'Action' }
        // Other options relevant to 'character'
    ],
    'transition': [
        // Define options relevant to 'transition'
    ],
    'parenthetical': [
        { type: 'dialogue', label: 'Dialogue' }
        // Other options relevant to 'parenthetical'
    ],
    'note': [
        // Define options relevant to 'note'
    ],
    'section': [
        // Define options relevant to 'section'
    ],
    'synopsis': [
        // Define options relevant to 'synopsis'
    ],
    'page_break': [
        // Define options relevant to 'page_break'
    ],
    'title_page': [
        // Define options relevant to 'title_page'
    ]
    // Add other node types and their options as needed
};