// src/components/organisms/NavDrawer.tsx
import React, { useState } from 'react';
import clsx from 'clsx';
import Div from '../atoms/Div';
import Flex from '../atoms/Flex';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';
import List from '../molecules/List';

interface NavDrawerProps {
  isMobileView?: boolean;
  className?: string;
}

const LIST_ITEMS = [
  { id: 'home', icon: <Icon name="home" />, label: 'Home' },
  { id: 'experience', icon: <Icon name="briefcase" />, label: 'My Experiences' },
  { id: 'education', icon: <Icon name="academic" />, label: 'My Education' },
];

const NavDrawer: React.FC<NavDrawerProps> = ({ isMobileView = false, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(LIST_ITEMS[0].id);

  const toggleDrawer = () => setIsOpen(prev => !prev);

  return (
    <Div className="relative !p-0">
      {/* Main Drawer */}
      <Div
        variant="light"
        className={clsx(
          'fixed top-0 left-0 w-72 h-full p-4 transform transition-all duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : '-translate-x-full',
          !isMobileView ? 'md:translate-x-0 md:block' : '',
          className
        )}
        aria-hidden={!isOpen} // Make it inaccessible when closed
      >
        <Flex direction="col" className="h-full rounded-3xl shadow-lg">
          <Div className="h-1/3 !p-0">
            {/* Add user info, like name or avatar, here */}
            <Icon name="user" />
          </Div>
          <Div className="h-2/3 !p-0">
            <List
              items={LIST_ITEMS.map(item => ({
                ...item,
                onClick: () => setSelected(item.id),
              }))}
              selected={selected}
              className="!-mr-4"
            />
          </Div>
        </Flex>
      </Div>

      {/* Toggle Button */}
      <Button
        onClick={toggleDrawer}
        className={clsx('fixed top-4 right-4 !p-2', isMobileView ? 'md:block' : 'md:hidden')}
        aria-label={isOpen ? 'Close navigation drawer' : 'Open navigation drawer'}
        aria-expanded={isOpen ? 'true' : 'false'}
      >
        {isOpen ? <Icon name="close" /> : <Icon name="menu" />}
      </Button>
    </Div>
  );
};

export default NavDrawer;
