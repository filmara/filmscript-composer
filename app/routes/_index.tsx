import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/design-system";

export const meta: MetaFunction = () => {
  return [
    { title: "Filmscript Composer" },
    { name: "description", content: "Script editor for the new realm" },
  ];
};

export default function Index() {
  return (
    <div>
        <Button text="New Project" />
    </div>
  );
}
