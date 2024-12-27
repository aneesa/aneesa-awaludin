// src/components/atoms/Flex.tsx
import React from 'react';
import clsx from 'clsx'; // Import clsx to easily combine class names
import Div from './Div';

interface FlexProps {
  direction?: 'row' | 'col'; // Direction can be row (default) or column
  variant?: 'primary' | 'accent' | 'light' | 'transparent'; // The variant to define the background style
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'; // Justify content along the main axis
  align?: 'start' | 'center' | 'end' | 'stretch'; // Align items along the cross axis
  wrap?: boolean; // Whether the flex items should wrap
  gap?: 'none' | 'small' | 'medium' | 'large'; // Gap between items
  onClick?: () => void | undefined;
  children: React.ReactNode;
  className?: string; // Additional custom classes
}

interface ClassNameProps {
  direction: FlexProps['direction'];
  justify: FlexProps['justify'];
  align: FlexProps['align'];
  wrap: FlexProps['wrap'];
  gap: FlexProps['gap'];
}

// getClassName function combines the direction, justify, align, wrap, and gap classes
const getClassName = ({ direction, justify, align, wrap, gap }: ClassNameProps): string => {
  let className = 'flex '; // default flex container

  // Direction classes (row or column)
  className += direction === 'col' ? 'flex-col ' : 'flex-row ';

  // Justify content (main axis alignment)
  switch (justify) {
    case 'start':
      className += 'justify-start ';
      break;
    case 'center':
      className += 'justify-center ';
      break;
    case 'end':
      className += 'justify-end ';
      break;
    case 'between':
      className += 'justify-between ';
      break;
    case 'around':
      className += 'justify-around ';
      break;
    case 'evenly':
      className += 'justify-evenly ';
      break;
    default:
      className += 'justify-start ';
  }

  // Align items (cross axis alignment)
  switch (align) {
    case 'start':
      className += 'items-start ';
      break;
    case 'center':
      className += 'items-center ';
      break;
    case 'end':
      className += 'items-end ';
      break;
    case 'stretch':
      className += 'items-stretch ';
      break;
    default:
      className += 'items-stretch ';
  }

  // Wrap setting
  if (wrap) {
    className += 'flex-wrap ';
  } else {
    className += 'flex-nowrap ';
  }

  // Gap setting
  switch (gap) {
    case 'small':
      className += 'gap-2 ';
      break;
    case 'medium':
      className += 'gap-4 ';
      break;
    case 'large':
      className += 'gap-6 ';
      break;
    default:
      className += 'gap-0 ';
  }

  return className;
};

const Flex: React.FC<FlexProps> = ({
  direction = 'row',
  justify = 'start',
  align = 'stretch',
  wrap = false,
  gap = 'none',
  children,
  className = '', // default to empty string if no className is passed
  ...props
}) => {
  // Combine the calculated className with the custom className passed via props
  const combinedClassName = clsx(getClassName({ direction, justify, align, wrap, gap }), className);

  return <Div className={combinedClassName} {...props}>{children}</Div>;
};

export default Flex;
