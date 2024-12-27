// src/components/atoms/Pill.tsx
import React from 'react';
import clsx from 'clsx';
import Text from './Text';

interface PillProps {
  variant?: 'blue' | 'purple';
  size?: 'small' | 'medium' | 'large';
  weight?: 'light' | 'normal' | 'medium' | 'bold';
  children: React.ReactNode;
  className?: string; // Allow additional custom classes
}

interface ClassNameProps {
  variant: PillProps['variant'];
  size: PillProps['size'];
}

// getClassName function combines the variant, size classes
const getClassName = ({ variant, size }: ClassNameProps): string => {
  let className = '';

  // Apply variant-specific classes (color and border)
  switch (variant) {
    case 'purple':
      className += 'border border-purple-600 bg-purple-300 dark:border-purple-300 dark:bg-purple-600 ';
      break;
    default:
      className += 'border border-blue-600 bg-blue-300 dark:border-blue-300 dark:bg-blue-600 '; // default to blue
  }

  // Apply size-specific classes (padding and text size)
  switch (size) {
    case 'small':
      className += 'py-1 px-2 ';
      break;
    case 'large':
      className += 'py-2 px-4 ';
      break;
    default:
      className += 'py-1.5 px-3 '; // default size
  }

  // Add rounded pill shape
  className += 'w-fit rounded-xl ';

  return className;
};

const Pill: React.FC<PillProps> = ({
  variant = 'blue',
  size = 'medium',
  weight = 'normal',
  children,
  className = '',
  ...props
}) => {
  // Combine the calculated className with the custom className passed via props
  const combinedClassName = clsx(getClassName({ variant, size }), className);

  return (
    <Text size={size} weight={weight} className={combinedClassName} {...props}>
      {children}
    </Text>
  );
};

export default Pill;
