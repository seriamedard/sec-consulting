import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-cta-band',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  template: `
    <section [class]="sectionClasses">
      <div class="container-custom text-center">
        <h2 
          class="text-2xl md:text-3xl font-bold mb-4"
          [class.text-white]="variant === 'primary' || variant === 'dark'">
          {{ title }}
        </h2>
        @if (text) {
          <p 
            class="mb-8 max-w-2xl mx-auto"
            [class.text-white]="variant === 'primary' || variant === 'dark'"
            [class.opacity-80]="variant === 'primary' || variant === 'dark'"
            [class.text-gray-600]="variant === 'light'">
            {{ text }}
          </p>
        }
        <app-button 
          [route]="ctaRoute" 
          [variant]="buttonVariant"
          icon="arrow-right">
          {{ ctaLabel }}
        </app-button>
      </div>
    </section>
  `
})
export class CtaBandComponent {
  @Input() title = '';
  @Input() text?: string;
  @Input() ctaLabel = '';
  @Input() ctaRoute = '/contact';
  @Input() variant: 'primary' | 'dark' | 'light' = 'primary';

  get sectionClasses(): string {
    const base = 'py-16 md:py-24';
    
    const variants: Record<string, string> = {
      primary: 'bg-primary',
      dark: 'bg-text-dark',
      light: 'bg-soft-bg-1'
    };

    return `${base} ${variants[this.variant]}`;
  }

  get buttonVariant(): 'primary' | 'secondary' | 'ghost' {
    return this.variant === 'primary' ? 'secondary' : 
           this.variant === 'dark' ? 'primary' : 'primary';
  }
}
