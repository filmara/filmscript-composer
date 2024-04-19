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
  const { projectId } = useProject()
  if (!projectId) return;

  return (
    <div>
        <Header />
        <SpeedEditor projectId={projectId} />
        <Menu />
    </div>
  );
}
