// src/components/atoms/TextInput.tsx
import React from 'react';
import clsx from 'clsx';
import Div from './Div';
import Text from './Text';

interface TextInputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: 'text' | 'email' | 'password' | 'number'; // Input type
  placeholder?: string;
  error?: string; // Error message to display if validation fails
  className?: string; // Additional custom class names for styling
  inputClassName?: string; // Additional custom class names for input styling
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  value,
  onChange,
  type = 'text',
  placeholder = '',
  error = '',
  className = '',
  inputClassName = ''
}) => {
  return (
    <Div
      className={clsx(
        'p-0',
        className
      )}>
      {/* Label */}
      <Text variant="primary" size="medium" weight="normal">
        {label}
      </Text>

      {/* Input */}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={clsx(
          'mt-2',
          'w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary',
          'bg-white dark:bg-darkBg text-gray-500',
          error ? 'border-error' : 'border-darkPrimary dark:border-primary',
          error ? 'focus:ring-error' : 'focus:ring-darkPrimary dark:focus:ring-primary',
          inputClassName
        )}
      />

      {/* Error Message */}
      {error && <Text variant="error" className="mt-1 text-xs">{error}</Text>}
    </Div>
  );
};

export default TextInput;
