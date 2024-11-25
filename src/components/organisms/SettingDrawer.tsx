import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Div from '../atoms/Div';
import Button from '../atoms/Button';
import List from '../molecules/List';
import Icon from '../atoms/Icon';

interface DrawerProps {
  className?: string;
}

const SettingDrawer: React.FC<DrawerProps> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false); // State to control drawer visibility
  const [darkMode, setDarkMode] = useState(false); // Track dark mode state

  // Toggle the drawer open/close
  const toggleDrawer = () => setIsOpen((prev) => !prev);

  // Toggle dark mode and update the class on document.documentElement
  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newDarkMode = !prev;
      document.documentElement.classList.toggle('dark', newDarkMode); // Apply dark mode class conditionally
      return newDarkMode;
    });
  };

  // Initialize dark mode state based on the document class when the component mounts
  useEffect(() => {
    const initialDarkMode = document.documentElement.classList.contains('dark');
    setDarkMode(initialDarkMode);
  }, []);

  // Get settings options, dynamically change the icon and label based on dark mode state
  const getSettings = () => [
    {
      icon: darkMode ? (
        <Icon name='sun' />
      ) : (
        <Icon name='moon' />
      ),
      label: darkMode ? 'Light Mode' : 'Dark Mode',
      onClick: toggleDarkMode,
    },
  ];

  return (
    <Div className="relative">
      {/* Drawer (fixed on the right side, sliding in/out) */}
      <Div
        className={clsx(
          'fixed w-42 !p-0 right-0 transform transition-all duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : 'translate-x-full', // Slide in when open
          'top-1/2 transform -translate-y-1/2', // Vertically center the drawer
          className // Allow additional custom styling
        )}
      >
        {/* Trigger Button (fixed on the right side of the drawer, protruding out) */}
        <Button
          onClick={toggleDrawer}
          className="absolute top-0 -left-10 z-50 rounded-none !p-2"
        >
          <Icon name='setting'/>
        </Button>

        {/* Drawer Content */}
        <List items={getSettings()} />
      </Div>
    </Div>
  );
};

export default SettingDrawer;
