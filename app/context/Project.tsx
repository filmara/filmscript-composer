import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from "@remix-run/react";
import { useFileSystem, type FileSystemContextType } from './FileSystem';
import { getScenes } from '~/utils';
import { Loader } from '~/design-system';

type Project = {
  id: string;
  name: string;
} | null

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

    // const fetchScenes = async () => {
    //   if (!project?.id) return;
    //   const scenesData: any = await getScenes(project.id);
    //   const scenesWithImages = await Promise.all(scenesData.map(async (scene: any) => {
    //     const shoots = await Promise.all(scene.shoots.map(async (shoot: any) => {
    //       // Only attempt to load images if image_url exists
    //       let imageUrl = '';
    //       if (shoot.image_url) {
    //         imageUrl = await readFileAndStore(shoot.image_url, shoot.description);
    //       }
    //       return { ...shoot, imageUrl };
    //     }));
    //     return { ...scene, shoots };
    //   }));
    //   setScenes(scenesWithImages);
    // };

    // if (project) {
    //   fetchScenes();
    // }
  }, [project])

  return (
    <ProjectContext.Provider value={{ project, scenes, closeProject, openProject }}>
      {/* {project ? children : <div className="p-8 h-[100vh] w-full bg-neutral-200 flex justify-center"><Loader /></div>} */}
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
