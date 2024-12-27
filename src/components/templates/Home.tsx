import React from 'react';
import { content } from '../../content/home';
import Flex from "../atoms/Flex";
import Text from '../atoms/Text';
import Image from '../atoms/Image';
import Button from '../atoms/Button';

const Home: React.FC = () => {
  return (
    <Flex variant="light" direction="col" justify="center" align="center" className="h-full !p-0">
      <Flex variant="light" direction="col" justify="center" align="center" className="h-1/2 md:h-2/3 !p-0">
        <Image
          src={content?.avatar}
          alt="Avatar"
          variant="avatar"
          className="w-60 md:w-80 lg:w-96 h-60 md:h-80 lg:h-96"
        />
      </Flex>
      <Flex variant="light" direction="col" justify="start" align="center" gap="medium" className="h-1/2 md:h-1/3 !p-0">
        <Text size="large" align="center" className="font-light uppercase">
          {content.greeting}
        </Text>
        <Text variant="black" weight='bold' align="center" className="!text-3xl uppercase w-40 md:w-fit">
          {content.greetingName}
        </Text>
        <Text align="center" className="max-w-md">{content.selfDescription}</Text>
        {content?.cta && (
          <Button
            onClick={() => console.log('Button onClick')}
            className="min-w-32">
            {content.cta}
          </Button>
        )}
      </Flex>
    </Flex>
  )
}

export default Home;