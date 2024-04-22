import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from "@remix-run/react";

type Project = {
  id: string;
  name: string;
} | null

interface ProjectContextType {
  project: Project
  setProject: (project: Project) => void;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [project, setProject] = useState<Project>(null);
  const navigate = useNavigate();

  useEffect(() => { 
    if (project) {
      navigate('/script')
    } else {
      navigate('/')
    }
  }, [project])

  return (
    <ProjectContext.Provider value={{ project, setProject }}>
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
