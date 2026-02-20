import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-cta',
  template: `
    <section class="cta">
      <div class="cta__container-wrapper">
        <div class="cta__background" [style.background-image]="'url(' + backgroundImage + ')'"></div>
        <div class="cta__overlay"></div>
        <div class="cta__container">
          <button class="cta__button">Únete a la Familia FINEX</button>
        </div>
      </div>
    </section>
  `,
  styles: [`
    @use '../../../styles/variables' as vars;

    .cta {
      position: relative;
      padding: 128px 0 64px;
      width: 100%;
      display: flex;
      justify-content: center;
    }

    .cta__container-wrapper {
        position: relative;
        width: 100%;
        max-width: 1920px;
        margin: 0 auto;
        padding: 0 20px;
        
        @media (min-width: vars.$breakpoint-xl) {
            padding: 0 180px;
        }
    }

    .cta__background {
      position: absolute;
      top: 0;
      left: 180px;
      right: 180px;
      bottom: 0;
      background-size: cover;
      background-position: center;
      border-radius: 0 400px 0 400px;
      z-index: -2;

      @media (max-width: 1280px) {
          left: 20px;
          right: 20px;
      }
    }

    .cta__overlay {
      position: absolute;
      top: 0;
      left: 180px;
      right: 180px;
      bottom: 0;
      background: rgba(240, 7, 10, 0.75);
      border-radius: 0 400px 0 400px;
      z-index: -1;

      @media (max-width: 1280px) {
          left: 20px;
          right: 20px;
      }
    }

    .cta__container {
      width: 100%;
      height: 480px; // Aprox height for 128px py in Figma
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 16px 16px 16px rgba(0, 0, 0, 0.25);
      border-radius: 0 400px 0 400px;

      @media (max-width: 768px) {
        height: 300px;
        border-radius: 0 100px 0 100px;
      }
    }

    .cta__button {
      background: #ffffff;
      color: #1f1f1f;
      font-family: vars.$font-family-poppins;
      font-weight: 600;
      font-size: 20px;
      padding: 16px 32px;
      border: none;
      border-radius: 15px;
      cursor: pointer;
      box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
      transition: transform 0.3s ease, box-shadow 0.3s ease;

      &:hover {
        transform: translateY(-3px);
        box-shadow: 4px 8px 20px rgba(0, 0, 0, 0.4);
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CtaComponent {
  backgroundImage = 'assets/images/contact/cta.jpg';
}
