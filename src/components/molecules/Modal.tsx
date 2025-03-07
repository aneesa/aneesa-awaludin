import React from 'react';
import clsx from 'clsx';
import Div from '../atoms/Div';
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';

interface ModalProps {
  className?: string;
  buttonTitle: string;
  title?: string;
  children: React.ReactNode;
  open?: boolean;
  toggleOpen?: (open: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({
  className = '',
  buttonTitle,
  title = undefined,
  children,
  open = false,
  toggleOpen = () => null
}) => {

  return (
    <Div variant="transparent" className="relative">
      {/* Modal Trigger Button */}
      <Button onClick={() =>toggleOpen(true)}>
        {buttonTitle}
      </Button>

      {/* Modal (Fixed in the center of the screen) */}
      <Div
        className={clsx(
          'fixed top-0 left-0 right-0 bottom-0 bg-gray-800 dark:bg-gray-800 bg-opacity-75 flex items-center justify-center z-50',
          open ? 'block' : 'hidden opacity-0',
          className
        )}
      >
        <Div
          className={clsx(
            'rounded-lg min-w-96 w-fit',
            open ? 'transform scale-100' : 'transform scale-75 transition-transform'
          )}
        >
          {/* Modal Header */}
          <Div className="!p-0 flex justify-between items-center">
            <Text size="2xlarge" weight="bold">{title}</Text>
            <Icon onClick={() => toggleOpen(false)} name="close" />
          </Div>

          {/* Modal Content (Children) */}
          {open && <Div className="px-0 mt-4">{children}</Div>}
        </Div>
      </Div>
    </Div>
  );
};

export default Modal;
