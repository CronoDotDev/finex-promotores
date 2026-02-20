import { Component, ChangeDetectionStrategy, afterNextRender } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-landing-page',
  imports: [
    CommonModule,
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

        <div class="reveal-section">
          <app-nosotros></app-nosotros>
        </div>

        <div class="reveal-section">
          <app-aliados></app-aliados>
        </div>

        <div class="reveal-section">
          <app-services></app-services>
        </div>

        <div class="reveal-section">
          <app-beneficios></app-beneficios>
        </div>

        <div class="reveal-section">
          <app-cta></app-cta>
        </div>

        <div class="reveal-section">
          <app-testimonials></app-testimonials>
        </div>

        <div class="reveal-section">
          <app-contacto></app-contacto>
        </div>
      </main>

      <app-footer></app-footer>
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
    const revealSections = document.querySelectorAll('.reveal-section');

    revealSections.forEach(section => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top 85%',
        onEnter: () => section.classList.add('reveal-section--visible'),
        once: true
      });
    });
  }
}
