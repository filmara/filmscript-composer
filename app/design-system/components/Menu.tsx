import React from 'react';
import { useNavigate } from "@remix-run/react";

type ButtonProps = {
  text: string;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({
  text,
  onClick
}) => {

  return (
    <div className="h-full bg-neutral-600 hover:bg-neutral-500 text-neutral-2400 font-bold py-2 px-4 inline-flex justify-center cursor-pointer flex items-center font-bold" onClick={onClick}>
      {text}
    </div>
  );
};


export type MenuProps = { // Array of button texts
};

export const Menu: React.FC<MenuProps> = ({}) => {
  // 'Analytics', 'Export'
  const navigate = useNavigate();

  const buttonLabels = ['Writer', 'Director']
  return (
    <div className="fixed border-t border-neutral-1700 bottom-0 left-0 right-0 bg-neutral-400 h-[8vh] flex justify-center items-center">
      {buttonLabels.map(label => (
        <Button key={label} text={label} onClick={() => navigate(`/${label}`)} />
      ))}
    </div>
  );
};
