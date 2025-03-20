// src/components/atoms/Loader.tsx
import React from 'react';
import clsx from 'clsx';

interface LoaderProps {
  className?: string; // Additional custom class names
}

const Loader: React.FC<LoaderProps> = ({ className = '' }) => (
  <div className={clsx(
    "w-6 h-6 mx-auto border-4 border-t-4 border-gray-200 border-t-accent border-solid rounded-full animate-spin",
    className
  )}/>
);

export default Loader;
