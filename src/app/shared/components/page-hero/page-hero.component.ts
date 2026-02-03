import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-page-hero',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  template: `
    <section [class]="sectionClasses">
      <div class="container-custom text-center">
        <h1 class="heading-1 mb-4">{{ title }}</h1>
        @if (subtitle) {
          <p class="body-text text-gray-600 max-w-2xl mx-auto mb-8">{{ subtitle }}</p>
        }
        @if (ctaLabel && ctaRoute) {
          <app-button [route]="ctaRoute" variant="primary" icon="arrow-right">
            {{ ctaLabel }}
          </app-button>
        }
      </div>
    </section>
  `
})
export class PageHeroComponent {
  @Input() title = '';
  @Input() subtitle?: string;
  @Input() ctaLabel?: string;
  @Input() ctaRoute?: string;
  @Input() background: 'gradient' | 'soft1' | 'soft2' | 'white' | 'gray' = 'gradient';

  get sectionClasses(): string {
    const base = 'py-16 md:py-24';
    
    const backgrounds: Record<string, string> = {
      gradient: 'bg-gradient-to-br from-soft-bg-1 to-white',
      soft1: 'bg-soft-bg-1',
      soft2: 'bg-soft-bg-2',
      white: 'bg-white',
      gray: 'bg-gray-50'
    };

    return `${base} ${backgrounds[this.background]}`;
  }
}
