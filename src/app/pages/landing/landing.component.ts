import { Component, ChangeDetectionStrategy, afterNextRender } from '@angular/core';

import { HeaderComponent } from '../../components/header/header.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { NosotrosComponent } from '../../components/nosotros/nosotros.component';
import { AliadosComponent } from '../../components/aliados/aliados.component';
import { ServicesComponent } from '../../components/services/services.component';
import { BeneficiosComponent } from '../../components/beneficios/beneficios.component';
import { CtaComponent } from '../../components/cta/cta.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { ContactoComponent } from '../../components/contacto/contacto.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-landing-page',
  imports: [
    HeaderComponent,
    HeroComponent,
    NosotrosComponent,
    AliadosComponent,
    ServicesComponent,
    BeneficiosComponent,
    CtaComponent,
    TestimonialsComponent,
    ContactoComponent,
    FooterComponent
  ],
  template: `
    <div class="landing-page">
      <app-header></app-header>

      <main>
        <app-hero></app-hero>

        <div class="reveal-section" id="nosotros">
          @defer (on viewport) {
            <app-nosotros></app-nosotros>
          } @placeholder {
            <div style="min-height: 400px"></div>
          }
        </div>

        <div class="reveal-section" id="aliados">
          @defer (on viewport) {
            <app-aliados></app-aliados>
          } @placeholder {
            <div style="min-height: 400px"></div>
          }
        </div>

        <div class="reveal-section" id="servicios">
          @defer (on viewport) {
            <app-services></app-services>
          } @placeholder {
            <div style="min-height: 400px"></div>
          }
        </div>

        <div class="reveal-section" id="beneficios">
          @defer (on viewport) {
            <app-beneficios></app-beneficios>
          } @placeholder {
            <div style="min-height: 400px"></div>
          }
        </div>

        <div class="reveal-section">
          @defer (on viewport) {
            <app-cta></app-cta>
          } @placeholder {
            <div style="min-height: 300px"></div>
          }
        </div>

        <div class="reveal-section" id="testimonios">
          @defer (on viewport) {
            <app-testimonials></app-testimonials>
          } @placeholder {
            <div style="min-height: 400px"></div>
          }
        </div>

        <div class="reveal-section" id="contacto">
          @defer (on viewport) {
            <app-contacto></app-contacto>
          } @placeholder {
            <div style="min-height: 600px"></div>
          }
        </div>
      </main>

      @defer (on viewport) {
        <app-footer></app-footer>
      } @placeholder {
        <div style="min-height: 300px"></div>
      }
    </div>
  `,
  styles: [`
    .landing-page {
      overflow-x: hidden;
    }

    .reveal-section {
      opacity: 0;
      transform: translateY(50px);
      transition: all 0.8s ease-out;

      &--visible {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPageComponent {
  constructor() {
    afterNextRender(() => {
      this.initScrollAnimations();
    });
  }

  private initScrollAnimations(): void {
    requestAnimationFrame(() => {
      const revealSections = document.querySelectorAll('.reveal-section');

      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-section--visible');
            obs.unobserve(entry.target);
          }
        });
      }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
      });

      revealSections.forEach(section => {
        observer.observe(section);
      });
    });
  }
}
