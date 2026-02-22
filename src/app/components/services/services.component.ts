import { NgOptimizedImage } from "@angular/common";
import { Component, ChangeDetectionStrategy, afterNextRender } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-services',
  imports: [NgOptimizedImage],
  template: `
    <section class="services" id="servicios">
      <div class="services__decoration-wrapper services__decoration-wrapper--left">
        <div class="services__decoration services__decoration--left"></div>
      </div>
      <div class="services__container">
        <div class="services__header">
          <h2 class="services__title">Nuestros Servicios</h2>
          <p class="services__description">Soluciones pensadas para trabajadores y sus familias</p>
        </div>

        <div class="services__list-container">
          <div class="services__list">
            @for (service of services; track service.title) {
              <div class="service-item">
                <div class="service-item__icon-wrapper">
                  <img [ngSrc]="service.icon" [alt]="service.title" class="service-item__icon-img" width="64" height="64">
                </div>
                <div class="service-item__content">
                  <h3 class="service-item__title">{{ service.title }}</h3>
                  <div class="service-item__description" [innerHTML]="service.description"></div>
                </div>
              </div>
            }
            <div class="services__cta">
                <button class="services__button">Únete a la Familia FINEX</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    @use '../../../styles/variables' as vars;

    .services {
      padding: 60px 0;
      background: #fafafa;
      position: relative;
      overflow: hidden;

      @media (min-width: vars.$breakpoint-md) {
        padding: 120px 0;
      }
    }

    .services__decoration-wrapper {
      position: absolute;
      pointer-events: none;
      z-index: 0;

      &--left {
        top: 0;
        left: 0;
      }
    }

    .services__decoration {
      animation: decoration-float 7s ease-in-out infinite;

      &--left {
        width: 341px;
        height: 1334px;
        background-image: url('/assets/images/services/services-vector-decoration-left.svg');
        background-size: contain;
        background-repeat: no-repeat;

        @media (max-width: vars.$breakpoint-md) {
          width: 200px;
          height: 780px;
        }
      }
    }

    .services__container {
      max-width: 1920px;
      margin: 0 auto;
      position: relative;
      z-index: 1;
      @include vars.container-padding(360px);
    }

    .services__header {
      margin-bottom: 24px;
      text-align: center;

      @media (min-width: vars.$breakpoint-md) {
        margin-bottom: 32px;
      }

      @media (min-width: vars.$breakpoint-lg) {
        text-align: left;
      }
    }

    .services__title {
      font-family: vars.$font-family-roboto;
      font-weight: 600;
      font-size: 32px;
      line-height: 1.2;
      color: vars.$primary-red;
      margin: 0 0 16px;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

      @media (min-width: vars.$breakpoint-md) {
        font-size: 48px;
        margin-bottom: 32px;
      }
    }

    .services__description {
      font-family: vars.$font-family-poppins;
      font-style: italic;
      font-weight: 300;
      font-size: 18px;
      line-height: 1.3;
      color: #1a1a1a;
      margin: 0;

      @media (min-width: vars.$breakpoint-md) {
        font-size: 24px;
        line-height: 30px;
      }
    }

    .services__list-container {
        display: flex;
        justify-content: center;
        width: 100%;
    }

    .services__list {
      display: flex;
      flex-direction: column;
      gap: 24px;
      width: 100%;
      max-width: 1200px;
      padding: 20px;

      @media (min-width: vars.$breakpoint-md) {
        gap: 32px;
        padding: 48px;
      }
    }

    .service-item {
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 0;
      background: transparent;
      border-radius: 12px;
      text-align: center;

      @media (min-width: vars.$breakpoint-md) {
        flex-direction: row;
        gap: 32px;
        text-align: left;
      }
    }

    .service-item__icon-wrapper {
      flex-shrink: 0;
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;

      @media (min-width: vars.$breakpoint-md) {
        width: 64px;
        height: 64px;
        margin: 0;
        padding: 0 32px;
        box-sizing: content-box;
      }
    }

    .service-item__icon-img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .service-item__content {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 8px;

      @media (min-width: vars.$breakpoint-md) {
        gap: 12.5px;
      }
    }

    .service-item__title {
      font-family: vars.$font-family-roboto;
      font-weight: 600;
      font-size: 22px;
      line-height: 1.2;
      color: #1a1a1a;
      margin: 0;

      @media (min-width: vars.$breakpoint-md) {
        font-size: 32px;
      }
    }

    .service-item__description {
      font-family: vars.$font-family-poppins;
      font-size: 15px;
      line-height: 1.5;
      color: #1a1a1a;
      margin: 0;

      @media (min-width: vars.$breakpoint-md) {
        font-size: 18px;
        line-height: 27.6px;
      }

      ::ng-deep ul {
        list-style: disc;
        padding-left: 20px;
        margin: 10px 0;

        @media (min-width: vars.$breakpoint-md) {
            padding-left: 27px;
        }
      }
    }

    .services__cta {
      display: flex;
      justify-content: center;
      padding-top: 24px;

      @media (min-width: vars.$breakpoint-md) {
        justify-content: flex-start;
        padding-left: 96px;
        padding-top: 32px;
      }
    }

    .services__button {
      background: vars.$primary-red;
      color: white;
      font-family: vars.$font-family-poppins;
      font-weight: 600;
      font-size: 18px;
      padding: 12px 24px;
      border: none;
      border-radius: 12px;
      cursor: pointer;
      box-shadow: 4px 4px 8px 0px rgba(0,0,0,0.25);
      width: 100%;

      @media (min-width: vars.$breakpoint-md) {
        width: auto;
        font-size: 20px;
        padding: 16px 32px;
        border-radius: 15px;
      }

      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-3px);
        background: color-mix(in srgb, vars.$primary-red, black 5%);
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServicesComponent {
  services: ServiceItem[] = [
    {
      icon: 'https://www.figma.com/api/mcp/asset/cde3ed88-d157-4cb5-8d67-3ad2eb72eb86',
      title: 'Análisis y promoción de créditos',
      description: '<p>Evaluamos distintas alternativas de financiamiento como:</p><ul><li>Créditos para vivienda</li><li>Créditos personales</li><li>Opciones complementarias</li></ul><p>Buscamos que el crédito sea una herramienta de mejora, no una carga.</p>'
    },
    {
      icon: 'https://www.figma.com/api/mcp/asset/52a3b625-7a9e-4542-9876-cbd4287658ff',
      title: 'Oportunidades para adquirir productos del hogar',
      description: '<p>Te orientamos en alternativas para adquirir:</p><ul><li>Electrodomésticos</li><li>Equipamiento del hogar</li><li>Tecnología y electrónica</li><li>Refacciones y materiales</li></ul><p>Revisamos condiciones y confiabilidad antes de recomendarlas.</p>'
    },
    {
      icon: 'https://www.figma.com/api/mcp/asset/3e1109fb-ac9c-4857-aa01-0c438c78d01c',
      title: 'Intermediación financiera',
      description: '<p>Actuamos como intermediarios entre tú y las instituciones financieras, facilitando la comunicación, los trámites y la correcta integración de tu expediente.</p>'
    },
    {
      icon: 'https://www.figma.com/api/mcp/asset/f1f0c3df-2731-476f-b30f-1f89a2592b01',
      title: 'Capacitación y orientación financiera:',
      description: '<p>Ofrecemos capacitación y acompañamiento en temas financieros para que comprendas mejor tus opciones y tomes decisiones con mayor claridad y seguridad.</p>'
    }
  ];

  constructor() {
    afterNextRender(() => {
      this.initStaggerAnimation();
    });
  }

  private initStaggerAnimation(): void {
    gsap.from('.services__decoration-wrapper--left', {
      scrollTrigger: {
        trigger: '.services__decoration-wrapper--left',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      x: -150,
      opacity: 0,
      duration: 1.5,
      ease: 'power3.out'
    });

    const icons = document.querySelectorAll('.service-item__icon-wrapper');
    if (!icons.length) return;

    gsap.from(icons, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.services__list',
        start: 'top 80%',
        end: 'top 20%',
        toggleActions: 'restart none none reset'
      }
    });
  }
}
