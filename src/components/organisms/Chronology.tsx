import React from 'react';
import clsx from 'clsx';
import Flex from '../atoms/Flex';
import Div from '../atoms/Div';
import Text from '../atoms/Text';
import Pill from '../atoms/Pill';

interface TimelineEvent {
  year: string | number;
  leftTitle: string;
  leftDescription: string;
  date: string;
  title: string;
  descriptions: string[];
}

interface ChoronologyProps {
  events: TimelineEvent[];
  className?: string;
}

const Chronology: React.FC<ChoronologyProps> = ({ events, className }) => {
  return (
    <Flex
      variant="transparent"
      direction="col"
      justify="center"
      className={className}>
      {events.map((event, index) => (
        <Flex key={`chronology-${index}`} variant="transparent" className="!p-0">
          <Flex variant="transparent" justify="center" align="center" className="relative w-1/6 !py-0 hidden lg:flex">
            {/* Vertical line */}
            <Div variant="accent" className="!p-0 w-1 h-full" />

            {/* Horizontal line */}
            <Div
              variant="accent"
              className="!p-0 w-3 h-1 absolute top-8"
            >
              {/* Year */}
              <Pill weight="bold" className="absolute -top-4 -left-20">{event.year}</Pill>
            </Div>
          </Flex>
          <Flex variant="transparent" justify="center" className="w-full lg:w-5/6 !p-0">
            {/* Card */}
            <Flex variant="transparent" gap="medium" className={
              clsx(
                "w-full mb-8 rounded-lg shadow-md border border-accent flex-col md:flex-row",
                index === events.length - 1 && '!mb-0'
              )
            }>
              <Div variant="transparent" className="!p-0 w-full md:w-1/3 gap-1">
                <Text size="large">{event.leftTitle}</Text>
                <Text size="small">{event.leftDescription}</Text>
              </Div>
              
              <Flex variant="transparent" gap="medium" className="!p-0 w-full md:w-2/3 flex-col">
                <Div variant="transparent" className="!p-0">
                  <Text as="h2" size="large" weight='bold'>{event.title}</Text>
                  <Pill variant="purple" size="small">{event.date}</Pill>
                </Div>
                <Div variant="transparent" className="!p-0">
                  {event.descriptions.map((desc, index) => (
                    <Text key={`chronology-desc-${index}`} size="small" className="pb-1 border-b border-b-primary">{desc}</Text>
                  ))}
                </Div>
                
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};

export default Chronology;
