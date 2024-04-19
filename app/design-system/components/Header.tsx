import React from 'react';
import { Button, Dropdown } from '~/design-system'
import { saveScene } from '~/utils'
export type HeaderProps = { // Array of button texts
};

export const Header: React.FC<HeaderProps> = ({ }) => {
  const buttonLabels = ['Save']
  return (
    <div className='pl-8 pt-2 pb-2'>
      <Dropdown 
        direction="left-bottom"
        button={{
            variant: 'secondary',
            size: 'tiny',
            text: 'File',
            onClick: (event) => console.log('')
        }}
        items={[
            { text: 'Load Project', type: 'button', action: () => console.log('') },
            { text: 'Save Project', type: 'button', action: () => saveScene(1, 'Scene Data', 1) },
            { text: 'Close', type: 'button', action: () => console.log('') }
        ]}
      />
      
    </div>
  );
};
