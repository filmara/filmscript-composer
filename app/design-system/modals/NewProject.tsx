import React from 'react';
import { Form } from '~/design-system';
import { useModal } from '~/context/Modal';
// import { useNotification } from '~/context/Notification';

type NewProjectType = {
}

export const NewProject: React.FunctionComponent<NewProjectType> = () => {
  const { closeModal } = useModal()

  return (
    <div className="flex flex-col space-y-4">
      <div>
        <div className="text-subheading-bold text-neutral-800">New Project</div>
      </div>
      <Form
        debug={false}
        type="dynamic"
        fields={[
          {
            field: {
            type: 'text',
            id: 'project_name',
            label: 'Name',
            placeholder: 'Untitled',
            required: true,
          }},
        ]}
        button={{ text, variant: 'primary' }}
      />
    </div>
  );
};
