import { Component, ChangeDetectionStrategy, signal, afterNextRender } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
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
            <button class="hero__button">Únete a la Familia FINEX</button>
          </div>
        </div>

        <div class="hero__carousel">
          <div class="hero__image-wrapper">
             @for (img of images; track img; let i = $index) {
                <img [src]="img" 
                     [class.hero__image--active]="activeImage() === i"
                     class="hero__image" 
                     alt="Financia tu hogar">
             }
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    @use '../../../styles/variables' as vars;

    .hero {
      padding: 120px 0 60px;
      min-height: 100vh;
      background: #ffffff;
      display: flex;
      align-items: center;
      overflow: hidden;

      @media (min-width: vars.$breakpoint-tv) {
        padding: 173px 0 80px;
      }
    }

    .hero__container {
      max-width: 1920px;
      width: 100%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 40px;
      @include vars.container-padding(360px);

      @media (min-width: vars.$breakpoint-lg) {
        flex-direction: row;
        gap: 64px;
        align-items: center;
      }
    }

    .hero__content {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 16px;
      max-width: 100%;

      @media (min-width: vars.$breakpoint-lg) {
        flex: 0 0 50%;
        max-width: 585px;
      }
    }

    .hero__headings-container {
      position: relative;
      height: 200px;
      width: 100%;
      overflow: hidden;

      @media (min-width: vars.$breakpoint-md) {
        height: 240px;
      }
    }

    .hero__title-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      opacity: 0;
      transform: translateY(20px);
      transition: all 0.8s ease;

      &--active {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .hero__title {
      margin: 0;
      font-family: vars.$font-family-roboto;
      font-weight: 900;
      font-size: 28px;
      line-height: 1.2;
      color: vars.$text-dark;

      @media (min-width: vars.$breakpoint-md) {
        font-size: 38px;
      }

      @media (min-width: vars.$breakpoint-tv) {
        font-size: 48px;
      }
    }

    .hero__description {
      font-family: vars.$font-family-poppins;
      font-size: 16px;
      line-height: 1.5;
      color: vars.$text-dark;
      
      @media (min-width: vars.$breakpoint-md) {
        font-size: 18px;
        line-height: 27.6px;
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
      height: 300px;

      @media (min-width: vars.$breakpoint-md) {
        height: 450px;
      }

      @media (min-width: vars.$breakpoint-tv) {
        height: 573px;
      }
    }

    .hero__image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: contain;
      opacity: 0;
      transition: opacity 1s ease-in-out;

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

  images = [
    "https://www.figma.com/api/mcp/asset/ea8a8b7d-0d75-4afe-b9a4-7d79b5514dd0",
    "https://www.figma.com/api/mcp/asset/3c19b543-5fd7-42cf-b8cd-9202d17ff6c8",
    "https://www.figma.com/api/mcp/asset/920b65d4-ca5f-4bc4-99ab-4a04bc0989f6",
    "https://www.figma.com/api/mcp/asset/c7a0f978-4d90-4942-afec-3dc00f15c8f4",
    "https://www.figma.com/api/mcp/asset/dc5c2035-f453-4919-9a24-deacfa9f869c",
    "https://www.figma.com/api/mcp/asset/8b7061ec-a96a-4d5f-9548-fd48a73e48ce",
    "https://www.figma.com/api/mcp/asset/dae0ea72-8c88-4950-8c29-a2226bcf0b33",
    "https://www.figma.com/api/mcp/asset/1cc79636-3837-42c0-aa4b-395d9e055bd3"
  ];

  constructor() {
    afterNextRender(() => {
      this.startIntervals();
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
}
