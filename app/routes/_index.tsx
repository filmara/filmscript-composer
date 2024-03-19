import type { MetaFunction } from "@remix-run/node";
import { Editor } from '~/components/Editor';
import { FountainEditor } from '~/components/FountainEditorV2';
import { SlateEditor } from '~/components/SlateEditor';

export const meta: MetaFunction = () => {
  return [
    { title: "Fountain Editor" },
    { name: "description", content: "Welcome to Remix (SPA Mode)!" },
  ];
};

export default function Index() {
  return (
    <div>
      {/* <SlateEditor /> */}
      <FountainEditor />
    </div>
  );
}
