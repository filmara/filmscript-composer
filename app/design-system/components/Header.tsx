import React from 'react';
import { Button, Dropdown } from '~/design-system'
import { saveScene, splitAndSaveScenes } from '~/utils'
import { useProject} from '~/context';
import { textExample } from './SpeedEditor/constants';
export type HeaderProps = { // Array of button texts
};

export const Header: React.FC<HeaderProps> = ({ }) => {
  const { setProjectId } = useProject();
  return (
    <div className='pl-8 pt-2 pb-2'>
      <Dropdown 
        direction="left-bottom"
        button={{
            variant: 'neutral',
            size: 'tiny',
            text: 'File',
            onClick: (event) => console.log('')
        }}
        items={[
            { text: 'Save Project', type: 'button', action: () => splitAndSaveScenes(textExample) },
            { text: 'Close', type: 'button', action: () => setProjectId(null) }
        ]}
      />
      
    </div>
  );
};
