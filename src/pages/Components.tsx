// src/pages/Components.tsx
import React, { useState } from 'react';
import Div from '../components/atoms/Div';
import Flex from '../components/atoms/Flex';
import Text from '../components/atoms/Text';
import Button from '../components/atoms/Button';
import Image from '../components/atoms/Image';
import List from '../components/molecules/List';
import SettingDrawer from '../components/organisms/SettingDrawer';
import Icon from '../components/atoms/Icon';
import NavDrawer from '../components/organisms/NavDrawer';

const LIST_ITEMS = [
  { label: 'List Item' },
  { icon: (
      <Icon name="user" />
    ),
    label: 'Profile',
    isSelected: true
  },
  { icon: (
      <Icon name="setting" />
    ),
    label: 'Settings'
  },
  { icon: (
      <Icon name="logout" />
    ),
    label: 'Logout'
  }
];

const Components: React.FC = () => {
  const [isDisplaySettingDrawer, setIsDisplaySettingDrawer] = useState(false);
  const [isDisplayNavDrawer, setIsDisplayNavDrawer] = useState(false);

  const toggleSettingDrawer = () => setIsDisplaySettingDrawer((prev) => !prev);
  const toggleNavDrawer = () => setIsDisplayNavDrawer((prev) => !prev);

  return (
    <Flex direction="col" variant="light" justify="between" align="start" gap="medium" className="components">
      <Flex direction="col" variant="light"  justify="between" align="start" wrap gap="medium">
        <Text size="large">Components</Text>
        <Flex direction="col" justify="between" align="start" wrap gap="medium">
          {/* Div */}
          <Div> Primary Div variant = 'primary' </Div>
          <Div variant="accent"> Primary Div variant = 'accent' </Div>
          <Div variant="light"> Primary Div variant = 'light' </Div>

          {/* Flex */}
          <Flex justify="between" align="center" wrap gap="medium">
            <Div> Flex Item </Div>
            <Div> Flex Item </Div>
            <Div> Flex Item </Div>
          </Flex>

          {/* Text */}
          <Text> Text default variant = "primary", size = "medium" </Text>
          <Text variant="secondary"> Text variant = "secondary" </Text>
          <Text size="small"> Text size = "small" </Text>
          <Text size="large"> Text size = "large" </Text>

          {/* Button */}
          <Button onClick={() => console.log('Button onClick')}>Button</Button>

          {/* Image */}
          <Image
            src="https://via.placeholder.com/150"
            alt="Image"
            className="w-40 h-40"
          />
          <Image
            src="https://via.placeholder.com/150"
            alt="User Avatar"
            variant="avatar"
          />
        </Flex>
      </Flex>
      <Flex direction="col" variant="light"  justify="between" align="start" wrap gap="medium">
        <Text size="large">Molecules</Text>
        <Flex direction="col" justify="between" align="start" wrap gap="medium">
          {/* List */}
          <List items={LIST_ITEMS} />
        </Flex>
      </Flex>
      <Flex direction="col" variant="light" justify="between" align="start" wrap gap="medium">
        <Text size="large">Organisms</Text>
        <Flex direction="col" justify="between" align="start" wrap gap="medium">
          {/* SettingDrawer */}
          <Button onClick={toggleSettingDrawer}>Display Setting Drawer</Button>
          {isDisplaySettingDrawer && (
            <SettingDrawer />
          )}
          
          {/* NavDrawer */}
          <Button onClick={toggleNavDrawer}>Display Nav Drawer</Button>
          {isDisplayNavDrawer && (
            <NavDrawer isMobileView />
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Components;
