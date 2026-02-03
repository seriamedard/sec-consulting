import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BadgeComponent } from '../badge/badge.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, RouterLink, BadgeComponent],
  template: `
    <article class="card h-full flex flex-col bg-white rounded-lg overflow-hidden">
      @if (imageSrc) {
        <div class="relative h-48 overflow-hidden">
          <img 
            [src]="imageSrc" 
            [alt]="imageAlt || title"
            class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy">
          @if (tag) {
            <div class="absolute top-4 left-4">
              <app-badge [variant]="'default'">{{ tag }}</app-badge>
            </div>
          }
        </div>
      }
      <div class="p-6 flex flex-col flex-1">
        @if (tag && !imageSrc) {
          <div class="mb-3">
            <app-badge [variant]="'soft'">{{ tag }}</app-badge>
          </div>
        }
        <h3 class="heading-3 mb-2">{{ title }}</h3>
        <p class="body-text text-gray-500 mb-4 flex-1">{{ text }}</p>
        @if (ctaLabel && ctaRoute) {
          <a 
            [routerLink]="ctaRoute"
            class="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
            {{ ctaLabel }}
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        }
      </div>
    </article>
  `,
  styles: [`
    :host {
      display: block;
    }
    
    .card {
      box-shadow: 0 6px 16px rgba(0,0,0,0.08);
      transition: transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1), 
                  box-shadow 0.2s cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    
    .card:hover {
      transform: translateY(-4px);
      box-shadow: 0 10px 26px rgba(0,0,0,0.10);
    }
  `]
})
export class CardComponent {
  @Input() imageSrc?: string;
  @Input() imageAlt?: string;
  @Input() tag?: string;
  @Input() title = '';
  @Input() text = '';
  @Input() ctaLabel?: string;
  @Input() ctaRoute?: string;
}
