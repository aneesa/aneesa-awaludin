// src/components/atoms/Button.tsx
import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`btn p-2 bg-primary text-lightText dark:bg-darkPrimary dark:text-darkText rounded ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
