import React from 'react';
import { Form } from '~/design-system';
import { useModal, useProject } from '~/context';
import { createNewProject, splitAndSaveScenes, findValuesByIds, type FormOutput } from '~/utils';
import { textExample, emptyPage } from '~/design-system/components/SpeedEditor/constants';
import { FountainSlate } from '~/utils/FountainSlate';

type NewProjectType = {
}

export const NewProject: React.FunctionComponent<NewProjectType> = () => {
  const { closeModal } = useModal()
  const { setProject } = useProject()

  const afterSubmit = async (event: FormOutput) => {
    console.log('event', event)
    const formData = findValuesByIds(event, ['project_name', 'initial_config', 'fountain_file']);
    
    const { project_name, initial_config, fountain_file } = formData;

    if (!project_name) {
      alert('Project name is required.');
      return;
    }

    console.log('fountain_file', fountain_file)

    const { id, name } = await createNewProject(event);
    let initialText = emptyPage;

    switch (initial_config) {
      case 'example_script':
        initialText = textExample;
        break;
      case 'empty_page':
        initialText = emptyPage;
        break;
      case 'import_fountain':
        initialText = JSON.parse(String(fountain_file));
        break;
      default:
        alert('Invalid configuration selected.');
        return;
    }
    console.log("initialText", initialText)
    await splitAndSaveScenes(Number(id), initialText);
    setProject({ id, name });
    closeModal();
  };

  const uploadFile = async (e: any) => {
    if (e.target.files[0] && e.target.files[0].name.endsWith('.fountain')) {
      const file = e.target.files[0];
      const text = await file.text();
      console.log('text', text)
      const fountain = new FountainSlate(text)
      const parsed = fountain.parse()
      console.log('parsed', parsed)
      return { value: JSON.stringify(parsed) };
      // const parsedData = parseFountainToSlate(text);  // Assuming `parseFountainToSlate` is your parser function
      // setData(parsedData);
    }
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
            },
          },
          {
            field: {
              type: 'radiobox',
              id: 'initial_config',
              variant: 'card',
              options: [
                { name: 'Empty Page', value: 'empty_page', description: "this is a description" },
                { name: 'Import Fountain', value: 'import_fountain' },
                { name: 'Example Script', value: 'example_script' },
              ],
              required: true,
            },
          },
          {
            field: {
              type: 'file_reader',
              id: 'fountain_file',
              label: 'File',
              uploadFile: uploadFile,
              required: true,
            },
          },
        ]}
        button={{ text: "Create", variant: 'neutral' }}
      />
    </div>
  );
};
