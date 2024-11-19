// src/components/atoms/Button.tsx
import React from 'react';
import clsx from 'clsx'; // Import clsx to combine class names
import Text from './Text';

interface ButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'btn p-4 bg-primary dark:bg-darkPrimary rounded', // default button styles
        'transition-all duration-300 ease-in-out', // transition effect for all properties
        'hover:bg-primary-dark dark:hover:bg-darkPrimary-dark', // background change on hover
        'active:scale-95', // slight scale effect when clicked
        'outline-none', // remove default focus outline
        'hover:shadow-lg', // add shadow on hover
        'active:shadow-none', // remove shadow when clicked
        className // additional classes passed via props
      )}
    >
      <Text>{label}</Text>
    </button>
  );
};

export default Button;
