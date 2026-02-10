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
      name: 'ZIANG Saint-Léon',
      role: 'Directeur Général',
      bio: 'Expert-comptable, 15+ ans d\'expérience en audit et conseil. Spécialiste en Certification des comptes.',
      photo: 'assets/team/leon.jpg',
      social: {
        linkedin: '#',
        email: 'contact@sec-consulting.org'
      }
    },
    {
      name: 'BIENVENU PATALET GEO',
      role: 'Adjoint Directeur Général',
      bio: 'Expert en analyse financière, maîtrise des états financiers et diagnostics de performance.',
      photo: 'assets/team/bienvenu.jpg',
      social: {
        linkedin: 'https://www.linkedin.com/in/bienvenu-patalet-geo-b4b9a7224/',
        email: 'contact@sec-consulting.org'
      }
    },
    {
      name: 'SERIA MEDARD',
      role: 'Consultant en IA & Digitalisation',
      bio: 'Expert en intelligence artificielle et automatisation des processus, pilotage des projets de digitalisation.',
      photo: 'assets/team/seria.jpg',
      social: {
        linkedin: 'https://www.linkedin.com/in/medard-geo/',
        email: 'm.seria@sec-consulting.org'
      }
    },
    {
      name: 'KALCHINGBE B.',
      role: 'Consultant en Comptabilité',
      bio: 'Expert en comptabilité, maîtrise des états financiers et diagnostics de performance.',
      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
      social: {
        linkedin: '#',
        email: 'contact@sec-consulting.org'
      }
    },
    {
      name: 'BAIYABE GONG-YA ERNEST',
      role: 'Expert en communication',
      bio: 'Expert en communication, maîtrise des états financiers et diagnostics de performance.',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
      social: {
        linkedin: '#',
        email: 'contact@sec-consulting.org'
      }
    },
    {
      name: 'ALLANGOM BESSADINGAR',
      role: 'Responsable Formation',
      bio: 'Conception pédagogique et animation de formations. Expertise en finance et management.',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
      social: {
        linkedin: '#',
        email: 'contact@sec-consulting.org'
      }
    }
  ];
}
