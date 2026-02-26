import { Component, ChangeDetectionStrategy, signal, afterNextRender } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [],
  template: `
    <section class="hero" id="hero">
      <div class="hero__container">
        <div class="hero__content">
          <div class="hero__headings-container">
            <div class="hero__title-wrapper" [class.hero__title-wrapper--active]="activeTitle() === 0">
              <h1 class="hero__title">
                Oportunidades inteligentes para mejorar tu hogar: crédito, financiamiento y productos accesibles
              </h1>
            </div>
            <div class="hero__title-wrapper" [class.hero__title-wrapper--active]="activeTitle() === 1">
              <h1 class="hero__title">
                Aprovecha mejor tus oportunidades: analizamos créditos y opciones para mejorar tu casa y calidad de vida
              </h1>
            </div>
          </div>
          
          <div class="hero__description">
            <p>
              En <span class="hero__highlight">FINEX promotores</span> investigamos y evaluamos distintas oportunidades: financiamientos, esquemas de pago y opciones accesibles para vivienda, remodelación, electrodomésticos, refacciones, tecnología y equipamiento del hogar.
            </p>
          </div>

          <ul class="hero__list">
            <li>Promoción inteligente de créditos y financiamientos</li>
            <li>Evaluación de oportunidades para adquirir productos del hogar</li>
            <li>Investigación previa de condiciones y confiabilidad</li>
            <li>Comparación estratégica de alternativas</li>
            <li>Acompañamiento claro durante todo el proceso</li>
          </ul>

          <div class="hero__actions">
            <button class="hero__button" (click)="scrollToContacto()">Únete a la Familia FINEX</button>
            <button class="hero__button" (click)="scrollToContacto()">Solicita Información</button>
          </div>
        </div>

        <div class="hero__carousel">
          <div class="hero__image-wrapper">
             @for (img of images; track img.original; let i = $index) {
                <img [src]="img.original"
                     [srcset]="img.srcset"
                     [class.hero__image--active]="activeImage() === i"
                     class="hero__image" 
                     alt="Financia tu hogar" 
                     [attr.loading]="i === 0 ? 'eager' : 'lazy'"
                     [attr.fetchpriority]="i === 0 ? 'high' : 'auto'"
                     decoding="async"
                     sizes="(max-width: 561px) 450px, (max-width: 1024px) 800px, 50vw">
             }
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    @use '../../../styles/variables' as vars;

    .hero {
      padding: 140px 0 60px;
      min-height: 100vh;
      background: transparent;
      display: flex;
      align-items: center;
      overflow: hidden;

      @media (min-width: vars.$breakpoint-md) {
        padding: 160px 0 60px;
      }

      @media (min-width: vars.$breakpoint-lg) {
        padding: 180px 0 60px;
      }

      @media (min-width: 1350px) {
        padding: 15.8rem 0 60px;
      }

      @media (min-width: vars.$breakpoint-tv) {
        padding: 240px 0 80px;
      }
    }

    .hero__container {
      max-width: 1920px;
      width: 100%;
      margin: 0 auto;
      display: flex;
      flex-direction: column-reverse;
      gap: 40px;
      @include vars.container-padding(360px);

      @media (min-width: vars.$breakpoint-lg) {
        flex-direction: row;
        gap: 64px;
        align-items: flex-start;
      }
    }

    .hero__content {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 20px;
      max-width: 100%;

      @media (min-width: vars.$breakpoint-lg) {
        gap: 24px;
        flex: 0 0 50%;
        max-width: 585px;
      }
    }

    .hero__headings-container {
      display: grid;
      width: 100%;
    }

    .hero__title-wrapper {
      grid-area: 1 / 1;
      opacity: 0;
      transform: translateY(20px);
      transition: all 0.8s ease;
      pointer-events: none;

      &--active {
        opacity: 1;
        transform: translateY(0);
        pointer-events: auto;
      }
    }

    .hero__title {
      margin: 0;
      font-family: vars.$font-family-roboto;
      font-weight: 900;
      font-size: 28px;
      line-height: 1.2;
      color: vars.$text-dark;
      text-align: left;

      @media (min-width: vars.$breakpoint-md) {
        font-size: 38px;
      }

      @media (min-width: vars.$breakpoint-lg) {
        font-size: 44px;
      }

      @media (min-width: vars.$breakpoint-tv) {
        font-size: 56px;
      }
    }

    .hero__description {
      font-family: vars.$font-family-poppins;
      font-size: 16px;
      line-height: 1.5;
      color: vars.$text-dark;
      text-align: left;
      
      @media (min-width: vars.$breakpoint-md) {
        font-size: 18px;
        line-height: 27.6px;
      }

      @media (min-width: vars.$breakpoint-lg) {
        font-size: 20px;
        line-height: 1.6;
      }
    }

    .hero__highlight {
      font-weight: 700;
      font-style: italic;
    }

    .hero__list {
      list-style-type: disc;
      padding-left: 20px;
      margin: 0;
      font-family: vars.$font-family-poppins;
      font-size: 16px;
      color: vars.$text-dark;
      text-align: left;

      @media (min-width: vars.$breakpoint-md) {
        font-size: 18px;
        padding-left: 27px;
      }
    }

    .hero__actions {
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      gap: 16px;
      justify-content: flex-start;

      @media (min-width: vars.$breakpoint-sm) {
        flex-direction: row;
      }
    }

    .hero__button {
      background: vars.$primary-red;
      color: white;
      font-family: vars.$font-family-poppins;
      font-weight: 600;
      font-size: 18px;
      padding: 12px 24px;
      border: none;
      border-radius: 12px;
      box-shadow: 4px 4px 8px 0px rgba(0,0,0,0.25);
      cursor: pointer;
      width: 100%;

      @media (min-width: vars.$breakpoint-md) {
        width: auto;
        font-size: 20px;
        padding: 16px 32px;
        border-radius: 15px;
      }
    }

    .hero__carousel {
      flex: 1;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      @media (min-width: vars.$breakpoint-lg) {
        flex: 0 0 45%;
      }
    }

    .hero__image-wrapper {
      position: relative;
      width: 100%;
      max-width: 450px;
      margin: 0 auto;
      aspect-ratio: 4 / 5;
      border-radius: 24px;
      overflow: hidden;

      @media (min-width: vars.$breakpoint-md) {
        max-width: 600px;
        aspect-ratio: 1 / 1;
      }

      @media (min-width: vars.$breakpoint-lg) {
        max-width: 100%;
        aspect-ratio: 1.1 / 1;
      }

      @media (min-width: vars.$breakpoint-tv) {
        aspect-ratio: 4 / 3.5;
        max-width: 800px;
      }
    }

    .hero__image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top center;
      border-radius: 24px;
      opacity: 0;
      transition: opacity 1s ease-in-out;
      box-shadow: 0 10px 40px rgba(0,0,0,0.08);

      &--active {
        opacity: 1;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {
  activeTitle = signal(0);
  activeImage = signal(0);

  images = Array.from({ length: 8 }, (_, i) => ({
    original: `assets/images/hero/imagen-hero-${i + 1}.webp`,
    srcset: `assets/images/hero/imagen-hero-${i + 1}-450w.webp 450w, assets/images/hero/imagen-hero-${i + 1}-800w.webp 800w`
  }));

  constructor(private router: Router) {
    afterNextRender(() => {
      const init = () => this.startIntervals();
      if ('requestIdleCallback' in window) {
        (window as any).requestIdleCallback(init);
      } else {
        setTimeout(init, 50);
      }
    });
  }

  private startIntervals(): void {
    setInterval(() => {
      this.activeTitle.update(v => (v + 1) % 2);
    }, 5000);

    setInterval(() => {
      this.activeImage.update(v => (v + 1) % this.images.length);
    }, 4000);
  }

  scrollToContacto(): void {
    if (this.router.url === '/' || this.router.url.startsWith('/#')) {
      const target = document.getElementById('contacto');
      if (!target) return;
      const header = document.querySelector('.header') as HTMLElement;
      const headerHeight = header ? header.offsetHeight : 100;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    } else {
      this.router.navigate(['/'], { fragment: 'contacto' });
    }
  }
}
