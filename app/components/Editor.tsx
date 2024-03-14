import React, { useState } from 'react';
import { FountainParser, FountainElement } from '../utils/FountainParser';

const Editor: React.FC = () => {
    const [script, setScript] = useState('');
    const [elements, setElements] = useState<FountainElement[]>([]);

    const handleScriptChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setScript(e.target.value);
        const parser = new FountainParser(e.target.value);
        setElements(parser.parse());
    };

    return (
        <div className="flex-container">
            <textarea value={script} onChange={handleScriptChange} className="text-editor" />
            <div className="screenplay">
                {elements.map((el, idx, arr) => {      
                    const createMarkup = (htmlContent: any) => ({ __html: htmlContent });
                    const isDualDialogue = el.dual && arr[idx + 1]?.dual;
                    switch (el.type) {
                        case 'title_page_title':
                        case 'title_page_credit':
                        case 'title_page_author':
                        case 'title_page_source':
                        case 'title_page_draft_date':
                        case 'title_page_date':
                        case 'title_page_contact':
                            return <div key={idx} className={`title-page ${el.type}`} dangerouslySetInnerHTML={createMarkup(el.text)} />;
                        case 'scene_heading':
                            return <h3 key={idx} dangerouslySetInnerHTML={createMarkup(el.text)} />;
                        case 'action':
                            return <div key={idx} className="action"><p dangerouslySetInnerHTML={createMarkup(el.text)} /></div>;
                        case 'character':
                            return (
                                <div key={idx} className={`character${isDualDialogue ? ' dual' : ''}`}>
                                    <h4 dangerouslySetInnerHTML={createMarkup(el.text)} />
                                </div>
                            );

                        case 'dialogue':
                            return (
                                <div key={idx} className={`dialogue${isDualDialogue ? ' dual' : ''}`}>
                                    <p dangerouslySetInnerHTML={createMarkup(el.text)} />
                                </div>
                            );
                        case 'parenthetical':
                            return <div key={idx} className="dialogue parenthetical"><p dangerouslySetInnerHTML={createMarkup(el.text)} /></div>;
                        case 'transition':
                            return <p key={idx} className="transition" dangerouslySetInnerHTML={createMarkup(el.text)} />;
                        case 'note':
                            return <div key={idx} className="note" dangerouslySetInnerHTML={createMarkup(el.text)} />;
                        case 'section':
                            return <h5 key={idx} className="section" dangerouslySetInnerHTML={createMarkup(el.text)} />;
                        case 'synopsis':
                            return <p key={idx} className="synopsis" dangerouslySetInnerHTML={createMarkup(el.text)} />;
                        case 'page_break':
                            return <div key={idx} className="page-break"></div>;

                        default:
                            return <div key={idx} dangerouslySetInnerHTML={createMarkup(el.text)} />;
                    }
                })}
            </div>

        </div>
    );
};

const formatElementText = (el: FountainElement): JSX.Element | string => {
    // Format the text based on the type of element, e.g., handle emphasis
    // This is a placeholder function, adjust as per your formatting requirements
    return el.text;
};

export { Editor };
