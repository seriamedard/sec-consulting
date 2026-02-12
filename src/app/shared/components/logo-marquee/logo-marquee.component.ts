import { Component, Input, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Logo {
  name: string;
  src: string;
  url?: string;
}

@Component({
  selector: 'app-logo-marquee',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-12 bg-gray-50 overflow-hidden">
      <div class="container-custom mb-8">
        <p class="text-center text-gray-500 font-medium">{{ title }}</p>
      </div>
      <div class="relative">
        <div class="flex animate-marquee gap-16 items-center">
          @for (logo of duplicatedLogos(); track $index) {
            <a [href]="logo.url || '#'" [attr.target]="logo.url ? '_blank' : null" [attr.rel]="logo.url ? 'noopener noreferrer' : null"
               class="flex-shrink-0 h-12 w-32 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
               [class.cursor-default]="!logo.url">
              @if (logo.src) {
                <img [src]="logo.src" [alt]="logo.name" class="max-h-full max-w-full object-contain" width="128" height="48">
              } @else {
                <div class="bg-gray-200 rounded-md px-4 py-2 text-gray-500 font-medium text-sm">
                  {{ logo.name }}
                </div>
              }
            </a>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    @keyframes marquee {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }
    
    .animate-marquee {
      animation: marquee 30s linear infinite;
    }
    
    .animate-marquee:hover {
      animation-play-state: paused;
    }
  `]
})
export class LogoMarqueeComponent {
  @Input() title = 'Ils nous font confiance';
  @Input() set logos(value: Logo[]) {
    this._logos.set(value);
  }
  
  private _logos = signal<Logo[]>([]);
  
  duplicatedLogos = computed(() => {
    const logos = this._logos();
    return [...logos, ...logos];
  });
}
