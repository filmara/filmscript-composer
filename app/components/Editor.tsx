import React, { useState } from 'react';
import { FountainParser, FountainElement } from './FountainParser';

const Editor: React.FC = () => {
    const [script, setScript] = useState('');
    const [elements, setElements] = useState<FountainElement[]>([]);

    const handleScriptChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setScript(e.target.value);
        const parser = new FountainParser(e.target.value);
        // console.log("parser.parse()", parser.parse())
        setElements(parser.parse());
    };



    return (
        <div>
            <textarea value={script} onChange={handleScriptChange} />
            <div>
                {elements.map((el, idx) => (
                    <div key={idx}>
                        <strong>{el.type}:</strong> {el.text}
                    </div>
                ))}
            </div>
        </div>
    );
};

export { Editor };
