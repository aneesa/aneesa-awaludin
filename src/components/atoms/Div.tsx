// src/components/atoms/Div.tsx
import React from 'react';
import clsx from 'clsx'; // Import clsx to easily combine class names
import Text from './Text';

interface DivProps {
  variant?: 'primary' | 'accent' | 'light'; // The variant to define the background style
  children: React.ReactNode; // Content of the div
  className?: string; // Additional custom class names for extra styling
}

const getChildren = ({ children }: { children: React.ReactNode }) => {
  if (typeof children === 'string') {
    return <Text>{children}</Text>; // Wrap the string in the Text component
  }

  return children; // Otherwise, return the children as-is
};

const getClassName = (variant: DivProps['variant']): string => {
  let className = 'p-4 '; // default text and padding

  // Variant-specific classes
  switch (variant) {
    case 'primary':
      className += 'bg-primary dark:bg-darkPrimary ';
      break;
    case 'accent':
      className += 'bg-accent dark:bg-darkAccent ';
      break;
    case 'light':
      className += 'bg-backgroundLight dark:bg-backgroundDark ';
      break;
    default:
      className += 'bg-primary dark:bg-darkPrimary '; // Default to 'primary' if no variant
  }

  return className;
};

const Div: React.FC<DivProps> = ({ variant = 'primary', children, className = '' }) => {
  const combinedClassName = clsx(getClassName(variant), className);

  // Use the getChildren function to conditionally render the content
  const renderedChildren = getChildren({ children });

  return <div className={combinedClassName}>{renderedChildren}</div>;
};

export default Div;
