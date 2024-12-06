// src/components/atoms/Image.tsx
import React from 'react';
import clsx from 'clsx';

interface ImageProps {
  src: string;
  alt: string;
  variant?: 'square' | 'avatar';
  className?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, variant = 'square', className = '' }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={clsx(
        'w-24 h-24 rounded-lg',
        variant === 'avatar' && '!rounded-full',  // For avatar, we make it circular
        className // Any custom class passed to the component
      )}
    />
  );
};

export default Image;
