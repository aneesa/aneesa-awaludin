// src/pages/Components.tsx
import React, { useState } from 'react';
import Div from '../components/atoms/Div';
import Flex from '../components/atoms/Flex';
import Text from '../components/atoms/Text';
import Button from '../components/atoms/Button';
import Image from '../components/atoms/Image';
import Pill from '../components/atoms/Pill';
import List from '../components/molecules/List';
import SettingDrawer from '../components/organisms/SettingDrawer';
import Icon from '../components/atoms/Icon';
import NavDrawer from '../components/organisms/NavDrawer';
import Chronology from '../components/organisms/Chronology';

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

const EVENTS = [
  {
    year: new Date().getFullYear(),
    leftTitle: 'Google Inc',
    leftDescription: 'Mountain View, CA, USA',
    date: '2022 - Present',
    title: 'Lead Software Engineer',
    descriptions: [
      'Assist with Google product features and optimizations.',
      'Collaborate with cross-functional teams to improve user experiences.'
    ]
  },
  {
    year: 2022,
    leftTitle: 'Facebook',
    leftDescription: 'Menlo Park, CA, USA',
    date: '2020 - 2022',
    title: 'Senior Software Engineer',
    descriptions: [
      'Contribute to the development of new features and functionalities.',
      'Work closely with design and product teams to ensure smooth implementation.'
    ]
  },
  {
    year: 2020,
    leftTitle: 'Envato',
    leftDescription: 'Melbourne, Australia',
    date: '2015 - 2020',
    title: 'Software Engineer',
    descriptions: [
      'Description of event three.',
      'Lead teams in the development of creative assets and marketplace features.',
      'Drive technical improvements to optimize system performance and user experience.'
    ]
  },
  {
    year: 2015,
    leftTitle: 'X',
    leftDescription: 'San Francisco, CA, USA',
    date: '2013 - 2015',
    title: 'Software Engineer',
    descriptions: [
      'Focus on cutting-edge technology solutions for large-scale platforms.',
      'Manage integration of new features while ensuring scalability and security.'
    ]
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
          <Text>
            This is the default text (primary variant, medium size, normal weight).
          </Text>

          <Text variant="primary" size="medium" weight="normal">
            This is a medium primary text with normal weight.
          </Text>

          <Text variant="primary" size="large" weight="bold">
            This is a large primary text with bold weight.
          </Text>

          <Text variant="secondary" size="small" weight="light">
            This is a small secondary text with light font weight.
          </Text>

          <Text variant="gray" size="medium" weight="medium">
            This is a medium gray text with medium font weight.
          </Text>

          <Text variant="black" size="large" weight="normal" align="right" className='w-full'>
            This is a large black text, aligned to the right.
          </Text>

          <Text variant="primary" size="large" weight="normal" align="justify">
            This is a large primary text with justify alignment. It will stretch the lines to fit the container width, creating a justified appearance. This is useful for long text blocks like paragraphs.
          </Text>

          <Text variant="primary" size="medium" weight="bold" className="text-red-500">
            This is a primary text with bold weight and custom red color.
          </Text>

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

          {/* Pill */}
          <Pill variant="blue" size="medium" weight="bold">
            Blue Pill
          </Pill>

          <Pill variant="purple" size="small" weight="light">
            Purple Pill
          </Pill>

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

          {/* Chronology */}
          <Chronology events={EVENTS}/>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Components;
