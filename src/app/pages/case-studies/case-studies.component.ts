import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  PageHeroComponent,
  SectionTitleComponent,
  BadgeComponent,
  CtaBandComponent
} from '../../shared/components';

interface CaseStudy {
  client: string;
  industry: string;
  challenge: string;
  serviceUsed: string;
  result: string;
  imageSrc: string;
}

@Component({
  selector: 'app-case-studies',
  standalone: true,
  imports: [
    CommonModule,
    PageHeroComponent,
    SectionTitleComponent,
    BadgeComponent,
    CtaBandComponent
  ],
  templateUrl: './case-studies.component.html'
})
export class CaseStudiesComponent {
  filters = ['Tous', 'Audit', 'Comptabilité', 'Fiscalité', 'Digitalisation', 'Formation'];
  activeFilter = signal('Tous');

  caseStudies: CaseStudy[] = [
    {
      client: 'Groupe Industriel ABC',
      industry: 'Industrie',
      challenge: 'Fiabiliser la clôture et réduire les écarts.',
      serviceUsed: 'Comptabilité',
      result: 'Cycle de clôture réduit de 40%, reporting stabilisé.',
      imageSrc: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80'
    },
    {
      client: 'ONG Santé Plus',
      industry: 'ONG / Santé',
      challenge: 'Renforcer le contrôle interne.',
      serviceUsed: 'Audit',
      result: 'Plan d\'action et conformité améliorée de 60%.',
      imageSrc: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80'
    },
    {
      client: 'Tech Services SARL',
      industry: 'Services',
      challenge: 'Automatiser les rapports KPI.',
      serviceUsed: 'Digitalisation',
      result: 'Dashboards temps réel, gain de 20h/mois.',
      imageSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80'
    },
    {
      client: 'Institution Financière',
      industry: 'Finance',
      challenge: 'Optimisation fiscale et conformité.',
      serviceUsed: 'Fiscalité',
      result: 'Économies fiscales de 15%, zéro redressement.',
      imageSrc: 'https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=600&q=80'
    },
    {
      client: 'Entreprise Commerciale',
      industry: 'Commerce',
      challenge: 'Former l\'équipe comptable.',
      serviceUsed: 'Formation',
      result: 'Équipe autonome en 3 mois, erreurs réduites de 70%.',
      imageSrc: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80'
    },
    {
      client: 'Holding Familiale',
      industry: 'Holding',
      challenge: 'Audit des filiales et consolidation.',
      serviceUsed: 'Audit',
      result: 'Reporting consolidé fiable, gouvernance renforcée.',
      imageSrc: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=600&q=80'
    }
  ];

  filteredCases = computed(() => {
    const filter = this.activeFilter();
    if (filter === 'Tous') {
      return this.caseStudies;
    }
    return this.caseStudies.filter(c => c.serviceUsed === filter);
  });

  setFilter(filter: string) {
    this.activeFilter.set(filter);
  }
}
