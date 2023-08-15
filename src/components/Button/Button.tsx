import React from 'react';

type ButtonProps = {
  classList?: string;
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
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, classList = '', onClick, ...rest }, ref) => {
    return (
      <button ref={ref} className={classList} onClick={onClick} {...rest}>
        {children}
      </button>
    );
  }
);

export default Button;
