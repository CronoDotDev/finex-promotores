import { NgOptimizedImage } from "@angular/common";
import { Component, ChangeDetectionStrategy, afterNextRender } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-beneficios',
  imports: [RevealDirective, NgOptimizedImage],
  template: `
    <section class="beneficios" id="beneficios">
      <div class="beneficios__background" [style.background-image]="'url(' + backgroundImage + ')'"></div>
      <div class="beneficios__overlay"></div>
      
      <div class="beneficios__container">
        <div class="beneficios__content">
          <div class="beneficios__header">
            <h2 class="beneficios__title">¿Por qué elegir FINEX?</h2>
            <p class="beneficios__subtitle">Más que una promotora financiera, un aliado en tu crecimiento</p>
          </div>

          <div class="beneficios__cards">
            @for (benefit of benefits; track benefit.title) {
              <div class="benefit-card">
                <div class="benefit-card__pill">
                  <span>{{ benefit.title }}</span>
                </div>
                <p class="benefit-card__description">{{ benefit.description }}</p>
              </div>
            }
          </div>
        </div>

        <div class="beneficios__image" appReveal>
          <img ngSrc="assets/images/benefits/porque-elegir.webp" alt="¿Por qué elegir FINEX?" fill>
        </div>
      </div>
    </section>
  `,
  styles: [`
    @use '../../../styles/variables' as vars;

    .beneficios {
      padding: 60px 0;
      position: relative;
      overflow: hidden;
      background: #ffffff;

      @media (min-width: vars.$breakpoint-md) {
        padding: 128px 0;
      }
    }

    .beneficios__background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      z-index: -2;
    }

    .beneficios__overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.9);
      z-index: -1;
    }

    .beneficios__container {
      max-width: 1920px;
      margin: 0 auto;
      padding: 0 20px;
      display: flex;
      flex-direction: column;
      gap: 40px;
      align-items: center;

      @media (min-width: vars.$breakpoint-lg) {
        flex-direction: row;
        justify-content: space-between;
        align-items: stretch;
        @include vars.container-padding(180px);
      }
    }

    .beneficios__content {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 32px;
      width: 100%;

      @media (min-width: vars.$breakpoint-tv) {
        flex: 0 0 961px;
        gap: 42px;
      }
    }

    .beneficios__header {
        display: flex;
        flex-direction: column;
        gap: 16px;
        text-align: center;

        @media (min-width: vars.$breakpoint-lg) {
            text-align: left;
            gap: 32px;
            padding: 0 32px;
        }
    }

    .beneficios__title {
      font-family: vars.$font-family-roboto;
      font-weight: 600;
      font-size: 32px;
      line-height: 1.2;
      color: vars.$primary-red;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      margin: 0;

      @media (min-width: vars.$breakpoint-md) {
        font-size: 48px;
      }
    }

    .beneficios__subtitle {
      font-family: vars.$font-family-poppins;
      font-style: italic;
      font-weight: 300;
      font-size: 18px;
      line-height: 1.3;
      color: #2f3137;
      margin: 0;

      @media (min-width: vars.$breakpoint-md) {
        font-size: 24px;
      }
    }

    .beneficios__cards {
      display: flex;
      flex-direction: column;
      gap: 24px;
      padding: 20px;

      @media (min-width: vars.$breakpoint-md) {
        gap: 32px;
        padding: 30px 48px;
      }
    }

    .benefit-card {
      display: flex;
      flex-direction: column;
      gap: 16px;
      align-items: center;
      text-align: center;

      @media (min-width: vars.$breakpoint-md) {
        flex-direction: row;
        gap: 32px;
        text-align: left;
      }
    }

    .benefit-card__pill {
      flex-shrink: 0;
      background: vars.$primary-red;
      color: white;
      font-family: vars.$font-family-poppins;
      font-weight: 700;
      font-size: 18px;
      padding: 10px 20px;
      border-radius: 50px;
      box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.15);
      width: 100%;
      max-width: 205px;
      min-height: 45px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;

      @media (min-width: vars.$breakpoint-md) {
        font-size: 18px;
        padding: 13px 27px;
        border-radius: 0 0 50px 0;
        border-top-left-radius: 50px;
        box-shadow: 16px 16px 16px rgba(0, 0, 0, 0.25);
        min-height: 52px;
      }
    }

    .benefit-card__description {
      font-family: vars.$font-family-poppins;
      font-size: 15px;
      line-height: 1.5;
      color: black;
      margin: 0;
      flex: 1;

      @media (min-width: vars.$breakpoint-md) {
        font-size: 18px;
        line-height: 27.6px;
      }
    }

    .beneficios__image {
      width: 100%;
      height: 300px;
      max-width: 575px;

      @media (min-width: vars.$breakpoint-md) {
        height: 500px;
      }

      @media (min-width: vars.$breakpoint-lg) {
        flex: 0 0 40%;
        height: auto;
        max-width: none;
        align-self: stretch;
        padding: 0 20px 20px 0;
      }

      @media (min-width: vars.$breakpoint-tv) {
        flex: 0 0 575px;
      }

      img {
        width: 100%;
        height: 100%;
        border-radius: 40px;
        object-fit: cover;
        box-shadow: 16px 16px 16px rgba(0, 0, 0, 0.25);

        @media (min-width: vars.$breakpoint-md) {
            border-radius: 0 0 0 200px;
            border-top-right-radius: 200px;
        }
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BeneficiosComponent {
  backgroundImage = 'assets/images/benefits/porque-elegir-background.webp';

  benefits = [
    {
      title: 'Transparencia total',
      description: 'Sabes exactamente qué estás contratando o comprando, cómo es el proceso y qué sigue en cada etapa. Sin letras chiquitas ni sorpresas.'
    },
    {
      title: 'Confianza que se construye con hechos',
      description: 'Cumplimos lo que prometemos y construimos relaciones duraderas basadas en ética, claridad y resultados.'
    },
    {
      title: 'Acompañamiento real',
      description: 'No estás solo. Te guiamos de principio a fin, resolviendo dudas y brindando apoyo constante durante todo tu proceso.'
    },
    {
      title: 'Profesionalismo en cada detalle',
      description: 'Trabajamos con altos estándares de calidad y responsabilidad para ofrecerte un servicio claro, ordenado y confiable.'
    },
    {
      title: 'Alianzas que generan valor',
      description: 'Colaboramos con instituciones y socios estratégicos que fortalecen nuestras gama de productos tanto físicos como de financiamiento.'
    }
  ];

  constructor() {
    afterNextRender(() => {
      this.initAnimations();
    });
  }

  private initAnimations(): void {
    const cards = document.querySelectorAll('.benefit-card');
    cards.forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 90%',
          once: true
        },
        x: -50,
        opacity: 0,
        duration: 0.6,
        delay: i * 0.15,
        ease: 'power2.out'
      });
    });
  }
}
