// src/components/atoms/Button.tsx
import React from 'react';
import clsx from 'clsx'; // Import clsx to combine class names
import Text from './Text';

interface ButtonProps {
  children: React.ReactNode; // Label for the button
  variant?: 'primary' | 'accent' | 'light'; // variant is optional, defaults to 'primary'
  onClick?: () => void;
  className?: string; // Additional custom class names
  textSize?: 'small' | 'medium' | 'large'; // Optional text size
  type?: 'button' | 'submit' | 'reset'; // Allow passing button type
}

interface ClassNameProps {
  variant: ButtonProps['variant'];
}

const getClassName = ({ variant }: ClassNameProps): string => {
  // Apply variant-specific classes
  switch (variant) {
    case 'accent':
      return clsx(
        'bg-accent dark:bg-darkAccent',
        'hover:bg-accent dark:hover:bg-darkAccent'
      )
    case 'light':
      return clsx(
        'bg-backgroundLight dark:bg-backgroundDark',
        'hover:bg-backgroundLight dark:hover:bg-backgroundDark'
      )
    default:
      return clsx(
        'bg-primary dark:bg-darkPrimary',
        'hover:bg-primary dark:hover:bg-darkPrimary',
      )
  }
};

interface TextProps {
  children: ButtonProps['children'];
  textSize: ButtonProps['textSize'];
}

const getChildren = ({ children, textSize }: TextProps) => {
  if (typeof children === 'string') {
    return <Text variant="primary" size={textSize} weight='bold' className="uppercase">{children}</Text>; // Wrap the string in the Text component
  }

  return children; // Otherwise, return the children as-is
};

const Button: React.FC<ButtonProps> = ({ 
  children,
  variant = 'primary', // Default to 'primary' variant
  onClick = () => undefined, 
  className = '',
  textSize = 'medium', // Default to 'medium' for text size
  type = 'button' // Default to 'button'
}) => {
  // Use the getChildren function to conditionally render the content
  const renderedChildren = getChildren({ children, textSize });

  return (
    <button
      onClick={onClick}
      type={type}
      className={clsx(
        'btn p-4 rounded-full', // default button styles
        'transition-all duration-300 ease-in-out', // transition effect for all properties
        getClassName({ variant }),
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
