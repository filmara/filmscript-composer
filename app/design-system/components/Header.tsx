import React from 'react';
import { Button, Dropdown } from '~/design-system'
import { saveScene, splitAndSaveScenes } from '~/utils'
import { useProject } from '~/context';
import { textExample } from './SpeedEditor/constants';
export type HeaderProps = { // Array of button texts
};

export const Header: React.FC<HeaderProps> = ({ }) => {
  const { setProject, project } = useProject();
  if (!project) return
  return (
    <div className='h-[32px] bg-neutral-200 border-b border-neutral-1200'>
      {/* <div className="px-2 text-p3-light text-neutral-600 inline-block">{project.name}</div>
      <Dropdown
        direction="left-bottom"
        button={{
          variant: 'neutral',
          size: 'tiny',
          text: 'File',
          onClick: (event) => console.log('')
        }}
        items={[
          // { text: 'Save Project', type: 'button', action: () => splitAndSaveScenes(project.id, ) },
          { text: 'Close', type: 'button', action: () => setProject(null) }
        ]}
      /> */}

    </div>
  );
};
