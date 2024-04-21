import React from 'react';
import { Form } from '~/design-system';
import { useModal, useProject } from '~/context';
import { createNewProject } from '~/utils';

type NewProjectType = {
}

export const NewProject: React.FunctionComponent<NewProjectType> = () => {
  const { closeModal } = useModal()
  const { setProject } = useProject()

  const afterSubmit = async (event: any) => {
    const { id, name } = await createNewProject(event)
    setProject({ id, name });
    closeModal()
  }
  return (
    <div className="flex flex-col space-y-4">
      <div>
        <div className="text-subheading-bold text-neutral-100">New Project</div>
      </div>
      <Form
        debug={false}
        type="dynamic"
        mode="function"
        preventDefault={true}
        afterSubmit={afterSubmit}
        fields={[
          {
            field: {
              type: 'text',
              id: 'project_name',
              label: 'Name',
              placeholder: 'Untitled',
              required: true,
            }
          },
        ]}
        button={{ text: "Create", variant: 'neutral' }}
      />
    </div>
  );
};
