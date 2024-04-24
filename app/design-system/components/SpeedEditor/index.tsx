import React, { useEffect } from 'react';
import { EditorProvider } from './context';
import { SpeedEditor as Editor } from './SpeedEditor'
import { textExample } from './constants';
import { StatusBar } from './StatusBar';


interface SpeedEditorProps {
    projectId: string;
}

const SpeedEditor: React.FC<SpeedEditorProps> = ({ projectId }) => {
    return (
        <EditorProvider projectId={projectId}>
            <Editor projectId={projectId} />
            <StatusBar projectId={projectId} />
        </EditorProvider>
    );
};

export { SpeedEditor };
