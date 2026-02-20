import { Component, ChangeDetectionStrategy, afterNextRender } from '@angular/core';

import { gsap } from 'gsap';

@Component({
  selector: 'app-aliados',
  imports: [],
  template: `
    <section class="aliados" id="aliados">
      <div class="aliados__container">
        <p class="aliados__description">
          Trabajamos con instituciones y marcas reconocidas para ofrecerte mejores oportunidades
        </p>

        <div class="aliados__slider-wrapper">
          <div class="aliados__slider" #slider>
            @for (logo of logos; track logo.name) {
              <div class="aliados__item">
                  <div class="aliados__item-inner">
                      <img [src]="logo.src" [alt]="logo.name" [class]="logo.class">
                  </div>
              </div>
            }
            <!-- Duplicate for infinite effect -->
            @for (logo of logos; track logo.name) {
              <div class="aliados__item">
                  <div class="aliados__item-inner">
                      <img [src]="logo.src" [alt]="logo.name" [class]="logo.class">
                  </div>
              </div>
            }
          </div>
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
        padding: 0 360px;
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

    .aliados__slider-wrapper {
      width: 100%;
      overflow: hidden;
      position: relative;
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
    { name: 'Infonavit', src: 'assets/images/alliances/alliance-logo-infonavit.png', class: 'logo-infonavit' },
    { name: 'Mejoravit', src: 'assets/images/alliances/alliance-logo-mejoravit.png', class: 'logo-mejoravit' },
    { name: 'Yayahappy', src: 'assets/images/alliances/alliance-logo-yayahappyshopping.png', class: 'logo-yaya' },
    { name: 'CFE', src: 'assets/images/alliances/alliance-logo-cfe.png', class: 'logo-cfe' }
  ];

  constructor() {
    afterNextRender(() => {
      this.initSlider();
    });
  }

  private initSlider(): void {
    const slider = document.querySelector('.aliados__slider');
    if (slider) {
      const width = slider.scrollWidth / 2;
      gsap.to(slider, {
        x: -width - 37.5, // width + half gap
        duration: 30,
        ease: 'none',
        repeat: -1
      });
    }
  }
}
