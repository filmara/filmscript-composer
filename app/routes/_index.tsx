import type { MetaFunction } from "@remix-run/node";
import { SpeedEditor, Menu } from '~/design-system/components';

export const meta: MetaFunction = () => {
  return [
    { title: "Filmscript Composer" },
    { name: "description", content: "Script editor for the new realm" },
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
