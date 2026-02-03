import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

type BadgeVariant = 'default' | 'soft' | 'outline';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span [class]="badgeClasses">
      <ng-content></ng-content>
    </span>
  `,
  styles: [`
    :host {
      display: inline-block;
    }
  `]
})
export class BadgeComponent {
  @Input() variant: BadgeVariant = 'default';

  get badgeClasses(): string {
    const base = 'inline-flex items-center px-3 py-1 rounded-pill text-sm font-medium';
    
    const variants: Record<BadgeVariant, string> = {
      default: 'bg-secondary text-text-dark',
      soft: 'bg-soft-bg-2 text-text-dark',
      outline: 'border border-primary text-primary bg-transparent'
    };

    return `${base} ${variants[this.variant]}`;
  }
}
