import React from 'react';
import { Button, Dropdown } from '~/design-system'
import { saveScene } from '~/utils'
import { useProject} from '~/context';
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
            { text: 'Save Project', type: 'button', action: () => saveScene(1, 'Scene Data', 1) },
            { text: 'Close', type: 'button', action: () => setProjectId(null) }
        ]}
      />
      
    </div>
  );
};
