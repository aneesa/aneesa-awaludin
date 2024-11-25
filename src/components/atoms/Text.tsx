// src/components/atoms/Text.tsx
import React from 'react';
import clsx from 'clsx'; // Import clsx to easily combine class names

interface TextProps {
  variant?: 'primary' | 'secondary'; // variant is optional, defaults to 'primary'
  size?: 'small' | 'medium' | 'large'; // size is optional, defaults to 'medium'
  children: React.ReactNode;
  className?: string; // Add className prop
}

interface ClassNameProps {
  variant: TextProps['variant'];
  size: TextProps['size'];
}

// getClassName function combines the variant and size classes
const getClassName = ({ variant, size }: ClassNameProps): string => {
  let className = '';

  // Apply variant-specific classes
  switch (variant) {
    case 'secondary':
      className += 'text-secondary dark:text-darkSecondary ';
      break;
    default:
      className += 'text-lightText dark:text-darkText ';
  }

  // Apply size-specific classes
  switch (size) {
    case 'small':
      className += 'text-sm ';
      break;
    case 'large':
      className += 'text-lg ';
      break;
    default:
      className += 'text-base '; // default size
  }

  return className;
};

const Text: React.FC<TextProps> = ({
  variant = 'primary',
  size = 'medium',
  children,
  className = '', // default to empty string if no className is passed
  ...props
}) => {
  // Combine the calculated className with the custom className passed via props
  const combinedClassName = clsx(getClassName({ variant, size }), className);

  return <div className={combinedClassName} {...props}>{children}</div>;
};

export default Text;
