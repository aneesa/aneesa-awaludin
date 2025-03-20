import React, { useEffect } from 'react';
import clsx from 'clsx';
import Div from '../atoms/Div';
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';

interface SnackbarProps {
  variant?: 'error'; 
  className?: string;
  message: string;
  buttonTitle?: string;
  open: boolean;
  duration?: number; // Duration for auto-hide (in ms)
  onClose: () => void; // Function to call when Snackbar is closed
  onAction?: () => void; // Function to call when action button is clicked
}

interface ClassNameProps {
  variant: SnackbarProps['variant'];
}

const getClassName = ({ variant }: ClassNameProps): string => {
  // Apply variant-specific classes
  switch (variant) {
    case 'error':
    default:
      return clsx('!bg-error !dark:bg-error')
  }
};

const Snackbar: React.FC<SnackbarProps> = ({
  variant = 'error',
  className = '',
  message,
  buttonTitle,
  open,
  duration = 5000, // Default duration 5 seconds
  onClose,
  onAction,
}) => {
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        onClose(); // Automatically close Snackbar after the specified duration
      }, duration);
      return () => clearTimeout(timer); // Clear the timer when component unmounts or open state changes
    }
  }, [open, duration, onClose]);

  return (
    <Div
      className={clsx(
        'fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 flex items-center space-x-4 px-6 py-4 rounded-lg',
        getClassName({ variant }),
        open ? 'block' : 'hidden',
        className,
      )}
    >
      <Text className="flex-1 text-white">{message}</Text>

      {/* Action Button (Optional) */}
      {buttonTitle && (
        <Button
          onClick={() => {
            onAction && onAction(); // Call the action when the button is clicked
            onClose(); // Close the Snackbar after the action
          }}
          className="text-blue-500"
        >
          {buttonTitle}
        </Button>
      )}

      {/* Close Icon */}
      <Icon
        onClick={onClose}
        name="close"
        className="cursor-pointer text-white dark:text-gray-200"
      />
    </Div>
  );
};

export default Snackbar;
