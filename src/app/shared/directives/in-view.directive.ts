import { Directive, ElementRef, Input, OnInit, OnDestroy, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appInView]',
  standalone: true
})
export class InViewDirective implements OnInit, OnDestroy {
  /** Animation class to add when element enters view (default: 'animate-fade-up') */
  @Input('appInView') animation = 'animate-fade-up';

  /** Delay in ms before adding the animation class */
  @Input() animationDelay = 0;

  /** IntersectionObserver threshold (0-1) */
  @Input() animationThreshold = 0.15;

  private observer?: IntersectionObserver;

  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    // Start hidden
    this.renderer.addClass(this.el.nativeElement, 'before-animate');

    if (this.animationDelay) {
      this.renderer.setStyle(
        this.el.nativeElement,
        'transitionDelay',
        `${this.animationDelay}ms`
      );
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const cls = this.animation || 'animate-fade-up';
          this.renderer.addClass(this.el.nativeElement, cls);
          this.renderer.removeClass(this.el.nativeElement, 'before-animate');
          this.observer?.unobserve(this.el.nativeElement);
        }
      },
      { threshold: this.animationThreshold }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
