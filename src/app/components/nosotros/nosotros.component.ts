import { NgOptimizedImage } from "@angular/common";
import { Component, ChangeDetectionStrategy, afterNextRender } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-nosotros',
  imports: [RevealDirective, NgOptimizedImage],
  template: `
    <section class="nosotros">
      <div class="nosotros__decoration-wrapper nosotros__decoration-wrapper--top-left">
        <div class="nosotros__decoration nosotros__decoration--top-left"></div>
      </div>
      <div class="nosotros__decoration-wrapper nosotros__decoration-wrapper--bottom-right">
        <div class="nosotros__decoration nosotros__decoration--bottom-right"></div>
      </div>

      <div class="nosotros__container">
        <h2 class="nosotros__title">Nosotros</h2>
        
        <p class="nosotros__description">
          En FINEX trabajamos para personas que todos los días cumplen horarios, turnos y metas. Sabemos el valor del esfuerzo y queremos que ese esfuerzo se refleje en mejores oportunidades para ti y tu familia
        </p>

        <!-- Misión -->
        <div class="nosotros__grid-item">
          <div class="nosotros__image-wrapper" appReveal>
            <img ngSrc="assets/images/about/nosotros-1.webp" alt="Misión" width="500" height="333">
          </div>
          <div class="nosotros__text-content">
            <h3 class="nosotros__subtitle">Misión</h3>
            <p class="nosotros__text">En FINEX ofrecemos soluciones financieras integrales y productos de calidad, facilitando el acceso al crédito mediante procesos simples, confiables y transparentes, enfocados en generar confianza y valor real para nuestros clientes.</p>
          </div>
        </div>

        <!-- Visión -->
        <div class="nosotros__grid-item nosotros__grid-item--reverse">
          <div class="nosotros__image-wrapper" appReveal>
            <img ngSrc="assets/images/about/nosotros-2.webp" alt="Visión" width="500" height="333">
          </div>
          <div class="nosotros__text-content">
            <h3 class="nosotros__subtitle">Visión</h3>
            <p class="nosotros__text">Consolidarnos como una promotora financiera líder y de preferencia en el mercado, reconocida por nuestras alianzas estratégicas, nuestra solidez operativa y nuestro compromiso con el bienestar financiero de cada persona que confía en nosotros.</p>
          </div>
        </div>

        <!-- Objetivos -->
        <div class="nosotros__objetivos">
          <div class="nosotros__objetivos-image" appReveal>
            <img ngSrc="assets/images/about/nosotros-3.webp" alt="Objetivos" fill>
          </div>
          <div class="nosotros__objetivos-content">
            <h3 class="nosotros__subtitle">Objetivos</h3>
            <div class="nosotros__objetivos-grid">
              <div class="objetivo-card">
                <div class="objetivo-card__icon">
                    <img src="assets/images/about/diversificar.svg" alt="Diversificar">
                </div>
                <p>Diversificar y fortalecer nuestra oferta de oportunidades de productos tanto financieros como físicos.</p>
              </div>
              <div class="objetivo-card">
                <div class="objetivo-card__icon">
                    <img src="assets/images/about/alliance.svg" alt="Alianzas">
                </div>
                <p>Desarrollar y consolidar alianzas estratégicas con instituciones y socios clave.</p>
              </div>
              <div class="objetivo-card">
                <div class="objetivo-card__icon">
                    <img src="assets/images/about/accesible.svg" alt="Accesible">
                </div>
                <p>Brindar una experiencia clara, accesible y transparente en cada etapa del proceso.</p>
              </div>
              <div class="objetivo-card">
                <div class="objetivo-card__icon">
                    <img src="assets/images/about/Impulsar.svg" alt="Crecimiento">
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
      position: relative; padding: 60px 0; background: white; overflow: hidden;
    }
    .nosotros__decoration-wrapper {
      position: absolute; pointer-events: none; z-index: 0;
      &--top-left { top: -5%; left: 0; }
      &--bottom-right { bottom: -5%; right: 0; }
    }
    .nosotros__decoration {
      animation: decoration-float 6s ease-in-out infinite; background: transparent none no-repeat center/contain;
      &--top-left { width: 506px; height: 578px; background-image: url('/assets/images/about/nosotros-vector-decoration-top.svg'); }
      &--bottom-right { width: 521px; height: 600px; background-image: url('/assets/images/about/nosotros-vector-decoration-bottom.svg'); background-position: right; }
    }
    .nosotros__container {
      position: relative; max-width: 1920px; margin: 0 auto; z-index: 1; display: flex; flex-direction: column; gap: 40px; @include vars.container-padding(360px);
    }
    .nosotros__title { font: 600 32px/1.2 vars.$font-family-roboto; color: vars.$primary-red; text-align: center; margin: 0; text-shadow: 0 4px 4px rgba(0,0,0,0.25); }
    .nosotros__description { font: italic 300 18px/1.4 vars.$font-family-poppins; color: vars.$text-dark; text-align: center; margin: 0 auto; max-width: 1000px; }
    .nosotros__grid-item { display: flex; flex-direction: column; gap: 24px; align-items: center; }
    .nosotros__image-wrapper, .nosotros__objetivos-image { width: 100%; border-radius: 20px; overflow: hidden; }
    .nosotros__image-wrapper img, .nosotros__objetivos-image img { width: 100%; height: 100%; object-fit: cover; }
    .nosotros__image-wrapper { height: 250px; }
    .nosotros__text-content { flex: 1; display: flex; flex-direction: column; gap: 12px; text-align: center; }
    .nosotros__subtitle { font: 600 24px vars.$font-family-roboto; color: vars.$text-dark; margin: 0; }
    .nosotros__text { font: 16px/1.6 vars.$font-family-poppins; color: vars.$text-dark; margin: 0; }
    .nosotros__objetivos { display: flex; flex-direction: column; gap: 32px; align-items: center; padding-top: 20px; }
    .nosotros__objetivos-image { height: 400px; }
    .nosotros__objetivos-content { flex: 1; display: flex; flex-direction: column; gap: 24px; width: 100%; }
    .nosotros__objetivos-grid { display: grid; grid-template-columns: 1fr; gap: 20px; }
    .objetivo-card { display: flex; flex-direction: column; align-items: center; gap: 15px; padding: 20px; text-align: center; background: #f9f9f9; border-radius: 15px; }
    .objetivo-card__icon { width: 60px; height: 60px; img { width: 100%; height: 100%; object-fit: contain; } }
    .objetivo-card p { font: 14px/1.5 vars.$font-family-poppins; color: #1f1f1f; margin: 0; }

    @media (max-width: vars.$breakpoint-md) {
      .nosotros__decoration--top-left, .nosotros__decoration--bottom-right { width: 280px; height: 320px; }
      .nosotros__decoration--bottom-right { height: 330px; }
    }

    @media (min-width: vars.$breakpoint-md) {
      .nosotros { padding: 128px 0; }
      .nosotros__container { gap: 64px; }
      .nosotros__title { font-size: 48px; }
      .nosotros__description { font-size: 24px; }
      .nosotros__image-wrapper { height: 333px; border-radius: 27px; }
      .nosotros__subtitle { font-size: 32px; }
      .nosotros__text { font-size: 18px; text-align: justify; }
      .nosotros__objetivos-grid { grid-template-columns: 1fr 1fr; }
      .objetivo-card { padding: 36px 0 13.5px; background: transparent; }
      .objetivo-card__icon { width: 90px; height: 90px; }
      .objetivo-card p { font-size: 18px; }
    }

    @media (min-width: vars.$breakpoint-lg) {
      .nosotros__title, .nosotros__text-content { text-align: left; }
      .nosotros__description { text-align: left; margin: 0; }
      .nosotros__grid-item { flex-direction: row; gap: 64px; }
      .nosotros__grid-item--reverse { flex-direction: row-reverse; }
      .nosotros__image-wrapper { flex: 0 0 45%; }
      .nosotros__objetivos { flex-direction: row; align-items: flex-start; gap: 64px; }
      .nosotros__objetivos-image { flex: 0 0 40%; height: 611px; }
    }

    @media (min-width: vars.$breakpoint-tv) {
      .nosotros__grid-item { gap: 128px; }
      .nosotros__image-wrapper, .nosotros__objetivos-image { flex: 0 0 500px; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NosotrosComponent {
  constructor() {
    afterNextRender(() => {
      const init = () => this.initIconStagger();
      if ('requestIdleCallback' in window) {
        (window as any).requestIdleCallback(init);
      } else {
        setTimeout(init, 50);
      }
    });
  }

  private initIconStagger(): void {
    gsap.from('.nosotros__decoration-wrapper--top-left', {
      scrollTrigger: {
        trigger: '.nosotros__decoration-wrapper--top-left',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      x: -150,
      opacity: 0,
      duration: 1.5,
      ease: 'power3.out'
    });

    gsap.from('.nosotros__decoration-wrapper--bottom-right', {
      scrollTrigger: {
        trigger: '.nosotros__decoration-wrapper--bottom-right',
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      },
      x: 150,
      opacity: 0,
      duration: 1.5,
      ease: 'power3.out'
    });

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
