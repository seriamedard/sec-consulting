import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface FooterLink {
  label: string;
  route: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  columns: FooterColumn[] = [
    {
      title: 'Liens',
      links: [
        { label: 'À propos', route: '/a-propos' },
        { label: 'Services', route: '/services' },
        { label: 'Études de cas', route: '/etudes-de-cas' },
        { label: 'Contact', route: '/contact' }
      ]
    },
    {
      title: 'Services',
      links: [
        { label: 'Audit', route: '/services' },
        { label: 'Expertise comptable', route: '/services' },
        { label: 'Fiscalité', route: '/services' },
        { label: 'Digitalisation', route: '/services' }
      ]
    }
  ];

  socialLinks = [
    { name: 'Facebook', href: '#', icon: 'facebook' },
    { name: 'LinkedIn', href: '#', icon: 'linkedin' }
  ];
}
