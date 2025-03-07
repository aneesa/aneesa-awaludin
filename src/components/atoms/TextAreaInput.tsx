// src/components/atoms/TextAreaInput.tsx
import React from 'react';
import clsx from 'clsx';
import Div from './Div';
import Text from './Text';

interface TextAreaInputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  error?: string; // Error message to display if validation fails
  className?: string; // Additional custom class names for styling
  textAreaClassName?: string; // Additional custom class names for textarea styling
}

const TextAreaInput: React.FC<TextAreaInputProps> = ({
  label,
  value,
  onChange,
  placeholder = '',
  error = '',
  className = '',
  textAreaClassName = ''
}) => {
  return (
    <Div className={clsx('p-0', className)}>
      {/* Label */}
      <Text variant="primary" size="medium" weight="normal">
        {label}
      </Text>

      {/* Textarea */}
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={clsx(
          'mt-2',
          'w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary',
          'bg-white dark:bg-darkBg text-gray-500',
          error ? 'border-error' : 'border-darkPrimary dark:border-primary',
          error ? 'focus:ring-error' : 'focus:ring-darkPrimary dark:focus:ring-primary',
          textAreaClassName
        )}
      />

      {/* Error Message */}
      {error && <Text variant="error" className="mt-1 text-xs">{error}</Text>}
    </Div>
  );
};

export default TextAreaInput;
