import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from "@remix-run/react";
import { useFileSystem, type FileSystemContextType } from './FileSystem';
import { getScenes } from '~/utils';

type Project = {
  id: string;
  name: string;
} | null

interface Shoot {
  id: string;
  description: string;
  image_url?: string;
}

interface Scene {
  id: string;
  title: string;
  shoots: Shoot[];
}


export interface ProjectContextType {
  scenes: any;
  project: Project
  openProject: (project: Project) => void;
  closeProject: () => void;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { getImage, readFileAndStore } = useFileSystem() as FileSystemContextType;
  const [project, setProject] = useState<Project>(null);
  const [scenes, setScenes]: any = useState([]);

  const navigate = useNavigate();

  const openProject = (project: Project) => {
    setProject(project)
  }

  const closeProject = () => {
    setScenes([])
    setProject(null)
  }
  useEffect(() => {
    if (project) {
      navigate('/writer')
    } else {
      navigate('/')
    }

    const fetchScenes = async () => {
      if (!project?.id) return;
      const scenesData = await getScenes(project.id);
      if (!scenesData) {
        // Handle the case where no data is returned
        console.error('No scenes data received');
        return;
      }
      const scenesWithShoots: Scene[] = scenesData.map(scene => ({
        ...scene,
        shoots: scene.shoots.map(shoot => ({
          ...shoot,
          imageUrl: shoot.image_url || ''
        }))
      }));
      setScenes(scenesWithShoots);
    };

    if (project) {
      fetchScenes();
    }
  }, [project])

  return (
    <ProjectContext.Provider value={{ project, scenes, closeProject, openProject }}>
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
