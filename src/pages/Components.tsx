// src/pages/Components.tsx
import React from 'react';
import Div from '../components/atoms/Div';
import Flex from '../components/atoms/Flex';
import Text from '../components/atoms/Text';
import Button from '../components/atoms/Button';

const Components: React.FC = () => {
  return (
    <Div variant="light" className="components">
      <Flex direction="col" justify="between" align="start" wrap gap="medium">
        <Text size="large">Components</Text>
        <Flex direction="col" justify="between" align="start" wrap gap="medium">
          <Div> Primary Div variant = 'primary' </Div>
          <Div variant="accent"> Primary Div variant = 'accent' </Div>
          <Div variant="light"> Primary Div variant = 'light' </Div>
          <Text> Text default variant = "primary", size = "medium" </Text>
          <Text variant="secondary"> Text variant = "secondary" </Text>
          <Text size="small"> Text size = "small" </Text>
          <Text size="large"> Text size = "large" </Text>
          <Button label="Button" onClick={() => console.log('Button onClick')} />
        </Flex>
      </Flex>
    </Div>
  );
};

export default Components;
