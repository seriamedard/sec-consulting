import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  HeroSectionComponent,
  LogoMarqueeComponent,
  FeatureCardComponent,
  CardComponent,
  SectionTitleComponent,
  StepsComponent,
  KpiStripComponent,
  TestimonialCarouselComponent,
  CtaBandComponent,
  ButtonComponent
} from '../../shared/components';
import { InViewDirective } from '../../shared/directives/in-view.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroSectionComponent,
    LogoMarqueeComponent,
    FeatureCardComponent,
    CardComponent,
    SectionTitleComponent,
    StepsComponent,
    KpiStripComponent,
    TestimonialCarouselComponent,
    CtaBandComponent,
    ButtonComponent,
    InViewDirective
  ],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  // Hero data
  hero = {
    eyebrow: "Cabinet d'expertise & conseil",
    title: "SEC-CONSULTING - Expertise comptable, audit, conseil, digitalisation et formation",
    subtitle: "Nous aidons les organisations à sécuriser leurs opérations, structurer leurs décisions et accélérer leur croissance grâce à une expertise rigoureuse et un accompagnement pragmatique.",
    badges: ['Rigueur & conformité', 'Décisions pilotées par les chiffres', 'Accompagnement opérationnel'],
    primaryCta: { label: 'Demander un diagnostic', route: '/contact' },
    secondaryCta: { label: 'Voir nos services', route: '/services' },
    imageSrc: 'assets/img/hero-section.webp',
    imageAlt: 'Consultants en réunion'
  };

  // Partners logos
  partners = {
    title: 'Ils nous font confiance',
    logos: [
      { name: 'ARCEP', src: 'assets/partners/arcep.webp', url: 'https://www.arcep.td' },
      { name: 'SOMMASOFT', src: 'assets/partners/lg.png', url: 'https://www.sommasoft.com' },
      { name: 'SONACIM', src: 'assets/partners/sonacim.jpg', url: 'https://www.facebook.com/sonacim' },
      { name: 'SODELAC', src: 'assets/partners/sodelac.jpg', url: 'https://www.facebook.com/SODELAC' },
      { name: 'ANSICE', src: 'assets/partners/ansice.png', url: 'https://www.ansice.td' },
      { name: 'Assemblée Nationale', src: 'assets/partners/ant.webp', url: 'https://www.assemblee-nationale.td' }
    ]
  };

  // Why us features
  whyUsFeatures = [
    {
      icon: 'shield-check',
      title: 'Sécuriser',
      text: 'Réduire les risques, renforcer la conformité et fiabiliser les opérations financières.'
    },
    {
      icon: 'layers',
      title: 'Structurer',
      text: 'Mettre en place des process, une gouvernance et des outils de pilotage clairs.'
    },
    {
      icon: 'trending-up',
      title: 'Développer',
      text: 'Optimiser la performance et accompagner la croissance avec des décisions data-driven.'
    }
  ];

  // Services preview
  services = [
    {
      tag: 'Audit',
      title: 'Audit & commissariat',
      text: 'Contrôle, fiabilisation, conformité et recommandations actionnables.',
      imageSrc: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
      ctaLabel: 'Découvrir',
      ctaRoute: '/services'
    },
    {
      tag: 'Comptabilité',
      title: 'Expertise comptable',
      text: 'Tenue, révision, clôture et accompagnement comptable et financier.',
      imageSrc: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80',
      ctaLabel: 'Découvrir',
      ctaRoute: '/services'
    },
    {
      tag: 'Fiscalité',
      title: 'Conseil fiscal',
      text: 'Optimisation fiscale, déclarations, conformité et sécurisation.',
      imageSrc: 'https://images.unsplash.com/photo-1586486855514-8c633cc6fd38?w=600&q=80',
      ctaLabel: 'Découvrir',
      ctaRoute: '/services'
    },
    {
      tag: 'Conseil',
      title: 'Conseil & stratégie',
      text: 'Pilotage, organisation, performance, business plan et reporting.',
      imageSrc: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80',
      ctaLabel: 'Découvrir',
      ctaRoute: '/services'
    },
    {
      tag: 'Digital',
      title: 'Digitalisation',
      text: 'Automatisation, outils, tableaux de bord, modernisation des process.',
      imageSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
      ctaLabel: 'Découvrir',
      ctaRoute: '/services'
    },
    {
      tag: 'Formation',
      title: 'Formation',
      text: 'Programmes pratiques pour équipes finance, admin, management.',
      imageSrc: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80',
      ctaLabel: 'Découvrir',
      ctaRoute: '/services'
    }
  ];

  // Method steps
  methodSteps = [
    { number: 1, title: 'Diagnostic', text: 'Analyse rapide du besoin, contexte, contraintes et objectifs.' },
    { number: 2, title: 'Plan d\'action', text: 'Proposition claire : livrables, timeline, responsabilités, KPIs.' },
    { number: 3, title: 'Exécution', text: 'Mise en œuvre accompagnée, coordination, itérations.' },
    { number: 4, title: 'Suivi & amélioration', text: 'Mesure de l\'impact, reporting, ajustements continus.' }
  ];

  // KPIs
  kpis = [
    { value: '95%', label: 'Satisfaction client' },
    { value: '2×', label: 'Amélioration (moy.)' },
    { value: '10+', label: 'Années d\'expérience' }
  ];

  // Testimonials
  testimonials = [
    {
      rating: 4,
      quote: 'Leurs experts ont identifié nos leviers d\'optimisation fiscale tout en sécurisant nos positions réglementaires. Un cabinet alliant maîtrise des normes internationales et connaissance du contexte tchadien.',
      name: 'Le Directeur Général',
      role: 'Direction Générale',
      company: 'ARCEP / OTRT',
      avatar: 'assets/team/avatar.webp'
    },
    {
      rating: 5,
      quote: 'Le business plan et l\'audit organisationnel ont été des pièces maîtresses dans la redéfinition de notre stratégie industrielle. Des analyses financières précises et des recommandations concrètes pour mieux piloter nos investissements.',
      name: 'Le Directeur Général',
      role: 'Direction Générale',
      company: 'SONACIM',
      avatar: 'assets/team/avatar.webp'
    },
    {
      rating: 4,
      quote: 'L\'installation de nos logiciels de gestion couplée à une formation sur mesure a transformé les compétences de nos équipes financières. Un transfert de compétences immédiat et durable. Nous recommandons vivement leur approche pédagogique.',
      name: 'La Direction',
      role: 'Direction',
      company: 'SODELAC',
      avatar: 'assets/team/avatar.webp'
    }
  ];
}
