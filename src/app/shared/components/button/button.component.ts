import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    @if (href) {
      <a 
        [href]="href" 
        [target]="target"
        [class]="buttonClasses"
        [class.w-full]="fullWidth">
        <ng-container *ngTemplateOutlet="content"></ng-container>
      </a>
    } @else if (route) {
      <a 
        [routerLink]="route" 
        [class]="buttonClasses"
        [class.w-full]="fullWidth">
        <ng-container *ngTemplateOutlet="content"></ng-container>
      </a>
    } @else {
      <button 
        [type]="type" 
        [class]="buttonClasses"
        [class.w-full]="fullWidth"
        [disabled]="disabled">
        <ng-container *ngTemplateOutlet="content"></ng-container>
      </button>
    }

    <ng-template #content>
      <ng-content></ng-content>
      @if (icon === 'arrow-right') {
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
        </svg>
      }
    </ng-template>
  `,
  styles: [`
    :host {
      display: inline-block;
    }
    
    :host(.w-full) {
      display: block;
      width: 100%;
    }
  `]
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'primary';
  @Input() type: 'button' | 'submit' = 'button';
  @Input() href?: string;
  @Input() route?: string;
  @Input() target = '_self';
  @Input() disabled = false;
  @Input() fullWidth = false;
  @Input() icon?: string;

  get buttonClasses(): string {
    const base = 'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-sm font-semibold transition-all duration-200 min-h-[44px]';
    
    const variants: Record<ButtonVariant, string> = {
      primary: 'bg-primary text-white shadow-sm hover:brightness-90 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
      secondary: 'bg-text-dark text-white hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-text-dark focus:ring-offset-2',
      ghost: 'bg-transparent text-text-dark border-2 border-text-dark hover:bg-text-dark hover:text-white focus:outline-none focus:ring-2 focus:ring-text-dark focus:ring-offset-2'
    };

    const disabledClass = this.disabled ? 'opacity-50 cursor-not-allowed' : '';

    return `${base} ${variants[this.variant]} ${disabledClass}`;
  }
}
