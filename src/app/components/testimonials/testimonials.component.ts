import { NgOptimizedImage } from "@angular/common";
import { Component, ChangeDetectionStrategy, afterNextRender, ElementRef, viewChild } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-testimonials',
  imports: [NgOptimizedImage],
  template: `
    <section class="testimonials" id="testimonios">
      <div class="testimonials__container">
        <div class="testimonials__header">
          <h2 class="testimonials__title">Testimonios</h2>
          <p class="testimonials__subtitle">Historias reales de quienes ya confiaron en FINEX</p>
        </div>

        <div class="testimonials__slider-container">
          <button class="testimonials__nav-btn testimonials__nav-btn--prev" aria-label="Anterior" (click)="prev()">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>

          <div class="testimonials__slider-wrapper">
            <div class="testimonials__slider" #slider>
            @for (testimonial of testimonials; track testimonial.name) {
              <div class="testimonial-card">
                <div class="testimonial-card__quote-icon">
                  <img ngSrc="https://www.figma.com/api/mcp/asset/9d69361b-f633-4acb-8066-2c9a47e7b2fe" alt="quote" width="78" height="78">
                </div>
                <div class="testimonial-card__content">
                  <p class="testimonial-card__text">{{ testimonial.text }}</p>
                  <div class="testimonial-card__author">
                    <div class="testimonial-card__avatar">
                      <img [ngSrc]="testimonial.avatar" [alt]="testimonial.name" width="94" height="94">
                    </div>
                    <div class="testimonial-card__info">
                      <h4 class="testimonial-card__name">{{ testimonial.name }}</h4>
                      <p class="testimonial-card__location">{{ testimonial.location }}</p>
                    </div>
                  </div>
                </div>
              </div>
            }
            <!-- Duplicate for infinite loop effect -->
            @for (testimonial of testimonials; track testimonial.name) {
              <div class="testimonial-card">
                <div class="testimonial-card__quote-icon">
                  <img ngSrc="https://www.figma.com/api/mcp/asset/9d69361b-f633-4acb-8066-2c9a47e7b2fe" alt="quote" width="78" height="78">
                </div>
                <div class="testimonial-card__content">
                  <p class="testimonial-card__text">{{ testimonial.text }}</p>
                  <div class="testimonial-card__author">
                    <div class="testimonial-card__avatar">
                      <img [ngSrc]="testimonial.avatar" [alt]="testimonial.name" width="94" height="94">
                    </div>
                    <div class="testimonial-card__info">
                      <h4 class="testimonial-card__name">{{ testimonial.name }}</h4>
                      <p class="testimonial-card__location">{{ testimonial.location }}</p>
                    </div>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>

          <button class="testimonials__nav-btn testimonials__nav-btn--next" aria-label="Siguiente" (click)="next()">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      </div>
    </section>
  `,
  styles: [`
    @use '../../../styles/variables' as vars;

    .testimonials {
      padding: 128px 0;
      background: #ffffff;
      width: 100%;
      display: flex;
      justify-content: center;
      overflow: hidden;
    }

    .testimonials__container {
      max-width: 1920px;
      width: 100%;
      padding: 0 20px;
      display: flex;
      flex-direction: column;
      align-items: center;

      @media (min-width: vars.$breakpoint-xl) {
        padding: 0 160px;
      }
    }

    .testimonials__header {
      text-align: center;
      margin-bottom: 30.8px;
      max-width: 1600px;
      width: 100%;
    }

    .testimonials__title {
      font-family: vars.$font-family-roboto;
      font-weight: 600;
      font-size: 48px;
      line-height: 45px;
      color: vars.$primary-red;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      margin: 0 0 32px;
    }

    .testimonials__subtitle {
      font-family: 'Open Sans', sans-serif;
      font-style: italic;
      font-weight: 400;
      font-size: 24px;
      line-height: 30px;
      color: #2f3137;
      margin: 0;
    }

    .testimonials__slider-container {
      position: relative;
      width: 100%;
      display: flex;
      align-items: center;
      gap: 20px;
    }

    .testimonials__nav-btn {
      flex-shrink: 0;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: white;
      border: 1px solid #e0e0e0;
      color: vars.$primary-red;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      transition: all 0.2s ease;
      z-index: 2;

      &:hover {
        background: vars.$primary-red;
        color: white;
        transform: scale(1.05);
      }

      @media (max-width: 768px) {
        display: none;
      }
    }

    .testimonials__slider-wrapper {
      flex: 1;
      overflow: hidden;
      position: relative;
      padding: 32px 0;
      mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
      -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
    }

    .testimonials__slider {
      display: flex;
      gap: 31px;
      width: max-content;
      align-items: stretch;
    }

    .testimonial-card {
      position: relative;
      flex: 0 0 413px;
      background: #f8f8f8;
      border-radius: 32px;
      padding: 64px;
      box-shadow: 8px 8px 8px 0px rgba(0, 0, 0, 0.25);
      display: flex;
      flex-direction: column;
      gap: 32px;

      @media (max-width: 500px) {
        flex: 0 0 300px;
        padding: 40px;
      }
    }

    .testimonial-card__quote-icon {
      position: absolute;
      top: 24.85px;
      right: 40px;
      width: 78.58px;
      height: 78.58px;
      
      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }

    .testimonial-card__content {
      display: flex;
      flex-direction: column;
      gap: 32px;
      padding-top: 64px;
    }

    .testimonial-card__text {
      font-family: vars.$font-family-poppins;
      font-weight: 400;
      font-size: 18px;
      line-height: 27.6px;
      color: #1f1f1f;
      margin: 0;
      min-height: 138px;
    }

    .testimonial-card__author {
      display: flex;
      flex-direction: column;
      gap: 32px;
    }

    .testimonial-card__avatar {
      width: 93.78px;
      height: 93.78px;
      border-radius: 50%;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .testimonial-card__info {
      display: flex;
      flex-direction: column;
      color: #1f1f1f;
    }

    .testimonial-card__name {
      font-family: vars.$font-family-poppins;
      font-weight: 700;
      font-size: 20px;
      line-height: normal;
      margin: 0;
    }

    .testimonial-card__location {
      font-family: vars.$font-family-poppins;
      font-weight: 400;
      font-size: 18px;
      line-height: 27.6px;
      margin: 0;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestimonialsComponent {
  private readonly sliderRef = viewChild.required<ElementRef<HTMLElement>>('slider');

  testimonials = [
    {
      name: 'María González',
      location: 'Tampico, Tamps.',
      text: 'Desde el primer contacto sentí claridad y confianza. Me acompañaron en todo el proceso y hoy tengo el crédito que necesitaba para renovar mi vivienda. Totalmente recomendados.',
      avatar: 'assets/images/testimonials/testimonial-avatar-1.webp'
    },
    {
      name: 'Luis Hernández',
      location: 'Reynosa, Tamps.',
      text: 'El equipo de FINEX me explicó cada paso y resolvió todas mis dudas. El proceso fue mucho más sencillo de lo que esperaba.',
      avatar: 'assets/images/testimonials/testimonial-avatar-2.webp'
    },
    {
      name: 'Ana Rodríguez',
      location: 'Ciudad Victoria, Tamps.',
      text: 'Me gustó mucho la transparencia y el trato profesional. Siempre estuvieron al pendiente y cumplieron lo que prometieron.',
      avatar: 'assets/images/testimonials/testimonial-avatar-3.webp'
    }
  ];

  private tween!: gsap.core.Tween;
  // 3 items, duration 40s. 40s / 3 items = exact time per item
  private readonly timePerItem = 40 / 3;

  constructor() {
    afterNextRender(() => {
      this.initSlider();
    });
  }

  private initSlider(): void {
    const slider = this.sliderRef().nativeElement;
    const totalWidth = slider.scrollWidth / 2;

    this.tween = gsap.to(slider, {
      x: -totalWidth - 15.5, // totalWidth + half gap (31/2)
      duration: 40,
      ease: 'none',
      repeat: -1
    });
  }

  next(): void {
    if (!this.tween) return;
    gsap.to(this.tween, {
      totalTime: this.tween.totalTime() + this.timePerItem,
      duration: 0.5,
      ease: 'power2.out'
    });
  }

  prev(): void {
    if (!this.tween) return;

    // If we're too close to 0, immediately jump forward by one full loop duration
    // so we can animate backwards smoothly without hitting the 0 boundary.
    if (this.tween.totalTime() < this.timePerItem) {
      this.tween.totalTime(this.tween.totalTime() + this.tween.duration());
    }

    gsap.to(this.tween, {
      totalTime: this.tween.totalTime() - this.timePerItem,
      duration: 0.5,
      ease: 'power2.out'
    });
  }
}
