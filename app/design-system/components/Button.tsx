import React from 'react';

type ButtonProps = {
  text: string;
};

export const Button: React.FC<ButtonProps> = ({
  text,
}) => {

  return (
    <div>
      {text}
    </div>
  );
};
