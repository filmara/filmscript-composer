import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Descendant } from 'slate';
import { loadScenes } from '~/utils';
import { emptyPage } from './constants';

// Define the type for the editor context
interface EditorContextType {
  value: Descendant[];
  setValue: (value: Descendant[]) => void;
}

// Create the context
const EditorContext = createContext<EditorContextType | undefined>(undefined);

// Define the provider component
interface EditorProviderProps {
  children: ReactNode;
  projectId: string;
  initialValue: Descendant[];
}

export const EditorProvider: React.FC<EditorProviderProps> = ({ children, initialValue, projectId }) => {

  const [value, setValue] = useState<Descendant[]>(emptyPage);

  useEffect(() => {
    (async () => {
      try {
        const sceneData = await loadScenes(Number(25))
        console.log('sceneData', sceneData)
        if (sceneData) {
          setValue(sceneData)
        }
      } catch (error) {
        console.error('Failed to fetch scenes', error);
      }
    })();
  }, [])

  return (
    <EditorContext.Provider value={{ value, setValue }}>
      {children}
    </EditorContext.Provider>
  );
};

// Hook to use the editor context
export const useEditor = (): EditorContextType => {
  const context = useContext(EditorContext);
  if (!context) {
    throw new Error('useEditor must be used within an EditorProvider');
  }
  return context;
};
