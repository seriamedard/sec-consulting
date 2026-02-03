import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  PageHeroComponent,
  SectionTitleComponent,
  FeatureCardComponent,
  CtaBandComponent
} from '../../shared/components';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    PageHeroComponent,
    SectionTitleComponent,
    FeatureCardComponent,
    CtaBandComponent
  ],
  templateUrl: './about.component.html'
})
export class AboutComponent {
  values = [
    {
      icon: 'scale',
      title: 'Intégrité',
      text: 'Éthique, confidentialité et conformité dans toutes nos interventions.'
    },
    {
      icon: 'target',
      title: 'Exigence',
      text: 'Rigueur, qualité et livrables clairs pour des résultats mesurables.'
    },
    {
      icon: 'handshake',
      title: 'Proximité',
      text: 'Accompagnement humain, disponibilité et relation de confiance.'
    },
    {
      icon: 'sparkles',
      title: 'Innovation',
      text: 'Digitalisation, amélioration continue et solutions modernes.'
    }
  ];
}
