export type FountainElement = {
    type: string;
    text: string;
    scene_number?: string;   // Optional for scene numbers
    depth?: number;         // Optional for section depth
    dual?: 'left' | 'right'; // Optional for dual dialogues
    boneyard?: boolean;      // Optional for indicating boneyard text
};

export class FountainParser {
    constructor(private script: string) { }

    private static regex = {
        title_page: /^((?:title|credit|author[s]?|source|notes|draft date|date|contact|copyright)\:)/gim,
        scene_heading: /^((?:\*{0,3}_?)?(?:(?:int|ext|est|i\/e)[. ]).+)|^(?:\.(?!\.+))(.+)/i,
        scene_number: /( *#(.+)# *)/,
        transition: /^((?:FADE (?:TO BLACK|OUT)|CUT TO BLACK)\.|.+ TO\:)|^(?:> *)(.+)/,
        dialogue: /^([A-Z*_]+[0-9A-Z (._\-')]*)(\^?)?(?:\n(?!\n+))([\s\S]+)/,
        parenthetical: /^(\(.+\))$/,
        action: /^(.+)/g,
        centered: /^(?:> *)(.+)(?: *<)(\n.+)*/g,
        section: /^(#+)(?: *)(.*)/,
        synopsis: /^(?:\=(?!\=+) *)(.*)/,
        note: /^(?:\[{2}(?!\[+))(.+)(?:\]{2}(?!\[+))$/,
        note_inline: /(?:\[{2}(?!\[+))([\s\S]+?)(?:\]{2}(?!\[+))/g,
        boneyard: /(^\/\*|^\*\/)$/g,
        page_break: /^\={3,}$/,
        line_break: /^ {2}$/,
        emphasis: /(_|\*{1,3}|_\*{1,3}|\*{1,3}_)(.+)(_|\*{1,3}|_\*{1,3}|\*{1,3}_)/g,
        bold_italic_underline: /(_{1}\*{3}(?=.+\*{3}_{1})|\*{3}_{1}(?=.+_{1}\*{3}))(.+?)(\*{3}_{1}|_{1}\*{3})/g,
        bold_underline: /(_{1}\*{2}(?=.+\*{2}_{1})|\*{2}_{1}(?=.+_{1}\*{2}))(.+?)(\*{2}_{1}|_{1}\*{2})/g,
        italic_underline: /(?:_{1}\*{1}(?=.+\*{1}_{1})|\*{1}_{1}(?=.+_{1}\*{1}))(.+?)(\*{1}_{1}|_{1}\*{1})/g,
        bold_italic: /(\*{3}(?=.+\*{3}))(.+?)(\*{3})/g,
        bold: /(\*{2}(?=.+\*{2}))(.+?)(\*{2})/g,
        italic: /(\*{1}(?=.+\*{1}))(.+?)(\*{1})/g,
        underline: /(_{1}(?=.+_{1}))(.+?)(_{1})/g,
        splitter: /\n{2,}/g,
        cleaner: /^\n+|\n+$/,
        standardizer: /\r\n|\r/g,
        whitespacer: /^\t+|^ {3,}/gm
    };

    private lexer(): string {
        return this.script
            .replace(FountainParser.regex.boneyard, '\n$1\n')
            .replace(FountainParser.regex.standardizer, '\n')
            .replace(FountainParser.regex.cleaner, '')
            .replace(FountainParser.regex.whitespacer, '');
    }

    public parse(): FountainElement[] {
        const script = this.lexer();
        return this.tokenize(script);
    }

    private tokenize(script: string): FountainElement[] {
        let src = script.split(FountainParser.regex.splitter);
        let tokens: FountainElement[] = [];
        let match, parts, text, meta: string | undefined, dualDialogue = false;

        src.forEach(line => {
            // Title Page
            if (FountainParser.regex.title_page.test(line)) {
                // Split the entire title page section into individual elements
                let titlePageElements = line.split(FountainParser.regex.splitter);
            
                titlePageElements.forEach(titleElement => {
                    // Split each element into key-value pairs
                    parts = titleElement.split(/\:\n*/);
            
                    if (parts.length === 2) {
                        let key = parts[0].trim().toLowerCase().replace(/ /g, '_');
                        let value = parts[1].trim();
            
                        tokens.push({ type: 'title_page_' + key, text: value });
                    }
                });
                return;
            }

            /// Scene Headings with Scene Number
            if (match = line.match(FountainParser.regex.scene_heading)) {
                text = match[1] || match[2];
                meta = undefined; // Default to undefined

                const sceneNumberMatch = text.match(FountainParser.regex.scene_number);
                if (sceneNumberMatch && sceneNumberMatch.length > 2) {
                    meta = sceneNumberMatch[2]; // Assign the scene number if it exists
                    text = text.replace(FountainParser.regex.scene_number, '');
                }

                tokens.push({ type: 'scene_heading', text: text, scene_number: meta });
                return;
            }

            // // Centered
            // if (match = line.match(FountainParser.regex.centered)) {
            //     tokens.push({ type: 'centered', text: match[1].replace(/>|</g, '') });
            //     return;
            // }

            // Transitions
            if (match = line.match(FountainParser.regex.transition)) {
                tokens.push({ type: 'transition', text: match[1] || match[2] });
                return;
            }

            // Special case for dialogue blocks
            if (match = line.match(FountainParser.regex.dialogue)) {
                // Handling dual dialogue flag
                dualDialogue = !!match[2];

                // Split the dialogue block into parts
                let dialogueParts = match[3].split(/(\n+)/).reverse();

                dialogueParts.forEach(part => {
                    // Check for Parenthetical
                    if (FountainParser.regex.parenthetical.test(part)) {
                        tokens.push({ type: 'parenthetical', text: part.trim() });
                    } else if (part.trim().length > 0) {
                        // Regular Dialogue Text with Emphasis Processed
                        let processedDialogue = this.processEmphasis(part.trim());
                        tokens.push({ type: 'dialogue', text: processedDialogue });
                    }
                });

                tokens.push({ type: 'character', text: match[1].trim() });
                tokens.push({ type: 'dialogue_begin', text: '', dual: dualDialogue ? 'right' : undefined });

                // If the dialogue is dual, push a dual dialogue begin token
                if (dualDialogue) {
                    tokens.push({ type: 'dual_dialogue_begin', text: '' });
                }

                return;
            }

            // Section Lines
            if (match = line.match(FountainParser.regex.section)) {
                text = match[2]; // The section text after the hash marks
                const depth = match[1].length; // The number of hash marks indicates the depth
                tokens.push({ type: 'section', text: text, depth: depth });
                return;
            }

            // Synopsis Lines
            if (match = line.match(FountainParser.regex.synopsis)) {
                tokens.push({ type: 'synopsis', text: match[1].trim() });
                return;
            }

            // Note Lines
            if (match = line.match(FountainParser.regex.note)) {
                tokens.push({ type: 'note', text: match[1].trim() });
                return;
            }

            // Page Breaks
            if (FountainParser.regex.page_break.test(line)) {
                tokens.push({ type: 'page_break', text: '' });
                return;
            }

            // Line Breaks
            if (FountainParser.regex.line_break.test(line)) {
                tokens.push({ type: 'line_break', text: '' });
                return;
            }

            // Action Lines
            if (match = line.match(FountainParser.regex.action)) {
                text = this.processInlineNotes(match[0]);
                tokens.push({ type: 'action', text: text });
                return;
            }


            // Action (default case)
            tokens.push({ type: 'action', text: line });
        });

        return tokens;
    }

    public parseToHTML(): string {
        const elements = this.parse();
        return elements.map(el => this.elementToHTML(el)).join('');
    }

    private elementToHTML(el: FountainElement): string {
        switch (el.type) {
            case 'scene_heading':
                return `<h3>${el.text}</h3>`;
            case 'action':
                return `<div class="action"><p>${el.text}</p></div>`;
            case 'character':
                return `<h4>${el.text}</h4>`;
            case 'dialogue':
                return `<div class="dialogue"><p>${el.text}</p></div>`;
            case 'parenthetical':
                return `<div class="parenthetical"><p>${el.text}</p></div>`;
            case 'transition':
                return `<p class="transition">${el.text}</p>`;
            // Add more cases for different types
            default:
                return `<div>${el.text}</div>`;
        }
    }

    private processEmphasis(text: string): string {
        // Bold-Italic-Underline
        text = text.replace(FountainParser.regex.bold_italic_underline, '<span class="bold italic underline">$2</span>');

        // Bold-Italic
        text = text.replace(FountainParser.regex.bold_italic, '<span class="bold italic">$2</span>');

        // Bold-Underline
        text = text.replace(FountainParser.regex.bold_underline, '<span class="bold underline">$2</span>');

        // Italic-Underline
        text = text.replace(FountainParser.regex.italic_underline, '<span class="italic underline">$2</span>');

        // Bold
        text = text.replace(FountainParser.regex.bold, '<span class="bold">$2</span>');

        // Italic
        text = text.replace(FountainParser.regex.italic, '<span class="italic">$2</span>');

        // Underline
        text = text.replace(FountainParser.regex.underline, '<span class="underline">$2</span>');

        return text;
    }

    private processInlineNotes(line: string): string {
        // Replace inline notes with a marker or process as needed
        return line.replace(FountainParser.regex.note_inline, (match, noteText) => {
            // Example: Replacing inline note with a placeholder
            // In a real scenario, you might want to handle this differently
            return `<!-- Note: ${noteText.trim()} -->`;
        });
    }

}
