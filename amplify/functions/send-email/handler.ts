import type { APIGatewayProxyHandler } from 'aws-lambda';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export const handler: APIGatewayProxyHandler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  // Handle preflight
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  try {
    const body: ContactFormData = JSON.parse(event.body || '{}');
    const { firstName, lastName, email, phone, service, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !service || !message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Tous les champs requis doivent être remplis' })
      };
    }

    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
    const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'contact@sec-consulting.org';
    const FROM_EMAIL = process.env.FROM_EMAIL || 'noreply@sec-consulting.org';

    if (!SENDGRID_API_KEY) {
      console.error('SENDGRID_API_KEY not configured');
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'Configuration email manquante' })
      };
    }

    // Email to SEC-CONSULTING (notification)
    const notificationEmail = {
      personalizations: [{
        to: [{ email: CONTACT_EMAIL }],
        subject: `Nouveau message de contact - ${service}`
      }],
      from: { email: FROM_EMAIL, name: 'SEC-CONSULTING Website' },
      reply_to: { email: email, name: `${firstName} ${lastName}` },
      content: [{
        type: 'text/html',
        value: `
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
        `
      }]
    };

    // Acknowledgment email to user
    const acknowledgmentEmail = {
      personalizations: [{
        to: [{ email: email }],
        subject: 'Confirmation de réception - SEC-CONSULTING'
      }],
      from: { email: FROM_EMAIL, name: 'SEC-CONSULTING' },
      content: [{
        type: 'text/html',
        value: `
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
        `
      }]
    };

    // Send both emails via SendGrid
    const sendGridUrl = 'https://api.sendgrid.com/v3/mail/send';
    const sendGridHeaders = {
      'Authorization': `Bearer ${SENDGRID_API_KEY}`,
      'Content-Type': 'application/json'
    };

    // Send notification email
    const notificationResponse = await fetch(sendGridUrl, {
      method: 'POST',
      headers: sendGridHeaders,
      body: JSON.stringify(notificationEmail)
    });

    if (!notificationResponse.ok) {
      const error = await notificationResponse.text();
      console.error('SendGrid notification error:', error);
      throw new Error('Erreur lors de l\'envoi de la notification');
    }

    // Send acknowledgment email
    const ackResponse = await fetch(sendGridUrl, {
      method: 'POST',
      headers: sendGridHeaders,
      body: JSON.stringify(acknowledgmentEmail)
    });

    if (!ackResponse.ok) {
      const error = await ackResponse.text();
      console.error('SendGrid acknowledgment error:', error);
      // Don't fail if ack email fails, notification was sent
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        success: true, 
        message: 'Message envoyé avec succès' 
      })
    };

  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Une erreur est survenue lors de l\'envoi du message' 
      })
    };
  }
};
