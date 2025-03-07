// src/components/molecules/ContactForm.tsx
import React, { useState } from 'react';
import Flex from '../atoms/Flex';
import TextInput from '../atoms/TextInput';
import TextAreaInput from '../atoms/TextAreaInput';
import Button from '../atoms/Button';

interface ContactFormProps {
  onSubmit: (data: { telegramUsername: string; email: string; message: string }) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [telegramUsername, setTelegramUsername] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // If form is valid, submit the data
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
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex direction="col" gap="medium" className='w-[500px] border-2 border-darkSecondary rounded-md'>
        <TextInput
          label="Telegram Username"
          value={telegramUsername}
          onChange={handleTelegramUsernameChange}
          placeholder="Enter your Telegram username"
          className="!p-0"
        />

        <TextInput
          label="Email"
          value={email}
          onChange={handleEmailChange}
          type="email"
          placeholder="Enter your email"
          error={emailError}
          className="!p-0"
        />

        <TextAreaInput
          label="How can I help?"
          value={message}
          onChange={handleMessageChange}
          placeholder="Write your message here"
          error={messageError}
          className="!p-0"
        />

        <Button
          variant="accent"
          type="submit"
          className="w-1/3 ml-auto"
        >
          Submit
        </Button>
      </Flex>
    </form>
  );
};

export default ContactForm;
