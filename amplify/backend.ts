import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { sendEmail } from './functions/send-email/resource';

const backend = defineBackend({
  auth,
  data,
  sendEmail,
});

// Add Function URL for the send-email function
const sendEmailLambda = backend.sendEmail.resources.lambda;

// Grant the function URL public access
import { FunctionUrlAuthType } from 'aws-cdk-lib/aws-lambda';

const functionUrl = sendEmailLambda.addFunctionUrl({
  authType: FunctionUrlAuthType.NONE,
  cors: {
    allowedOrigins: ['*'],
    allowedMethods: [{ name: 'POST' }, { name: 'OPTIONS' }],
    allowedHeaders: ['Content-Type'],
  },
});

// Output the function URL
backend.addOutput({
  custom: {
    sendEmailFunctionUrl: functionUrl.url,
  },
});
