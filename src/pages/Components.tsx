// src/pages/Components.tsx
import React, { useCallback, useState } from 'react';
import Div from '../components/atoms/Div';
import Flex from '../components/atoms/Flex';
import Text from '../components/atoms/Text';
import Button from '../components/atoms/Button';
import Image from '../components/atoms/Image';
import Pill from '../components/atoms/Pill';
import TextInput from '../components/atoms/TextInput';
import TextAreaInput from '../components/atoms/TextAreaInput';
import List from '../components/molecules/List';
import ContactForm from '../components/molecules/ContactForm';
import Modal from '../components/molecules/Modal';
import Snackbar from '../components/molecules/Snackbar';
import SettingDrawer from '../components/organisms/SettingDrawer';
import Icon from '../components/atoms/Icon';
import NavDrawer from '../components/organisms/NavDrawer';
import Chronology from '../components/organisms/Chronology';
import Loader from '../components/atoms/Loader';

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
  const [isModalOpened, setModalOpened] = useState(false);
  const [isContactFormOpened, setContactFormOpened] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const toggleSettingDrawer = () => setIsDisplaySettingDrawer((prev) => !prev);
  const toggleNavDrawer = () => setIsDisplayNavDrawer((prev) => !prev);

  const handleFormSubmit = useCallback(
    (data: { telegramUsername: string; email: string; message: string }) => {
      // Handle the form submission here (e.g., send the data to a server)
      console.log('Form submitted with data:', data);
      setContactFormOpened(false);
    },
    []
  );

  return (
    <Flex direction="col" variant="light" justify="between" align="start" gap="medium" className="components w-full">
      <Flex direction="col" variant="light"  justify="between" align="start" wrap gap="medium" className="w-full">
        <Text size="large">Components</Text>
        <Flex direction="col" justify="between" align="start" wrap gap="medium" className="w-full">
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

          <Text variant="error" size="medium" weight="bold">
            This is a error text with bold weight.
          </Text>

          <Text variant="primary" size="medium" weight="bold" className="text-orange-500">
            This is a primary text with bold weight and custom orange color.
          </Text>

          {/* Button */}
          <Button onClick={() => console.log('Button onClick')}>Button</Button>
          <Button onClick={() => console.log('Button onClick')} variant="accent">Accent Button</Button>
          <Button onClick={() => console.log('Button onClick')} variant="light">Light Button</Button>


          {/* Image */}
          <Image
            src="https://placehold.co/40x40?text=Image"
            alt="Image"
            className="w-40 h-40"
          />
          <Image
            src="https://placehold.co/40x40?text=Avatar"
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

          <form onSubmit={() => null}>
            {/* TextInput */}
            {/* Without error */}
            <TextInput
              label="Email"
              value="jane.doe@gmail.com"
              onChange={() => null}
              type="email"
              placeholder="Enter your email"
              error=""
              className="py-4"
            />
            
            {/* With error */}
            <TextInput
              label="Email"
              value="jane.doe@gmail"
              onChange={() => null}
              type="email"
              placeholder="Enter your email"
              error="Wrong email format"
              className="py-4!"
            />

            {/* TextAreaInput */}
            {/* Without error */}
            <TextAreaInput
              label="How can I help?"
              value="I like your web, can you help me build one?"
              onChange={() => null}
              placeholder="Write your message here"
              error=""
              className="py-4!"
            />

            {/* With error */}
            <TextAreaInput
              label="How can I help?"
              value="I like your web, can you help me build one?"
              onChange={() => null}
              placeholder="Write your message here"
              error="Something went wrong"
              className="py-4!"
            />
          </form>

          {/* Loader */}
          <Loader />

        </Flex>
      </Flex>
      <Flex direction="col" variant="light"  justify="between" align="start" wrap gap="medium" className="w-full">
        <Text size="large">Molecules</Text>
        <Flex direction="col" justify="between" align="start" wrap gap="medium" className="w-full">
          {/* List */}
          <List items={LIST_ITEMS} />

          {/* Contact Form */}
          <ContactForm onSubmit={handleFormSubmit} />

          {/* Modal */}
          <Modal buttonTitle="Open Text Modal" title="My Modal" open={isModalOpened} toggleOpen={setModalOpened}>
            <Text>This is the content inside the modal.</Text>
          </Modal>

          <Modal buttonTitle="Open Contact Form Modal" open={isContactFormOpened} toggleOpen={setContactFormOpened}>
            <ContactForm onSubmit={handleFormSubmit} />
          </Modal>

          {/* Snackbar */}
          <Button onClick={() => setSnackbarMessage('Snackbar message')}>Show Snackbar</Button>

          <Snackbar
            open={!!snackbarMessage}
            message={snackbarMessage}
            // buttonTitle="Undo"
            onClose={() => setSnackbarMessage('')}
            // onAction={() => console.log('undo!')}
          />
        </Flex>
      </Flex>
      <Flex direction="col" variant="light" justify="between" align="start" wrap gap="medium" className="w-full">
        <Text size="large">Organisms</Text>
        <Flex direction="col" justify="between" align="start" wrap gap="medium" className="w-full">
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
