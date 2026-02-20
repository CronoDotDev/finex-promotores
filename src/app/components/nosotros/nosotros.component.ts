import { Component, ChangeDetectionStrategy, afterNextRender } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-nosotros',
  imports: [RevealDirective],
  template: `
    <section class="nosotros" id="nosotros">
      <div class="nosotros__decoration nosotros__decoration--top-left"></div>
      <div class="nosotros__decoration nosotros__decoration--bottom-right"></div>

      <div class="nosotros__container">
        <h2 class="nosotros__title">Nosotros</h2>
        
        <p class="nosotros__description">
          En FINEX trabajamos para personas que todos los días cumplen horarios, turnos y metas. Sabemos el valor del esfuerzo y queremos que ese esfuerzo se refleje en mejores oportunidades para ti y tu familia
        </p>

        <!-- Misión -->
        <div class="nosotros__grid-item">
          <div class="nosotros__image-wrapper" appReveal>
            <img src="assets/images/about/nosotros-1.webp" alt="Misión">
          </div>
          <div class="nosotros__text-content">
            <h3 class="nosotros__subtitle">Misión</h3>
            <p class="nosotros__text">En FINEX ofrecemos soluciones financieras integrales y productos de calidad, facilitando el acceso al crédito mediante procesos simples, confiables y transparentes, enfocados en generar confianza y valor real para nuestros clientes.</p>
          </div>
        </div>

        <!-- Visión -->
        <div class="nosotros__grid-item nosotros__grid-item--reverse">
          <div class="nosotros__image-wrapper" appReveal>
            <img src="assets/images/about/nosotros-2.webp" alt="Visión">
          </div>
          <div class="nosotros__text-content">
            <h3 class="nosotros__subtitle">Visión</h3>
            <p class="nosotros__text">Consolidarnos como una promotora financiera líder y de preferencia en el mercado, reconocida por nuestras alianzas estratégicas, nuestra solidez operativa y nuestro compromiso con el bienestar financiero de cada persona que confía en nosotros.</p>
          </div>
        </div>

        <!-- Objetivos -->
        <div class="nosotros__objetivos">
          <div class="nosotros__objetivos-image" appReveal>
            <img src="assets/images/about/nosotros-3.webp" alt="Objetivos">
          </div>
          <div class="nosotros__objetivos-content">
            <h3 class="nosotros__subtitle">Objetivos</h3>
            <div class="nosotros__objetivos-grid">
              <div class="objetivo-card">
                <div class="objetivo-card__icon">
                    <img src="https://www.figma.com/api/mcp/asset/ade6a594-7433-4c70-add7-b4aea75e2c83" alt="Diversificar">
                </div>
                <p>Diversificar y fortalecer nuestra oferta de oportunidades de productos tanto financieros como físicos.</p>
              </div>
              <div class="objetivo-card">
                <div class="objetivo-card__icon">
                    <img src="https://www.figma.com/api/mcp/asset/5bd36b8e-ac5b-4e12-bcc1-741735742e0a" alt="Alianzas">
                </div>
                <p>Desarrollar y consolidar alianzas estratégicas con instituciones y socios clave.</p>
              </div>
              <div class="objetivo-card">
                <div class="objetivo-card__icon">
                    <img src="https://www.figma.com/api/mcp/asset/e03a7715-efee-4df7-8f6d-5672a37b5bca" alt="Accesible">
                </div>
                <p>Brindar una experiencia clara, accesible y transparente en cada etapa del proceso.</p>
              </div>
              <div class="objetivo-card">
                <div class="objetivo-card__icon">
                    <img src="https://www.figma.com/api/mcp/asset/1ed8db73-1e21-4946-aa41-2463bffc22d8" alt="Crecimiento">
                </div>
                <p>Impulsar el crecimiento sostenido de la empresa mediante la expansión y la mejora continua.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    @use '../../../styles/variables' as vars;

    .nosotros {
      position: relative;
      padding: 60px 0;
      background: white;
      overflow: hidden;

      @media (min-width: vars.$breakpoint-md) {
        padding: 128px 0;
      }
    }

    .nosotros__decoration {
      position: absolute;
      pointer-events: none;
      z-index: 0;
      animation: decoration-float 6s ease-in-out infinite;

      &--top-left {
        top: -5%;
        left: 0;
        width: 506px;
        height: 578px;
        background-image: url('/assets/images/about/nosotros-vector-decoration-top.svg');
        background-size: contain;
        background-repeat: no-repeat;

        @media (max-width: vars.$breakpoint-md) {
          width: 280px;
          height: 320px;
        }
      }

      &--bottom-right {
        bottom: -5%;
        right: 0;
        width: 521px;
        height: 600px;
        background-image: url('/assets/images/about/nosotros-vector-decoration-bottom.svg');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: right;

        @media (max-width: vars.$breakpoint-md) {
          width: 280px;
          height: 330px;
        }
      }
    }

    .nosotros__container {
      position: relative;
      max-width: 1920px;
      margin: 0 auto;
      z-index: 1;
      display: flex;
      flex-direction: column;
      gap: 40px;
      @include vars.container-padding(360px);

      @media (min-width: vars.$breakpoint-md) {
        gap: 64px;
      }
    }

    .nosotros__title {
      font-family: vars.$font-family-roboto;
      font-weight: 600;
      font-size: 32px;
      line-height: 1.2;
      color: vars.$primary-red;
      text-align: center;
      margin: 0;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

      @media (min-width: vars.$breakpoint-md) {
        font-size: 48px;
      }

      @media (min-width: vars.$breakpoint-lg) {
        text-align: left;
      }
    }

    .nosotros__description {
      font-family: vars.$font-family-poppins;
      font-style: italic;
      font-weight: 300;
      font-size: 18px;
      line-height: 1.4;
      color: vars.$text-dark;
      text-align: center;
      margin: 0 auto;
      max-width: 1000px;

      @media (min-width: vars.$breakpoint-md) {
        font-size: 24px;
      }

      @media (min-width: vars.$breakpoint-lg) {
        text-align: left;
        margin: 0;
      }
    }

    .nosotros__grid-item {
      display: flex;
      flex-direction: column;
      gap: 24px;
      align-items: center;

      @media (min-width: vars.$breakpoint-lg) {
        flex-direction: row;
        gap: 64px;
      }

      @media (min-width: vars.$breakpoint-tv) {
        gap: 128px;
      }

      &--reverse {
        @media (min-width: vars.$breakpoint-lg) {
          flex-direction: row-reverse;
        }
      }
    }

    .nosotros__image-wrapper {
      width: 100%;
      height: 250px;
      border-radius: 20px;
      overflow: hidden;

      @media (min-width: vars.$breakpoint-md) {
        height: 333px;
        border-radius: 27px;
      }

      @media (min-width: vars.$breakpoint-lg) {
        flex: 0 0 45%;
      }

      @media (min-width: vars.$breakpoint-tv) {
        flex: 0 0 500px;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .nosotros__text-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 12px;
      text-align: center;

      @media (min-width: vars.$breakpoint-lg) {
        text-align: left;
      }
    }

    .nosotros__subtitle {
      font-family: vars.$font-family-roboto;
      font-weight: 600;
      font-size: 24px;
      color: vars.$text-dark;
      margin: 0;

      @media (min-width: vars.$breakpoint-md) {
        font-size: 32px;
      }
    }

    .nosotros__text {
      font-family: vars.$font-family-poppins;
      font-size: 16px;
      line-height: 1.6;
      color: vars.$text-dark;
      margin: 0;

      @media (min-width: vars.$breakpoint-md) {
        font-size: 18px;
        text-align: justify;
      }
    }

    .nosotros__objetivos {
      display: flex;
      flex-direction: column;
      gap: 32px;
      align-items: center;
      padding-top: 20px;

      @media (min-width: vars.$breakpoint-lg) {
        flex-direction: row;
        align-items: flex-start;
        gap: 64px;
      }
    }

    .nosotros__objetivos-image {
      width: 100%;
      height: 400px;
      overflow: hidden;
      border-radius: 20px;

      @media (min-width: vars.$breakpoint-lg) {
        flex: 0 0 40%;
        height: 611px;
      }

      @media (min-width: vars.$breakpoint-tv) {
        flex: 0 0 500px;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .nosotros__objetivos-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 24px;
      width: 100%;
    }

    .nosotros__objetivos-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 20px;

      @media (min-width: vars.$breakpoint-md) {
        grid-template-columns: 1fr 1fr;
      }
    }

    .objetivo-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;
      padding: 20px;
      text-align: center;
      background: #f9f9f9;
      border-radius: 15px;

      @media (min-width: vars.$breakpoint-md) {
        padding: 36px 0 13.5px;
        background: transparent;
      }

      .objetivo-card__icon {
        width: 60px;
        height: 60px;
        
        @media (min-width: vars.$breakpoint-md) {
          width: 90px;
          height: 90px;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }

      p {
        font-family: vars.$font-family-poppins;
        font-size: 14px;
        line-height: 1.5;
        color: #1f1f1f;
        margin: 0;

        @media (min-width: vars.$breakpoint-md) {
          font-size: 18px;
        }
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NosotrosComponent {
  constructor() {
    afterNextRender(() => {
      this.initIconStagger();
    });
  }

  private initIconStagger(): void {
    const icons = document.querySelectorAll('.objetivo-card__icon');
    if (!icons.length) return;

    gsap.from(icons, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.nosotros__objetivos-grid',
        start: 'top 85%',
        end: 'top 20%',
        toggleActions: 'restart none none reset'
      }
    });
  }
}
