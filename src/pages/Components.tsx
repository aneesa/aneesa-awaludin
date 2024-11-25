// src/pages/Components.tsx
import React, { useState } from 'react';
import Div from '../components/atoms/Div';
import Flex from '../components/atoms/Flex';
import Text from '../components/atoms/Text';
import Button from '../components/atoms/Button';
import List from '../components/molecules/List';
import SettingDrawer from '../components/organisms/SettingDrawer';
import Icon from '../components/atoms/Icon';

const LIST_ITEMS = [
  { label: 'List Item' },
  { icon: (
      <Icon name="user" />
    ), label: 'Profile' },
  { icon: (
      <Icon name="setting" />
    ), label: 'Settings' },
  { icon: (
      <Icon name="logout" />
    ), label: 'Logout' }
];

const Components: React.FC = () => {
  const [isDisplayDrawer, setIsDisplayDrawer] = useState(false);

  const toggleDrawer = () => setIsDisplayDrawer((prev) => !prev);

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
          <Button onClick={toggleDrawer}>Display Setting Drawer</Button>
          {isDisplayDrawer && (
            <SettingDrawer />
          )}
          
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Components;
