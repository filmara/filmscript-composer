import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Descendant } from 'slate';

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
  initialValue: Descendant[];
}

export const EditorProvider: React.FC<EditorProviderProps> = ({ children, initialValue }) => {
  const [value, setValue] = useState<Descendant[]>(initialValue);

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
