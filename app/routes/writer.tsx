import type { MetaFunction } from "@remix-run/node";
import { SpeedEditor, Menu, Header } from '~/design-system/components';
import { useProject } from "~/context";

export const meta: MetaFunction = () => {
  return [
    { title: "Filmscript Composer" },
    { name: "description", content: "Script editor for the new realm" },
  ];
};

export default function Writer() {
  const { project } = useProject()
  if (!project) return;

  return (
    <div>
        <Header />
        <SpeedEditor projectId={project.id} />
        <Menu />
    </div>
  );
}
