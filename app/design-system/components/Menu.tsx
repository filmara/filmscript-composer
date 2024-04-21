import React from 'react';

type ButtonProps = {
  text: string;
};

const Button: React.FC<ButtonProps> = ({
  text,
}) => {

  return (
    <div className="h-full bg-neutral-2100 hover:bg-neutral-1900 text-white font-bold py-2 px-4 inline-flex justify-center cursor-pointer flex items-center font-bold">
      {text}
    </div>
  );
};


export type MenuProps = { // Array of button texts
};

export const Menu: React.FC<MenuProps> = ({}) => {
  // 'Director', 'Analytics', 'Export'
  const buttonLabels = ['Writer']
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-neutral-2400 h-[8vh] flex justify-center items-center">
      {buttonLabels.map(label => (
        <Button key={label} text={label} />
      ))}
    </div>
  );
};
