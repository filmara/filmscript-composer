import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import { Button } from "~/design-system";
import { useModal } from '~/context';
import { fetchProjects } from '~/utils';

export const meta: MetaFunction = () => {
  return [
    { title: "Filmscript Composer" },
    { name: "description", content: "Script editor for the new realm" },
  ];
};

export default function Index() {
  const { openModal } = useModal();
  const [projects, setProjects] = useState<[number, string][]>([]);
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
    <div>
      <Button text="New Project" onClick={() => openModal({
        type: 'new_project', showBar: false,
        padding: 'large',
        size: 'medium'
      })} />
      {projects.map(([id, name]) => (
        <div key={id} className="text-neutral-200">{name}</div>
      ))}
    </div>
  );
}
