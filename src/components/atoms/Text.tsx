// src/components/atoms/Text.tsx
import React from 'react';
import clsx from 'clsx'; // Import clsx to easily combine class names

interface TextProps {
  variant?: 'primary' | 'secondary' | 'gray' | 'black'; // variant is optional, defaults to 'primary'
  size?: 'small' | 'medium' | 'large' | '2xlarge'; // size is optional, defaults to 'medium'
  weight?: 'light' | 'normal' | 'medium' | 'bold';
  align?: 'left' | 'right' | 'center' | 'justify';
  children: React.ReactNode;
  className?: string; // Add className prop
}

interface ClassNameProps {
  variant: TextProps['variant'];
  size: TextProps['size'];
  weight: TextProps['weight'];
}

// getClassName function combines the variant and size classes
const getClassName = ({ variant, size, weight }: ClassNameProps): string => {
  let className = '';

  // Apply variant-specific classes
  switch (variant) {
    case 'secondary':
      className += 'text-secondary dark:text-darkSecondary ';
      break;
    case 'gray':
      className += 'text-gray-500 dark:text-gray-50 ';
      break;
    case 'black':
      className += 'text-gray-950 dark:text-gray-50 ';
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
    case '2xlarge':
      className += 'text-2xl ';
      break;
    default:
      className += 'text-base '; // default size
  }

  // Apply weight-specific classes
  switch (weight) {
    case 'light':
      className += 'font-light ';
      break;
    case 'medium':
      className += 'font-medium ';
      break;
    case 'bold':
      className += 'font-bold ';
      break;
    default:
      className += 'font-normal '; // default font weight
  }

  return className;
};

const Text: React.FC<TextProps> = ({
  variant = 'primary',
  size = 'medium',
  weight = 'normal',
  children,
  className = '', // default to empty string if no className is passed
  ...props
}) => {
  // Combine the calculated className with the custom className passed via props
  const combinedClassName = clsx(getClassName({ variant, size, weight }), className);

  return <div className={combinedClassName} {...props}>{children}</div>;
};

export default Text;
