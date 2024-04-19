import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from "@remix-run/react";

interface ProjectContextType {
  projectId: string | null;
  setProjectId: (id: string | null) => void;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [projectId, setProjectId] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => { 
    if (projectId) {
      navigate('/writer')
    } else {
      navigate('/')
    }
  }, [projectId])

  return (
    <ProjectContext.Provider value={{ projectId, setProjectId }}>
      {projectId}
      {children}
    </ProjectContext.Provider>
  );
};

export const useProject = (): ProjectContextType => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error('useProject must be used within a ProjectProvider');
  }
  return context;
};
