import type { MetaFunction } from "@remix-run/node";
import { SpeedEditor, Menu } from '~/design-system/components';

export const meta: MetaFunction = () => {
  return [
    { title: "Fountain" },
    { name: "description", content: "Editor" },
  ];
};

export default function Index() {
  return (
    <div>
      <SpeedEditor />
      <Menu />
    </div>
  );
}
