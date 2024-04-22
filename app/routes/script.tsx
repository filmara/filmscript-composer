import { SpeedEditor, Menu, Header } from '~/design-system/components';
import { useProject } from "~/context";

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
