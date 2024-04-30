import React, { useEffect, useState } from 'react';
import { Menu, Header } from '~/design-system/components';
import { Button } from '~/design-system';
import { useProject, useFileSystem } from "~/context";
import { getScenes, downloadImage } from '~/utils';
import { FileSystemContextType, ProjectContextType } from '~/context';

export default function Story() {
  const { project } = useProject() as ProjectContextType;
  const { getImage, readFileAndStore } = useFileSystem() as FileSystemContextType;
  const [scenes, setScenes]: any = useState([]);

  useEffect(() => {
    const fetchScenes = async () => {
      if (!project?.id) return;
      const scenesData: any = await getScenes(project.id);
      const scenesWithImages = await Promise.all(scenesData.map(async (scene: any) => {
        const shoots = await Promise.all(scene.shoots.map(async (shoot: any) => {
          // Only attempt to load images if image_url exists
          let imageUrl = '';
          if (shoot.image_url) {
            imageUrl = await readFileAndStore(shoot.image_url, shoot.description);
          }
          return { ...shoot, imageUrl };
        }));
        return { ...scene, shoots };
      }));
      setScenes(scenesWithImages);
    };

    if (project) {
      fetchScenes();
    }
  }, [project]);

  return (
    <div>
      <Header />
      <div className="overflow-y-auto h-[88vh]">
        <div className="w-[842px] mx-auto">
          <div className="">
            {scenes.map((scene: any) => (
              <div key={scene.id} className="bg-neutral-400 my-8 h-[full] w-full">
                <div>{scene.title}</div>

                <div>
                  {scene.shoots.map((shoot: any, key: number) => (
                    <div>
                      {shoot.description}
                      <img key={key} src={shoot.imageUrl} alt="Shoot" />
                      <Button text="Download" variant="outline" size="tiny" onClick={() => downloadImage(project.id, Number(shoot.id))} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Menu />
    </div>
  );
}
