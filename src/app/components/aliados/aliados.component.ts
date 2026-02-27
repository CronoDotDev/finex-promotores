import { NgOptimizedImage } from "@angular/common";
import { Component, ChangeDetectionStrategy, afterNextRender } from '@angular/core';

import { gsap } from 'gsap';

@Component({
  selector: 'app-aliados',
  imports: [NgOptimizedImage],
  template: `
    <section class="aliados">
      <div class="aliados__container">
        <p class="aliados__description">
          Trabajamos con instituciones y marcas reconocidas para ofrecerte mejores oportunidades
        </p>

        <div class="aliados__slider-container">
          <button class="aliados__nav-btn aliados__nav-btn--prev" aria-label="Anterior" (click)="prev()">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          
          <div class="aliados__slider-wrapper">
            <div class="aliados__slider" #slider>
            @for (logo of logos; track logo.name) {
              <div class="aliados__item">
                  <div class="aliados__item-inner">
                      <img [ngSrc]="logo.src" [alt]="logo.name" [class]="logo.class" width="310" height="127">
                  </div>
              </div>
            }
            <!-- Duplicate for infinite effect -->
            @for (logo of logos; track logo.name) {
              <div class="aliados__item">
                  <div class="aliados__item-inner">
                      <img [ngSrc]="logo.src" [alt]="logo.name" [class]="logo.class" width="310" height="127">
                  </div>
              </div>
            }
          </div>
        </div>

          <button class="aliados__nav-btn aliados__nav-btn--next" aria-label="Siguiente" (click)="next()">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      </div>
    </section>
  `,
  styles: [`
    @use '../../../styles/variables' as vars;

    .aliados {
      padding: 128px 0;
      background: #ffffff;
      overflow: hidden;
    }

    .aliados__container {
      max-width: 1920px;
      margin: 0 auto;
      padding: 0 20px;
      display: flex;
      flex-direction: column;
      gap: 32px;
      align-items: center;

      @media (min-width: vars.$breakpoint-xl) {
        padding: 0 160px;
      }
    }

    .aliados__description {
      font-family: vars.$font-family-poppins;
      font-style: italic;
      font-size: 24px;
      line-height: 30px;
      color: #2f3137;
      text-align: center;
      margin: 0;
    }

    .aliados__slider-container {
      position: relative;
      width: 100%;
      display: flex;
      align-items: center;
      gap: 20px;
    }

    .aliados__nav-btn {
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
        display: none; // Ocultar en móviles si no caben, o ajustar diseño
      }
    }

    .aliados__slider-wrapper {
      flex: 1;
      overflow: hidden;
      position: relative;
      mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
      -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
    }

    .aliados__slider {
      display: flex;
      gap: 75px;
      align-items: center;
      width: max-content;
      padding: 10px 0;
    }

    .aliados__item {
      flex-shrink: 0;
      width: 350px;
      height: 167px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .aliados__item-inner {
      background: white;
      padding: 20px;
      border-radius: 15px;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AliadosComponent {
  logos = [
    { name: 'Infonavit', src: 'assets/images/alliances/alliance-logo-infonavit.webp', class: 'logo-infonavit' },
    { name: 'Logo', src: 'assets/images/alliances/alliance-logo.webp', class: 'logo' },
    { name: 'Yayahappy', src: 'assets/images/alliances/alliance-logo-yayahappyshopping.webp', class: 'logo-yaya' },
    { name: 'CFE', src: 'assets/images/alliances/alliance-logo-cfe.webp', class: 'logo-cfe' }
  ];

  private tween!: gsap.core.Tween;
  // 4 items, duration 30s. Width per item = 350 + 75 = 425.
  // 30s / 4 items = 7.5s per item
  private readonly timePerItem = 7.5;

  constructor() {
    afterNextRender(() => {
      const init = () => this.initSlider();
      if ('requestIdleCallback' in window) {
        (window as any).requestIdleCallback(init);
      } else {
        setTimeout(init, 50);
      }
    });
  }

  private initSlider(): void {
    const slider = document.querySelector('.aliados__slider') as HTMLElement;
    if (slider) {
      requestAnimationFrame(() => {
        const width = slider.scrollWidth / 2;
        this.tween = gsap.to(slider, {
          x: -width - 37.5, // width + half gap
          duration: 30,
          ease: 'none',
          repeat: -1
        });
      });
    }
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
