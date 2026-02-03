import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../section-title/section-title.component';

interface Testimonial {
  rating: number;
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar?: string;
}

@Component({
  selector: 'app-testimonial-carousel',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  template: `
    <section class="section bg-text-dark relative overflow-hidden">
      <!-- Background pattern -->
      <div class="absolute inset-0 opacity-5">
        <svg class="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,20 Q25,10 50,20 T100,20" fill="none" stroke="white" stroke-width="0.5"/>
          <path d="M0,40 Q25,30 50,40 T100,40" fill="none" stroke="white" stroke-width="0.5"/>
          <path d="M0,60 Q25,50 50,60 T100,60" fill="none" stroke="white" stroke-width="0.5"/>
          <path d="M0,80 Q25,70 50,80 T100,80" fill="none" stroke="white" stroke-width="0.5"/>
        </svg>
      </div>

      <div class="container-custom relative z-10">
        <div class="text-center mb-12">
          <span class="text-primary font-semibold text-sm uppercase tracking-wider mb-2 block">
            Témoignages
          </span>
          <h2 class="text-white text-h2-mobile md:text-h2 font-bold">{{ title }}</h2>
        </div>

        <div class="relative">
          <!-- Navigation arrows -->
          <div class="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-20">
            <button 
              (click)="prev()"
              type="button"
              class="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
              </svg>
            </button>
          </div>
          <div class="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20">
            <button 
              (click)="next()"
              type="button"
              class="w-12 h-12 rounded-full bg-white text-text-dark flex items-center justify-center hover:bg-gray-100 transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>

          <!-- Cards container -->
          <div class="overflow-hidden">
            <div 
              class="flex transition-transform duration-500 ease-out gap-6"
              [style.transform]="'translateX(-' + (currentIndex() * (100 / visibleCards)) + '%)'">
              @for (testimonial of items; track testimonial.name) {
                <div class="flex-shrink-0 w-full md:w-[calc(33.333%-1rem)]">
                  <div class="bg-white rounded-lg p-6 h-full flex flex-col">
                    <!-- Quote icon -->
                    <div class="text-primary mb-4">
                      <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                      </svg>
                    </div>
                    
                    <!-- Stars -->
                    <div class="flex gap-1 mb-4">
                      @for (star of getStars(testimonial.rating); track $index) {
                        <svg class="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      }
                    </div>

                    <!-- Quote -->
                    <p class="text-gray-600 mb-6 flex-1 italic">"{{ testimonial.quote }}"</p>

                    <!-- Author -->
                    <div class="flex items-center gap-4">
                      @if (testimonial.avatar) {
                        <img 
                          [src]="testimonial.avatar" 
                          [alt]="testimonial.name"
                          class="w-12 h-12 rounded-full object-cover">
                      } @else {
                        <div class="w-12 h-12 rounded-full bg-soft-bg-1 flex items-center justify-center text-text-dark font-semibold">
                          {{ getInitials(testimonial.name) }}
                        </div>
                      }
                      <div>
                        <div class="font-semibold text-text-dark">{{ testimonial.name }}</div>
                        <div class="text-sm text-gray-500">{{ testimonial.role }}, {{ testimonial.company }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>

          <!-- Mobile navigation dots -->
          <div class="flex justify-center gap-2 mt-6 md:hidden">
            @for (item of items; track item.name; let i = $index) {
              <button 
                (click)="goTo(i)"
                type="button"
                class="w-3 h-3 rounded-full transition-colors"
                [class.bg-primary]="currentIndex() === i"
                [class.bg-white]="currentIndex() !== i"
                [class.opacity-30]="currentIndex() !== i">
              </button>
            }
          </div>
        </div>
      </div>
    </section>
  `
})
export class TestimonialCarouselComponent {
  @Input() title = 'Ils parlent de nous';
  @Input() items: Testimonial[] = [];

  currentIndex = signal(0);
  visibleCards = 3;

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }

  getInitials(name: string): string {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  }

  next() {
    const maxIndex = Math.max(0, this.items.length - this.visibleCards);
    this.currentIndex.update(i => (i < maxIndex ? i + 1 : 0));
  }

  prev() {
    const maxIndex = Math.max(0, this.items.length - this.visibleCards);
    this.currentIndex.update(i => (i > 0 ? i - 1 : maxIndex));
  }

  goTo(index: number) {
    this.currentIndex.set(index);
  }
}
