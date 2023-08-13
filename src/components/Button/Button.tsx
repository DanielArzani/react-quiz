import React from 'react';

type ButtonProps = {
  classList: string;
  children: React.ReactNode;
  onClick?: () => void;
};

/**
 * A generic use button element
 * @param classList Space separated list of Class names
 * @param children The content of the button
 * @param onClick A custom event handler to call on button click
 */
function Button({ children, classList, onClick }: ButtonProps) {
  return (
    <button className={classList} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
