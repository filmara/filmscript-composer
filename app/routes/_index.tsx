import type { MetaFunction } from "@remix-run/node";
import { CutEditor } from '~/components/CutEditor';
// import { Button } from 'node_modules/editor-design-system/lib/index.js';

export const meta: MetaFunction = () => {
  return [
    { title: "Fountain" },
    { name: "description", content: "Editor" },
  ];
};

export default function Index() {
  return (
    <div>
      {/* <Button text='test' /> */}
      <CutEditor />
    </div>
  );
}
