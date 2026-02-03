import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface KpiItem {
  value: string;
  label: string;
}

@Component({
  selector: 'app-kpi-strip',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-8">
      @for (kpi of kpis; track kpi.label) {
        <div class="text-center">
          <div class="text-5xl md:text-6xl font-bold text-primary mb-2">
            {{ kpi.value }}
          </div>
          <div class="text-gray-500 font-medium">{{ kpi.label }}</div>
        </div>
      }
    </div>
  `
})
export class KpiStripComponent {
  @Input() kpis: KpiItem[] = [];
}
