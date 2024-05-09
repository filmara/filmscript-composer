import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Descendant } from 'slate';
import { loadScenes } from '~/utils';
import { emptyPage } from './constants';
import { Loader } from '~/design-system';

// Define the type for the editor context
interface EditorContextType {
  value: Descendant[];
  setValue: (value: Descendant[]) => void;
  loaded: boolean;
}

// Create the context
const EditorContext = createContext<EditorContextType | undefined>(undefined);

// Define the provider component
interface EditorProviderProps {
  children: ReactNode;
  projectId: string;
}

export const EditorProvider: React.FC<EditorProviderProps> = ({ children, projectId }) => {

  const [value, setValue] = useState<Descendant[]>(emptyPage);
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sceneData = await loadScenes(projectId);  // Make sure to convert projectId to number correctly
        if (sceneData) {
          setValue(sceneData);  // Set the fetched data
        }
        setTimeout(() => {
          setLoaded(false)
        }, 2000)
        // Set loaded to true after fetching
      } catch (error) {
        console.error('Failed to fetch scenes', error);
        setLoaded(false);  // Consider setting loaded to false in case of error
      }
    };

    fetchData();
  }, [projectId]);  // Depend on projectId to re-run the effect when it changes

  if (loaded) {
    return <div className="h-[88vh] w-full flex justify-center"><Loader /></div>
  }

  return (
    <EditorContext.Provider value={{ value, setValue, loaded }}>
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
