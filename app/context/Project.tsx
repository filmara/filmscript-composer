import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from "@remix-run/react";
import { useFileSystem, type FileSystemContextType } from './FileSystem';
import { getScenes, fetchProjects, deleteProject } from '~/utils';

type Project = {
  id: string;
  name: string;
} | null

interface Shoot {
  id: string;
  description: string;
  image_url?: string;
  imageUrl?: string;
}

interface Scene {
  id: string;
  title: string;
  shoots: Shoot[];
}

export interface ProjectContextType {
  scenes: Scene[];
  project: Project;
  projects: [number, string][];
  openProject: (project: Project) => void;
  closeProject: () => void;
  setProject: (project: Project) => void;
  refreshProjects: () => Promise<void>;
  deleteCurrentProject: () => Promise<void>;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { getImage, readFileAndStore } = useFileSystem() as FileSystemContextType;
  const [project, setProject] = useState<Project>(null);
  const [scenes, setScenes] = useState<Scene[]>([]);
  const [projects, setProjects] = useState<[number, string][]>([]);

  const navigate = useNavigate();

  const refreshProjects = async () => {
    try {
      const projectData = await fetchProjects();
      if (Array.isArray(projectData)) {
        setProjects(projectData);
      } else {
        console.error('Project data is not in expected format:', projectData);
      }
    } catch (error) {
      console.error('Failed to fetch projects:', error);
    }
  };

  const deleteCurrentProject = async () => {
    if (!project?.id) return;
    
    try {
      await deleteProject(project.id);
      closeProject();
      await refreshProjects();
    } catch (error) {
      console.error('Failed to delete project:', error);
      throw error;
    }
  };

  const openProject = (project: Project) => {
    setProject(project);
  }

  const closeProject = () => {
    setScenes([]);
    setProject(null);
  }

  useEffect(() => {
    refreshProjects();
  }, []);

  useEffect(() => {
    if (project) {
      navigate('/writer')
    } else {
      navigate('/')
    }

    const fetchScenes = async () => {
      if (!project?.id) return;
      const scenesData = await getScenes(project.id);
      if (!scenesData || !Array.isArray(scenesData)) {
        console.error('No scenes data received or invalid format');
        return;
      }
      const scenesWithShoots: Scene[] = scenesData.map((scene: any) => ({
        ...scene,
        shoots: (scene.shoots || []).map((shoot: any) => ({
          ...shoot,
          imageUrl: shoot.image_url || ''
        }))
      }));
      setScenes(scenesWithShoots);
    };

    if (project) {
      fetchScenes();
    }
  }, [project]);

  return (
    <ProjectContext.Provider value={{ 
      project, 
      scenes, 
      projects,
      closeProject, 
      openProject,
      setProject,
      refreshProjects,
      deleteCurrentProject
    }}>
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
