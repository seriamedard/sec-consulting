import { defineFunction, secret } from '@aws-amplify/backend';

export const sendEmail = defineFunction({
  name: 'send-email',
  entry: './handler.ts',
  environment: {
    SENDGRID_API_KEY: secret('SENDGRID_API_KEY'),
    CONTACT_EMAIL: 'contact@sec-consulting.org',
    FROM_EMAIL: 'noreply@sec-consulting.org'
  },
  timeoutSeconds: 30
});
