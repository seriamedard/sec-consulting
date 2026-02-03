# Configuration SendGrid pour SEC-CONSULTING

## Prérequis

1. Un compte SendGrid (https://sendgrid.com)
2. Une clé API SendGrid avec permissions d'envoi
3. Un domaine vérifié dans SendGrid pour l'envoi (sec-consulting.org)

## Configuration de la clé API SendGrid dans Amplify

### Méthode 1 : Via Amplify CLI (Recommandé)

```bash
# Configurer le secret SendGrid
npx ampx sandbox secret set SENDGRID_API_KEY
# Entrez votre clé API SendGrid quand demandé
```

### Méthode 2 : Via la Console AWS Amplify

1. Allez sur la console AWS Amplify
2. Sélectionnez votre application
3. Allez dans **Hosting > Environment variables**
4. Ajoutez la variable :
   - **Key**: `SENDGRID_API_KEY`
   - **Value**: Votre clé API SendGrid

### Pour le déploiement en production

Dans la console AWS Amplify :

1. **App settings > Environment variables**
2. Ajoutez :
   - `SENDGRID_API_KEY` = `SG.xxxxxxxxxxxxxxxxxxxx`

## Variables d'environnement utilisées

| Variable | Description | Valeur par défaut |
|----------|-------------|-------------------|
| `SENDGRID_API_KEY` | Clé API SendGrid (secret) | - |
| `CONTACT_EMAIL` | Email de réception des messages | contact@sec-consulting.org |
| `FROM_EMAIL` | Email d'envoi (doit être vérifié) | noreply@sec-consulting.org |

## Test en local

1. Créez un fichier `.env.local` à la racine :
```
SENDGRID_API_KEY=SG.your_test_key_here
```

2. Lancez le sandbox Amplify :
```bash
npx ampx sandbox
```

3. Le formulaire de contact enverra maintenant de vrais emails.

## Vérification du domaine SendGrid

Pour que les emails soient envoyés correctement, vous devez :

1. **Vérifier votre domaine** dans SendGrid :
   - Allez dans Settings > Sender Authentication
   - Ajoutez et vérifiez `sec-consulting.org`
   - Configurez les enregistrements DNS (CNAME, TXT)

2. **Vérifier l'expéditeur** :
   - L'email `noreply@sec-consulting.org` doit être autorisé

## Structure des emails

### Email de notification (vers contact@sec-consulting.org)
- Contient toutes les informations du formulaire
- Design professionnel aux couleurs de SEC-CONSULTING
- Reply-to configuré sur l'email du visiteur

### Email d'accusé de réception (vers le visiteur)
- Confirmation de réception
- Récapitulatif du message envoyé
- Informations de contact de SEC-CONSULTING

## Dépannage

### Les emails ne s'envoient pas
1. Vérifiez que la clé API est correctement configurée
2. Vérifiez les logs Lambda dans CloudWatch
3. Assurez-vous que le domaine est vérifié dans SendGrid

### Erreur CORS
- La fonction Lambda est configurée pour accepter les requêtes de tous les origines
- Vérifiez que la Function URL est correctement déployée

### Erreur 500
- Vérifiez les logs dans AWS CloudWatch
- Assurez-vous que la clé API SendGrid est valide
