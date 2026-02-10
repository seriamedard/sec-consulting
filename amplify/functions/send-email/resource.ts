import { defineFunction } from '@aws-amplify/backend';

export const sendEmail = defineFunction({
  name: 'send-email',
  entry: './handler.ts',
  environment: {
    CONTACT_EMAIL: 'contact@sec-consulting.org',
    FROM_EMAIL: 'noreply@sec-consulting.org'
  },
  timeoutSeconds: 30
});
