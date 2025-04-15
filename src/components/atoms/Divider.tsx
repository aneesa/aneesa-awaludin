// src/components/atoms/Divider.tsx
import React from 'react';
import clsx from 'clsx';

interface DividerProps {
  className?: string;
  animated?: boolean;
  variant?: 'primary' | 'accent' | 'light' | 'transparent';
}

const getDividerColor = (variant: DividerProps['variant']) => {
  switch (variant) {
    case 'primary':
      return 'via-primary dark:via-darkPrimary';
    case 'accent':
      return 'via-accent dark:via-darkAccent';
    case 'light':
      return 'via-backgroundLight dark:via-backgroundDark';
    case 'transparent':
      return 'via-transparent';
    default:
      return 'via-primary dark:via-darkPrimary';
  }
};

const Divider: React.FC<DividerProps> = ({
  className = '',
  animated = false,
  variant = 'primary',
}) => (
  <div className={clsx(
    "relative w-full h-[1px] my-4 overflow-hidden",
    className
  )}>
    <div
      className={clsx(
        "w-full h-full bg-gradient-to-r from-transparent to-transparent",
        getDividerColor(variant),
        animated && "animate-pulse"
      )}
    />
  </div>
);

export default Divider;
