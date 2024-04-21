import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import { Button, Container } from "~/design-system";
import { useModal, useProject } from '~/context';
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
    <div>
      <Container>
        <>
          <Button text="New Project" onClick={() => openModal({
            type: 'new_project', showBar: false,
            padding: 'large',
            size: 'medium'
          })} />
          {projects.map(([id, name]) => (
            <div key={id}>
              <Button text={name} variant="outline" size="tiny" onClick={() => setProject({ id: String(id), name })} />
            </div>
          ))}
        </>
      </Container>
    </div>
  );
}
