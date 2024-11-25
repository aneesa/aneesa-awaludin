// src/components/molecules/List.tsx
import React from 'react';
import Text from '../atoms/Text';
import Flex from '../atoms/Flex';

interface ListItemProps {
  icon?: React.ReactNode; // Optional icon on the left
  label: string | React.ReactNode; // Label or text for the item
  onClick?: () => void | undefined;
}

const ListItem: React.FC<ListItemProps> = ({ icon, label, onClick }) => {
  return (
    <Flex justify='start' align='center' gap='medium' className="border-b border-gray-200 w-full px-0 cursor-pointer" onClick={onClick}>
      {icon} {/* Display icon if it exists */}
      <Text>{label}</Text> {/* Label */}
    </Flex>
  );
};

interface ListProps {
  items: { icon?: React.ReactNode; label: string | React.ReactNode }[]; // Array of items to render
  className?: string; // Optional class for the entire list
}

const List: React.FC<ListProps> = ({ items }) => {
  return (
    <Flex direction='col' justify='center' align='start'>
      {items.map((item, index) => (
        <ListItem key={index} {...item} />
      ))}
    </Flex>
  );
};

export default List;
