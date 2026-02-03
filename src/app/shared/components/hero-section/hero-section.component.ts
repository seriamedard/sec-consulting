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
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
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
          <div class="order-1 md:order-2">
            @if (imageSrc) {
              <div class="relative">
                <img 
                  [src]="imageSrc" 
                  [alt]="imageAlt || title"
                  class="w-full h-auto rounded-lg shadow-md object-cover aspect-[4/3]"
                  loading="eager">
                <!-- Decorative elements -->
                <div class="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/20 rounded-lg -z-10"></div>
                <div class="absolute -top-4 -right-4 w-16 h-16 bg-secondary/30 rounded-full -z-10"></div>
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
