import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { BadgeComponent } from '../badge/badge.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, ButtonComponent, BadgeComponent],
  template: `
    <section [class]="sectionClasses">
      <div class="container-custom">
        <div class="hero-grid grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <!-- Content -->
          <div class="order-2 md:order-1">
            @if (eyebrow) {
              <span class="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
                {{ eyebrow }}
              </span>
            }
            <h1 class="heading-1 mb-6">{{ title }}</h1>
            @if (subtitle) {
              <p class="body-text text-gray-600 mb-8 max-w-lg">{{ subtitle }}</p>
            }
            
            @if (badges.length > 0) {
              <div class="flex flex-wrap gap-3 mb-8">
                @for (badge of badges; track badge) {
                  <app-badge variant="soft">{{ badge }}</app-badge>
                }
              </div>
            }

            <div class="flex flex-col sm:flex-row gap-4">
              @if (primaryCta) {
                <app-button 
                  [route]="primaryCta.route" 
                  variant="primary"
                  icon="arrow-right">
                  {{ primaryCta.label }}
                </app-button>
              }
              @if (secondaryCta) {
                <app-button 
                  [route]="secondaryCta.route" 
                  variant="ghost">
                  {{ secondaryCta.label }}
                </app-button>
              }
            </div>
          </div>

          <!-- Image -->
          <div class="order-1 md:order-2 hero-image-col">
            @if (imageSrc) {
              <div class="relative hero-image-wrapper">
                <img 
                  [src]="imageSrc" 
                  [alt]="imageAlt || title"
                  class="hero-image w-full rounded-lg shadow-md object-cover"
                  loading="eager">

                <!-- Floating icons -->
                <div class="floating-icon animate-float-1 absolute -top-5 -left-6 w-12 h-12 md:w-14 md:h-14 bg-white rounded-md shadow-md flex items-center justify-center z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 md:w-7 md:h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>

                <div class="floating-icon animate-float-2 absolute -top-3 right-8 md:-top-4 md:right-12 w-11 h-11 md:w-13 md:h-13 bg-white rounded-full shadow-md flex items-center justify-center z-10" style="animation-delay: 0.8s">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 md:w-6 md:h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                  </svg>
                </div>

                <div class="floating-icon animate-float-3 absolute top-1/3 -right-5 md:-right-7 w-11 h-11 md:w-13 md:h-13 bg-white rounded-md shadow-md flex items-center justify-center z-10" style="animation-delay: 1.5s">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 md:w-6 md:h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                  </svg>
                </div>

                <div class="floating-icon animate-float-4 absolute -bottom-4 -left-5 md:-bottom-6 md:-left-7 w-12 h-12 md:w-14 md:h-14 bg-white rounded-full shadow-md flex items-center justify-center z-10" style="animation-delay: 2.2s">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 md:w-7 md:h-7 text-text-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                </div>

                <div class="floating-icon animate-float-1 absolute bottom-6 -right-4 md:bottom-10 md:-right-6 w-10 h-10 md:w-12 md:h-12 bg-white rounded-md shadow-md flex items-center justify-center z-10" style="animation-delay: 3s">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 md:w-6 md:h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>

                <!-- Decorative background shapes -->
                <div class="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/15 rounded-lg -z-10"></div>
                <div class="absolute -top-4 -right-4 w-16 h-16 bg-secondary/20 rounded-full -z-10"></div>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
    }

    /* Full height image on large screens */
    @media (min-width: 1024px) {
      .hero-grid {
        min-height: 540px;
      }

      .hero-image-col {
        height: 100%;
        display: flex;
        align-items: stretch;
      }

      .hero-image-wrapper {
        height: 100%;
        display: flex;
      }

      .hero-image {
        height: 100%;
        min-height: 460px;
        object-fit: cover;
      }
    }

    @media (min-width: 1280px) {
      .hero-grid {
        min-height: 600px;
      }

      .hero-image {
        min-height: 520px;
      }
    }

    /* Floating icons styling */
    .floating-icon {
      backdrop-filter: blur(6px);
      background: rgba(255, 255, 255, 0.92);
      border: 1px solid rgba(242, 129, 29, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .floating-icon:hover {
      transform: scale(1.12) !important;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    }

    /* Respect reduced motion */
    @media (prefers-reduced-motion: reduce) {
      .floating-icon {
        animation: none !important;
      }
    }
  `]
})
export class HeroSectionComponent {
  @Input() eyebrow?: string;
  @Input() title = '';
  @Input() subtitle?: string;
  @Input() badges: string[] = [];
  @Input() primaryCta?: { label: string; route: string };
  @Input() secondaryCta?: { label: string; route: string };
  @Input() imageSrc?: string;
  @Input() imageAlt?: string;
  @Input() background: 'gradient' | 'soft1' | 'soft2' | 'white' = 'gradient';

  get sectionClasses(): string {
    const base = 'section py-12 md:py-24';
    
    const backgrounds: Record<string, string> = {
      gradient: 'bg-gradient-to-br from-soft-bg-1 to-soft-bg-2',
      soft1: 'bg-soft-bg-1',
      soft2: 'bg-soft-bg-2',
      white: 'bg-white'
    };

    return `${base} ${backgrounds[this.background]}`;
  }
}
