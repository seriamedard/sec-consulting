import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'SEC-CONSULTING — Expertise comptable, audit, conseil'
  },
  {
    path: 'a-propos',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
    title: 'À propos — SEC-CONSULTING'
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent),
    title: 'Nos services — SEC-CONSULTING'
  },
  {
    path: 'etudes-de-cas',
    loadComponent: () => import('./pages/case-studies/case-studies.component').then(m => m.CaseStudiesComponent),
    title: 'Études de cas — SEC-CONSULTING'
  },
  {
    path: 'equipe',
    loadComponent: () => import('./pages/team/team.component').then(m => m.TeamComponent),
    title: 'Notre équipe — SEC-CONSULTING'
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contact — SEC-CONSULTING'
  },
  {
    path: 'mentions-legales',
    loadComponent: () => import('./pages/legal-notice/legal-notice.component').then(m => m.LegalNoticeComponent),
    title: 'Mentions légales — SEC-CONSULTING'
  },
  {
    path: 'politique-de-confidentialite',
    loadComponent: () => import('./pages/privacy-policy/privacy-policy.component').then(m => m.PrivacyPolicyComponent),
    title: 'Politique de confidentialité — SEC-CONSULTING'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
