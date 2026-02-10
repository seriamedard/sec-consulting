import type { APIGatewayProxyHandler } from 'aws-lambda';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const sesClient = new SESClient({});

const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'contact@sec-consulting.org';
const FROM_EMAIL = process.env.FROM_EMAIL || 'noreply@sec-consulting.org';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS'
};

export const handler: APIGatewayProxyHandler = async (event) => {
  // Handle preflight CORS
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers: CORS_HEADERS, body: '' };
  }

  try {
    const body: ContactFormData = JSON.parse(event.body || '{}');
    const { firstName, lastName, email, phone, service, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !service || !message) {
      return {
        statusCode: 400,
        headers: CORS_HEADERS,
        body: JSON.stringify({ error: 'Tous les champs requis doivent être remplis' })
      };
    }

    // Send notification email to SEC-CONSULTING
    await sendNotificationEmail({ firstName, lastName, email, phone, service, message });

    // Send acknowledgment email to user
    await sendAcknowledgmentEmail({ firstName, email, service, message });

    return {
      statusCode: 200,
      headers: CORS_HEADERS,
      body: JSON.stringify({
        success: true,
        message: 'Message envoyé avec succès'
      })
    };

  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      headers: CORS_HEADERS,
      body: JSON.stringify({
        error: 'Une erreur est survenue lors de l\'envoi du message'
      })
    };
  }
};

async function sendNotificationEmail(data: ContactFormData): Promise<void> {
  const { firstName, lastName, email, phone, service, message } = data;

  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #F2811D; padding: 20px; text-align: center;">
        <h1 style="color: white; margin: 0;">Nouveau Message de Contact</h1>
      </div>
      <div style="padding: 30px; background: #f9f9f9;">
        <h2 style="color: #592512;">Informations du contact</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Nom:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${firstName} ${lastName}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Téléphone:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${phone || 'Non renseigné'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Service:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">${service}</td>
          </tr>
        </table>
        <h2 style="color: #592512; margin-top: 20px;">Message</h2>
        <div style="background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #F2811D;">
          ${message.replace(/\n/g, '<br>')}
        </div>
      </div>
      <div style="background: #592512; color: white; padding: 15px; text-align: center; font-size: 12px;">
        Message envoyé depuis le site sec-consulting.org
      </div>
    </div>
  `;

  const command = new SendEmailCommand({
    Source: `SEC-CONSULTING Website <${FROM_EMAIL}>`,
    Destination: {
      ToAddresses: [CONTACT_EMAIL]
    },
    ReplyToAddresses: [email],
    Message: {
      Subject: {
        Data: `Nouveau message de contact - ${service}`,
        Charset: 'UTF-8'
      },
      Body: {
        Html: {
          Data: htmlBody,
          Charset: 'UTF-8'
        }
      }
    }
  });

  await sesClient.send(command);
}

async function sendAcknowledgmentEmail(data: Pick<ContactFormData, 'firstName' | 'email' | 'service' | 'message'>): Promise<void> {
  const { firstName, email, service, message } = data;

  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #F2811D; padding: 20px; text-align: center;">
        <h1 style="color: white; margin: 0;">Merci pour votre message</h1>
      </div>
      <div style="padding: 30px; background: #f9f9f9;">
        <p style="color: #592512; font-size: 16px;">Bonjour ${firstName},</p>
        <p style="color: #333; line-height: 1.6;">
          Nous avons bien reçu votre demande concernant <strong>${service}</strong>.
        </p>
        <p style="color: #333; line-height: 1.6;">
          Notre équipe va examiner votre message et vous répondra dans les plus brefs délais,
          généralement sous 24 à 48 heures ouvrables.
        </p>
        <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #F2811D;">
          <h3 style="color: #592512; margin-top: 0;">Récapitulatif de votre message:</h3>
          <p style="color: #666; font-style: italic;">"${message.substring(0, 200)}${message.length > 200 ? '...' : ''}"</p>
        </div>
        <p style="color: #333; line-height: 1.6;">
          En attendant, n'hésitez pas à consulter nos services sur notre site web.
        </p>
        <p style="color: #592512; font-weight: bold;">
          L'équipe SEC-CONSULTING
        </p>
      </div>
      <div style="background: #592512; color: white; padding: 15px; text-align: center; font-size: 12px;">
        <p style="margin: 0;">SEC-CONSULTING - Expertise comptable, audit, conseil</p>
        <p style="margin: 5px 0 0 0;">N'Djamena, Tchad | contact@sec-consulting.org</p>
      </div>
    </div>
  `;

  const command = new SendEmailCommand({
    Source: `SEC-CONSULTING <${FROM_EMAIL}>`,
    Destination: {
      ToAddresses: [email]
    },
    Message: {
      Subject: {
        Data: 'Confirmation de réception - SEC-CONSULTING',
        Charset: 'UTF-8'
      },
      Body: {
        Html: {
          Data: htmlBody,
          Charset: 'UTF-8'
        }
      }
    }
  });

  await sesClient.send(command);
}
