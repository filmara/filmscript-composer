import { useEffect, useState } from "react";
import { Button } from "~/design-system";
import { useModal, useProject } from '~/context';
import { fetchProjects } from '~/utils';

export default function Index() {
  const { openModal } = useModal();

  const [projects, setProjects] = useState<[number, string][]>([]);

  const { setProject } = useProject();

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
    <div className="p-8 h-[100vh] bg-neutral-2200">
      <div className="p-4 rounded-md border-2 border-neutral-1500 bg-neutral-1600">
        <div className="text-neutral-700 text-h4-bold pb-2">Projects</div>
        <div className="px-4 pt-4 pb-6 bg-neutral-1900 rounded">
          {projects.map(([id, name]) => (
            <div key={id} className="text-neutral-800 bg-neutral-1700 cursor-pointer px-4 py-2 rounded-sm border border-neutral-1200 w-fit text-p3-bold" onClick={() => setProject({ id: String(id), name })}>
              {name}
            </div>
          ))}
        </div>
        <div className="pt-6">
          <Button text="New" variant="neutral" onClick={() => openModal({
            type: 'new_project', showBar: false,
            padding: 'large',
            size: 'medium'
          })} />
        </div>

      </div>
    </div>
  );
}
