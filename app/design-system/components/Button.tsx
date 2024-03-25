import React from 'react';

type ButtonProps = {
  text: string;
};

export const Button: React.FC<ButtonProps> = ({
  text,
}) => {

  return (
    <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      {text}
    </div>
  );
};
