// src/components/atoms/Button.tsx
import React from 'react';
import clsx from 'clsx'; // Import clsx to combine class names
import Text from './Text';

interface ButtonProps {
  children: React.ReactNode; // Label for the button
  onClick: () => void;
  className?: string; // Additional custom class names
  textVariant?: 'primary' | 'secondary'; // Optional text variant for the button label
  textSize?: 'small' | 'medium' | 'large'; // Optional text size
}

const getChildren = ({ children, textVariant, textSize }: { children: React.ReactNode, textVariant?: 'primary' | 'secondary', textSize?: 'small' | 'medium' | 'large' }) => {
  if (typeof children === 'string') {
    return <Text variant={textVariant} size={textSize} weight='bold' className="uppercase">{children}</Text>; // Wrap the string in the Text component
  }

  return children; // Otherwise, return the children as-is
};

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  className = '', 
  textVariant = 'primary', // Default to 'primary' for text variant
  textSize = 'medium' // Default to 'medium' for text size
}) => {
  // Use the getChildren function to conditionally render the content
  const renderedChildren = getChildren({ children, textVariant, textSize });

  return (
    <button
      onClick={onClick}
      className={clsx(
        'btn p-4 bg-primary dark:bg-darkPrimary rounded-full', // default button styles
        'transition-all duration-300 ease-in-out', // transition effect for all properties
        'hover:bg-primary-dark dark:hover:bg-darkPrimary-dark', // background change on hover
        'active:scale-95', // slight scale effect when clicked
        'outline-none', // remove default focus outline
        'hover:shadow-lg', // add shadow on hover
        'active:shadow-none', // remove shadow when clicked
        className // additional classes passed via props
      )}
    >
      {renderedChildren}
    </button>
  );
};

export default Button;
