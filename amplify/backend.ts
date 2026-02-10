import { defineBackend } from '@aws-amplify/backend';
import { PolicyStatement, Effect } from 'aws-cdk-lib/aws-iam';
import { FunctionUrlAuthType } from 'aws-cdk-lib/aws-lambda';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { sendEmail } from './functions/send-email/resource';

const backend = defineBackend({
  auth,
  data,
  sendEmail,
});

// Get the Lambda function resource
const sendEmailLambda = backend.sendEmail.resources.lambda;

// Grant SES permissions to the Lambda function
sendEmailLambda.addToRolePolicy(
  new PolicyStatement({
    effect: Effect.ALLOW,
    actions: [
      'ses:SendEmail',
      'ses:SendRawEmail'
    ],
    resources: ['*'] // You can restrict this to specific SES identities
  })
);

// Add Function URL for public access
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
