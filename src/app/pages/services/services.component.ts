import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  PageHeroComponent,
  SectionTitleComponent,
  ButtonComponent,
  TestimonialCarouselComponent,
  CtaBandComponent
} from '../../shared/components';

interface ServiceSection {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  ctaLabel: string;
  imageSrc: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    CommonModule,
    PageHeroComponent,
    SectionTitleComponent,
    ButtonComponent,
    TestimonialCarouselComponent,
    CtaBandComponent
  ],
  templateUrl: './services.component.html'
})
export class ServicesComponent {
  services: ServiceSection[] = [
    {
      id: 'audit',
      title: 'Audit & commissariat',
      description: 'Nous assurons des missions d\'audit légal et contractuel pour fiabiliser vos états financiers et renforcer la confiance de vos parties prenantes.',
      bullets: [
        'Audit légal et contractuel',
        'Contrôle interne et procédures',
        'Recommandations et plan de remédiation',
        'Audit fiscal et organisationnel'
      ],
      ctaLabel: 'Demander une mission d\'audit',
      imageSrc: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80'
    },
    {
      id: 'comptabilite',
      title: 'Expertise comptable',
      description: 'De la tenue quotidienne à la clôture annuelle, nous vous accompagnons pour une comptabilité fiable et conforme.',
      bullets: [
        'Tenue de comptabilité (générale/analytique)',
        'Révision des comptes',
        'États financiers et situations intermédiaires',
        'Budgets prévisionnels et trésorerie'
      ],
      ctaLabel: 'Parler à un expert',
      imageSrc: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80'
    },
    {
      id: 'fiscalite',
      title: 'Conseil fiscal',
      description: 'Optimisez votre situation fiscale en toute conformité avec nos experts spécialisés.',
      bullets: [
        'Déclarations fiscales (TVA, IS, IR...)',
        'Optimisation fiscale légale',
        'Assistance en cas de contrôle',
        'Fiscalité de groupe'
      ],
      ctaLabel: 'Demander un accompagnement fiscal',
      imageSrc: 'https://images.unsplash.com/photo-1586486855514-8c633cc6fd38?w=600&q=80'
    },
    {
      id: 'strategie',
      title: 'Conseil & stratégie',
      description: 'Pilotez votre organisation avec des outils et une vision claire pour atteindre vos objectifs.',
      bullets: [
        'Pilotage et performance',
        'Business plan et études de marché',
        'Tableaux de bord et KPIs',
        'Conduite du changement'
      ],
      ctaLabel: 'Obtenir une feuille de route',
      imageSrc: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80'
    },
    {
      id: 'digital',
      title: 'Digitalisation',
      description: 'Modernisez vos processus avec des outils digitaux adaptés à vos besoins.',
      bullets: [
        'Automatisation de process',
        'Outils et intégrations',
        'Dashboards KPI',
        'Formation aux outils digitaux'
      ],
      ctaLabel: 'Lancer un projet digital',
      imageSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80'
    },
    {
      id: 'formation',
      title: 'Formation',
      description: 'Renforcez les compétences de vos équipes avec des programmes pratiques et adaptés.',
      bullets: [
        'Finance et comptabilité',
        'Gestion et contrôle',
        'Outils et reporting',
        'Formations sur mesure'
      ],
      ctaLabel: 'Planifier une formation',
      imageSrc: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80'
    }
  ];

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
