import React, { ButtonHTMLAttributes } from 'react';

// Props interface to define the properties that can be passed to the Button component
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // Label to display inside the button
  children: React.ReactNode;
  // Optional class name for additional styling
  className?: string;
  // Optional click handler for the button
  onClick?: () => void;
  // Optional to define the button type, such as "submit", "button", or "reset"
  type?: 'button' | 'submit' | 'reset';
  // Optional to disable the button
  disabled?: boolean;
}

/**
 * Button component that provides a reusable and customizable button.
 * @param props The properties to configure the button.
 * @param rest Any other attributes to add unto the button
 */
const Button = ({
  children,
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  ...rest
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`button ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
