import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  PageHeroComponent,
  ButtonComponent,
  CtaBandComponent
} from '../../shared/components';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo: string;
  social: {
    linkedin?: string;
    facebook?: string;
    email?: string;
  };
}

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [
    CommonModule,
    PageHeroComponent,
    ButtonComponent,
    CtaBandComponent
  ],
  templateUrl: './team.component.html'
})
export class TeamComponent {
  teamMembers: TeamMember[] = [
    {
      name: 'Dr. Mahamat Ibrahim',
      role: 'Directeur Général',
      bio: 'Expert-comptable diplômé, 15+ ans d\'expérience en audit et conseil. Spécialiste en restructuration financière.',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
      social: {
        linkedin: '#',
        email: 'direction@sec-consulting.org'
      }
    },
    {
      name: 'Fatima Oumar',
      role: 'Responsable Audit',
      bio: 'Commissaire aux comptes, expertise en contrôle interne et conformité. 10 ans d\'expérience.',
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
      social: {
        linkedin: '#',
        email: 'audit@sec-consulting.org'
      }
    },
    {
      name: 'Youssouf Deby',
      role: 'Consultant Senior Finance',
      bio: 'Pilotage financier, business plan et études de marché. MBA Finance, 8 ans d\'expérience.',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      social: {
        linkedin: '#',
        email: 'finance@sec-consulting.org'
      }
    },
    {
      name: 'Aïcha Hassan',
      role: 'Consultante Fiscalité',
      bio: 'Optimisation fiscale et conformité. Spécialiste en droit fiscal des affaires.',
      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
      social: {
        linkedin: '#',
        email: 'fiscal@sec-consulting.org'
      }
    },
    {
      name: 'Moussa Saleh',
      role: 'Consultant Digital',
      bio: 'Transformation digitale, automatisation des process. Expert en systèmes d\'information.',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
      social: {
        linkedin: '#',
        email: 'digital@sec-consulting.org'
      }
    },
    {
      name: 'Mariam Ali',
      role: 'Responsable Formation',
      bio: 'Conception pédagogique et animation de formations. Expertise en finance et management.',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
      social: {
        linkedin: '#',
        email: 'formation@sec-consulting.org'
      }
    }
  ];
}
