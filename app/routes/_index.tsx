import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/design-system";
import { useModal } from '~/context';

export const meta: MetaFunction = () => {
  return [
    { title: "Filmscript Composer" },
    { name: "description", content: "Script editor for the new realm" },
  ];
};

export default function Index() {
  const { openModal } = useModal();

  return (
    <div>
      <Button text="New Project" onClick={() => openModal({
        type: 'new_project', showBar: false,
        padding: 'large',
        size: 'medium'
      })} />
    </div>
  );
}
