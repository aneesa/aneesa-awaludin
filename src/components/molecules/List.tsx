// src/components/molecules/List.tsx
import React from 'react';
import clsx from 'clsx';
import Text from '../atoms/Text';
import Flex from '../atoms/Flex';

interface ListItemProps {
  id?: string | number;
  icon?: React.ReactNode; // Optional icon on the left
  label: string | React.ReactNode; // Label or text for the item
  onClick?: () => void | undefined;
  isSelected?: boolean;
  className?: string; 
}

const ListItem: React.FC<ListItemProps> = ({ icon, label, onClick, isSelected, className }) => {
  return (
    <Flex
      justify='start'
      align='center'
      gap='medium'
      className={clsx(
        'border-b border-gray-200 w-full cursor-pointer',
        className
      )}
      variant={isSelected ? 'light' : 'primary'}
      onClick={onClick}
    >
      {icon} {/* Display icon if it exists */}
      <Text>{label}</Text> {/* Label */}
    </Flex>
  );
};

interface ListProps {
  items: { id?: string | number; icon?: React.ReactNode; label: string | React.ReactNode }[]; // Array of items to render
  selected?: string | number | undefined;
  className?: string; // Optional class for the entire list
}

const List: React.FC<ListProps> = ({ items, selected, className }) => {
  return (
    <Flex
      direction='col'
      justify='center'
      align='start'
      className={clsx(
        '!p-0',
        className
      )}>
      {items.map((item, index) => (
        <ListItem
          key={index}
          isSelected={!!selected && selected === item.id}
          {...item}
        />
      ))}
    </Flex>
  );
};

export default List;
