import { useEffect, useState } from 'react';
import { Menu, Header } from '~/design-system/components';
import { Button, Image } from '~/design-system';
import { useProject, useFileSystem } from "~/context";
import { getScenes, processScenes, downloadImage } from '~/utils'

export default function Writer() {
  const { project } = useProject()
  if (!project) return;
  console.log("project", project)
  const [scenes, setScenes]: any = useState()
  const { resourceDir, createProjectsFolder, readFile } = useFileSystem();
  useEffect(() => {
    (async () => {
      const data = await getScenes(project.id)
      setScenes(data);
    })()
  }, [])
  console.log("scenes", scenes)
  console.log("resourceDir", resourceDir)
  return (
    <div>
      <Header />
      <div className="w-[842px] mx-auto ">
        <Button text="processScenes" onClick={() => processScenes(project.id)}/>
        <Button text="Download" onClick={() => downloadImage(project.id, Number(1))}/>
        <Button text="readFile" onClick={() => readFile()}/>
        {/* <Image  /> */}
        <div className="grid grid-cols-3 gap-4 place-items-center">
          {scenes && scenes.map((scene: any) => {
            return <div className="bg-neutral-1200 h-[64px] w-full">{scene.id}</div>
          })}
        </div>
      </div>
      <Menu />
    </div>
  );
}
