import type { MetaFunction } from "@remix-run/node";
import { CutEditor } from '~/components/CutEditor';

export const meta: MetaFunction = () => {
  return [
    { title: "Fountain" },
    { name: "description", content: "Editor" },
  ];
};

export default function Index() {
  return (
    <div>
      <CutEditor />
    </div>
  );
}
