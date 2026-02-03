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
    ButtonComponent
  ],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  // Hero data
  hero = {
    eyebrow: "Cabinet d'expertise & conseil",
    title: "SEC-CONSULTING — Expertise comptable, audit, conseil, digitalisation et formation",
    subtitle: "Nous aidons les organisations à sécuriser leurs opérations, structurer leurs décisions et accélérer leur croissance grâce à une expertise rigoureuse et un accompagnement pragmatique.",
    badges: ['Rigueur & conformité', 'Décisions pilotées par les chiffres', 'Accompagnement opérationnel'],
    primaryCta: { label: 'Demander un diagnostic', route: '/contact' },
    secondaryCta: { label: 'Voir nos services', route: '/services' },
    imageSrc: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
    imageAlt: 'Consultants en réunion'
  };

  // Partners logos
  partners = {
    title: 'Ils nous font confiance',
    logos: [
      { name: 'Partenaire 1', src: '' },
      { name: 'Partenaire 2', src: '' },
      { name: 'Partenaire 3', src: '' },
      { name: 'Partenaire 4', src: '' },
      { name: 'Partenaire 5', src: '' },
      { name: 'Partenaire 6', src: '' }
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
    { value: '8+', label: 'Années d\'expérience' }
  ];

  // Testimonials
  testimonials = [
    {
      rating: 5,
      quote: 'Une équipe rigoureuse, réactive, avec des livrables clairs. SEC-CONSULTING nous a permis de structurer notre reporting financier en quelques semaines.',
      name: 'Ibrahim Mahamat',
      role: 'Directeur Général',
      company: 'Entreprise ABC',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80'
    },
    {
      rating: 5,
      quote: 'Le diagnostic a été précis et le plan d\'action immédiatement exploitable. Nous avons réduit nos écarts de clôture de 40%.',
      name: 'Fatima Oumar',
      role: 'DAF',
      company: 'Organisation XYZ',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80'
    },
    {
      rating: 5,
      quote: 'Nos reportings sont enfin structurés, avec des KPI utiles au pilotage. L\'équipe a fait preuve d\'une grande pédagogie.',
      name: 'Moussa Deby',
      role: 'COO',
      company: 'Structure DEF',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80'
    }
  ];
}
