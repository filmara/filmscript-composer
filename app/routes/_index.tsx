import type { MetaFunction } from "@remix-run/node";
// import { SlateEditor } from '~/components/SlateEditor';
// import { Editor } from '~/components/Editor';

export const meta: MetaFunction = () => {
  return [
    { title: "Fountain Editor" },
    { name: "description", content: "Welcome to Remix (SPA Mode)!" },
  ];
};

export default function Index() {
  return (
    <div>
      <div>Editor</div>
      {/* <SlateEditor /> */}
      {/* <Editor /> */}
    </div>
  );
}
