import React from 'react';

type ButtonProps = {
  classList: string;
  children: React.ReactNode;
  onClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * A generic use button element
 * @param classList Space separated list of Class names
 * @param children The content of the button
 * @param onClick A custom event handler to call on button click
 * @param rest Any other attributes to give to the button element
 */
function Button({ children, classList, onClick, ...rest }: ButtonProps) {
  return (
    <button className={classList} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}

export default Button;
