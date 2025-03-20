import React, { useCallback, useState } from 'react';
import { content } from '../../content/home';
import Flex from "../atoms/Flex";
import Text from '../atoms/Text';
import Image from '../atoms/Image';
import Modal from '../molecules/Modal';
import Snackbar from '../molecules/Snackbar';
import ContactForm from '../molecules/ContactForm';

const Home: React.FC = () => {
  const [isContactFormOpened, setContactFormOpened] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleFormSubmit = useCallback(
    (data: { telegramUsername: string; email: string; message: string }) => {
      // Handle the form submission here (e.g., send the data to a server)
      console.log('Form submitted with data:', data);
      setContactFormOpened(false);
    },
    []
  );
  
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
          <Modal buttonTitle={content.cta} open={isContactFormOpened} toggleOpen={setContactFormOpened}>
            <ContactForm onSubmit={handleFormSubmit} onError={(error) => setSubmitError(error)}/>
          </Modal>
        )}
      </Flex>
      {/* Error Snackbar */}
      <Snackbar
        open={!!submitError}
        message={submitError}
        onClose={() => setSubmitError('')}
      />
    </Flex>
  )
}

export default Home;