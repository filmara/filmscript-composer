import { useEffect, useState } from 'react';
import { Menu, Header } from '~/design-system/components';
import { Button } from '~/design-system';
import { useProject } from "~/context";
import { getScenes, updateScenePrompts } from '~/utils'

export default function Writer() {
  const { project } = useProject()
  if (!project) return;
  console.log("project", project)
  const [scenes, setScenes]: any = useState()
  useEffect(() => {
    (async () => {
      const data = await getScenes(Number(project.id))
      setScenes(data);
    })()
  }, [])
  console.log("scenes", scenes)
  return (
    <div>
      <Header />
      <div className="w-[842px] mx-auto ">
        <Button text="Update" onClick={() => updateScenePrompts(Number(project.id))}/>

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
