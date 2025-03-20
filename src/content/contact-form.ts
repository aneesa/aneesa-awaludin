const telegramBotToken = import.meta.env.VITE_FIRST_CONTACTS_TOKEN;
const telegramID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

export const content = {
  telegramAPI: `https://api.telegram.org/bot${telegramBotToken}/sendMessage`,
  telegramID,
  telegramLabel: 'Enter Telegram username',
  emailLabel: 'Enter email',
  messageLabel: 'Write message here',
  cta: 'Submit'
};