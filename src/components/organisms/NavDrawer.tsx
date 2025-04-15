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
import Divider from '../atoms/Divider';
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

const FOOTER_ICONS = content?.footers ? content.footers.map((footer) => ({
  ...footer,
  icon: <Icon name={footer.icon} className='cursor-pointer' onClick={() => { window.open(footer.link, '_blank'); }} />
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
  }, [selected, prevSelected, onSelected, updatedSelected]);

  useEffect(() => {
    if (updatedSelected) {
      setSelected(updatedSelected);
    }
  }, [updatedSelected]);

  const toggleDrawer = () => setIsOpen(prev => !prev);

  const onItemSelected = (selectedId: string = LIST_ITEMS?.[0]?.id) => {
    setSelected(selectedId);
    toggleDrawer();
  };

  return (
    <Div className="relative !p-0">
      {/* Main Drawer */}
      <Div
        variant="transparent"
        className={clsx(
          'fixed top-0 left-0 w-72 h-full p-4',
          isOpen ? 'translate-x-0' : '-translate-x-full',
          !isMobileView ? 'md:translate-x-0 md:block z-10' : '',
          className
        )}
        aria-hidden={!isOpen} // Make it inaccessible when closed
      >
        <Flex direction="col" className="h-full rounded-3xl shadow-lg md:shadow-none">
          {/* Profile */}
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
              onClick={content?.nameLink ? (() => window.open(content?.nameLink, '_blank')) : undefined}
              className={
                clsx(
                  "rounded-3xl shadow-2xl py-2 filter brightness-90",
                  content?.nameLink ? 'cursor-pointer' : 'cursor-default'
                )}
              >
              <Text variant="gray" weight='bold' className="uppercase">{content?.name}</Text>
            </Div>
          </Flex>
          {/* Navs */}
          <Div className="h-2/3 !p-0">
            <List
              items={LIST_ITEMS.map(item => ({
                ...item,
                onClick: () => onItemSelected(item.id),
              }))}
              selected={selected}
              className="!-mr-4"
            />
          </Div>
          {/* Footers */}
          {FOOTER_ICONS?.length && (
            <>
              <Divider variant="accent" animated />
              <Flex justify="center" align="center" wrap gap="medium">
                {FOOTER_ICONS.map((footer) => footer.icon)}
              </Flex>
            </>
          )}
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
