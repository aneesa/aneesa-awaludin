import React from 'react';
import { content } from '../../content/experience';
import Text from '../atoms/Text';
import Flex from "../atoms/Flex";
import Chronology from '../organisms/Chronology';

const Experience: React.FC = () => {
  return (
    <Flex variant="light" direction="col" justify="center" align="center" className="h-full !p-0">
      <Text size="2xlarge" weight="bold" className='md:hidden'>My Experience</Text>
      <Chronology events={content?.experiences} className='w-full lg:w-4/5 xl:w-2/3' />
    </Flex>
  )
}

export default Experience;