import { useEffect, useState } from "react";
import { Button } from "~/design-system";
import { useModal, useProject } from '~/context';
import { fetchProjects } from '~/utils';
import { NewProject } from "~/design-system";
import { Loader } from '~/design-system/components';

export default function Index() {
  const { openModal } = useModal();

  const [projects, setProjects] = useState<[number, string][]>([]);

  const { openProject } = useProject();

  useEffect(() => {
    (async () => {
      try {
        const projectData = await fetchProjects();
        setProjects(projectData);
      } catch (error) {
        console.error('Failed to fetch projects', error);
      }
    })();
  }, []);

  return (
    <div className="p-8 h-[100vh] w-full bg-neutral-200 flex justify-center">
      {/* <Loader /> */}
      <div className="p-4 max-w-[842px] w-full h-max rounded-md border border-neutral-1100 bg-neutral-100 shadow-md">
        <div className="text-neutral-2400 text-h4-bold pb-2">Projects</div>
        <div className="px-4 pt-4 pb-6 bg-neutral-400 rounded border border-neutral-900">
          {projects.map(([id, name]) => (
            <div key={id} className="text-neutral-1900 bg-neutral-600 cursor-pointer px-4 py-2 rounded-sm border border-neutral-1200 w-fit text-p3-bold" onClick={() => openProject({ id: String(id), name })}>
              {name}
            </div>
          ))}
        </div>
        <div className="pt-6">
          <Button text="New" variant="outline" onClick={() => openModal({
            type: 'new_project', showBar: false,
            padding: 'large',
            size: 'medium'
          })} />
        </div>
          
      </div>
    </div>
  );
}
