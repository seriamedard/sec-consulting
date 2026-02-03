import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../section-title/section-title.component';

interface Step {
  number: number;
  title: string;
  text: string;
}

@Component({
  selector: 'app-steps',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  template: `
    <section class="section bg-white">
      <div class="container-custom">
        <app-section-title 
          [title]="title" 
          [subtitle]="subtitle">
        </app-section-title>

        <div class="mt-16 relative">
          <!-- Connection line (desktop) -->
          <div class="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gray-200"></div>
          
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            @for (step of steps; track step.number) {
              <div class="relative flex flex-col items-center text-center">
                <!-- Step number -->
                <div class="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mb-4 relative z-10">
                  {{ step.number }}
                </div>
                <h3 class="heading-3 mb-2">{{ step.title }}</h3>
                <p class="body-text text-gray-500">{{ step.text }}</p>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `
})
export class StepsComponent {
  @Input() title = '';
  @Input() subtitle?: string;
  @Input() steps: Step[] = [];
}
