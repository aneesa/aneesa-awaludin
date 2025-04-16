// src/components/atoms/Text.tsx
import React from 'react';
import clsx from 'clsx'; // Import clsx to easily combine class names

type TextTag = 'p' | 'span' | 'strong' | 'em' | 'label' | 'blockquote' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: TextTag;
  variant?: 'primary' | 'secondary' | 'gray' | 'black' | 'error';
  size?: 'small' | 'medium' | 'large' | '2xlarge';
  weight?: 'light' | 'normal' | 'medium' | 'bold';
  align?: 'left' | 'right' | 'center' | 'justify';
  children: React.ReactNode;
  className?: string;
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
    case 'error':
      className += 'text-error ';
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
  as = 'div',
  variant = 'primary',
  size = 'medium',
  weight = 'normal',
  children,
  className = '', // default to empty string if no className is passed
  ...props
}) => {
  const Tag = as;

  // Combine the calculated className with the custom className passed via props
  const combinedClassName = clsx(getClassName({ variant, size, weight }), className);

  // @ts-expect-error: Dynamic tag typing conflicts with strict JSX element types
  return <Tag className={combinedClassName} {...props}>{children}</Tag>;
};

export default Text;
