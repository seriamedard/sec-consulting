import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-title',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="alignClasses">
      @if (eyebrow) {
        <span class="text-primary font-semibold text-sm uppercase tracking-wider mb-2 block">
          {{ eyebrow }}
        </span>
      }
      <h2 class="heading-2 mb-4">{{ title }}</h2>
      @if (subtitle) {
        <p class="body-text text-gray-500 max-w-2xl" [class.mx-auto]="centered">
          {{ subtitle }}
        </p>
      }
    </div>
  `
})
export class SectionTitleComponent {
  @Input() eyebrow?: string;
  @Input() title = '';
  @Input() subtitle?: string;
  @Input() centered = true;

  get alignClasses(): string {
    return this.centered ? 'text-center' : 'text-left';
  }
}
