import { Component, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavItem {
  label: string;
  route: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen = signal(false);
  isScrolled = signal(false);

  navItems: NavItem[] = [
    { label: 'Accueil', route: '/' },
    { label: 'À propos', route: '/a-propos' },
    { label: 'Services', route: '/services' },
    { label: 'Études de cas', route: '/etudes-de-cas' },
    { label: 'Équipe', route: '/equipe' },
    { label: 'Contact', route: '/contact' }
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 20);
  }

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
    if (this.isMenuOpen()) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  closeMenu() {
    this.isMenuOpen.set(false);
    document.body.style.overflow = '';
  }
}
