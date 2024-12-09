// src/components/organisms/NavDrawer.tsx
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { content } from '../../content/nav';
import usePrevious from '../../utils/usePrevious';
import Div from '../atoms/Div';
import Flex from '../atoms/Flex';
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';
import Image from '../atoms/Image';
import List from '../molecules/List';
import AvatarNav from '../../assets/images/Avatar-nav.png';

interface NavDrawerProps {
  isMobileView?: boolean;
  className?: string;
  onSelected?: (selected: string) => void | undefined;
  updatedSelected?: string;
}

const LIST_ITEMS = content?.navs ? content.navs.map((nav) => ({
  ...nav,
  icon: <Icon name={nav.icon} />
})) : [];

const NavDrawer: React.FC<NavDrawerProps> = ({
  isMobileView = false,
  className = '',
  onSelected = undefined,
  updatedSelected = undefined
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(LIST_ITEMS[0].id);

  const prevSelected = usePrevious(selected);

  useEffect(() => {
    if (prevSelected !== selected && updatedSelected !== selected) {
      onSelected?.(selected);
    }
  }, [selected, prevSelected]);

  useEffect(() => {
    if (updatedSelected) {
      setSelected(updatedSelected);
    }
  }, [updatedSelected]);

  const toggleDrawer = () => setIsOpen(prev => !prev);

  return (
    <Div className="relative !p-0">
      {/* Main Drawer */}
      <Div
        variant="light"
        className={clsx(
          'fixed top-0 left-0 w-72 h-full p-4',
          isOpen ? 'translate-x-0' : '-translate-x-full',
          !isMobileView ? 'md:translate-x-0 md:block' : '',
          className
        )}
        aria-hidden={!isOpen} // Make it inaccessible when closed
      >
        <Flex direction="col" className="h-full rounded-3xl shadow-lg">
          <Flex
            direction="col"
            justify="center"
            align="center"
            gap="medium"
            className="h-1/3 !p-0">
            <Image
              src={AvatarNav}
              alt="Avatar"
              variant="avatar"
            />
            <Div
              onClick={() => setSelected(LIST_ITEMS[0].id)}
              className="rounded-3xl shadow-2xl py-2 filter brightness-90 cursor-pointer">
              <Text variant="gray" className="font-bold uppercase">Aneesa Awaludin</Text>
            </Div>
          </Flex>
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
