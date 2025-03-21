// src/components/molecules/ContactForm.tsx
import React, { useState } from 'react';
import { content } from '../../content/contact-form';
import Flex from '../atoms/Flex';
import TextInput from '../atoms/TextInput';
import TextAreaInput from '../atoms/TextAreaInput';
import Button from '../atoms/Button';
import Loader from '../atoms/Loader';

const SUBMIT_ERROR = 'Something when wrong... Please email me at a_aneesa@yahoo.com';

interface ContactFormProps {
  onSubmit: (data: { telegramUsername: string; email: string; message: string }) => void;
  onError?: (error: string) => void | undefined;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit, onError = undefined }) => {
  const [telegramUsername, setTelegramUsername] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleTelegramUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTelegramUsername(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const validateForm = () => {
    let isValid = true;
    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Please enter a valid email');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!message) {
      setMessageError('Please provide a message');
      isValid = false;
    } else {
      setMessageError('');
    }

    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    setIsSubmitting(true);
    e.preventDefault();

    if (validateForm()) {
      // If form is valid, submit the data
      const telegramMessage = `Username: @${telegramUsername}\nEmail: ${email}\nMessage: ${message}`;
      try {
        const response = await fetch(content?.telegramAPI, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: content?.telegramID,
            text: telegramMessage
          }),
        });
  
        if (!response.ok) {
          onError?.(SUBMIT_ERROR);
        } else {
  
          // const data = await response.json();
  
          onSubmit({
            telegramUsername,
            email,
            message
          });

          // Optionally clear the form after submission
          setTelegramUsername('');
          setEmail('');
          setMessage('');
        }
      } catch (error) {
        onError?.(SUBMIT_ERROR);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='w-full'>
      <Flex direction="col" gap="medium" className='w-full border-2 border-darkSecondary rounded-md'>
        <TextInput
          label="Telegram Username"
          value={telegramUsername}
          onChange={handleTelegramUsernameChange}
          placeholder={content.telegramLabel}
          className="!p-0"
        />

        <TextInput
          label="Email"
          value={email}
          onChange={handleEmailChange}
          type="email"
          placeholder={content.emailLabel}
          error={emailError}
          className="!p-0"
        />

        <TextAreaInput
          label="How can I help?"
          value={message}
          onChange={handleMessageChange}
          placeholder={content.messageLabel}
          error={messageError}
          className="!p-0"
        />

        <Button
          variant="accent"
          type="submit"
          className="w-1/2 md:w-1/3 ml-auto"
        >
          {!isSubmitting ? content.cta : <Loader />}
        </Button>
      </Flex>
    </form>
  );
};

export default ContactForm;
