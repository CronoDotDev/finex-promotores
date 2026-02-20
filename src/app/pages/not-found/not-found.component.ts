import { Component, ChangeDetectionStrategy, afterNextRender } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { gsap } from 'gsap';

@Component({
  selector: 'app-not-found',
  imports: [HeaderComponent, FooterComponent, RouterLink],
  template: `
    <app-header></app-header>
    
    <main class="not-found">
      <div class="not-found__decoration not-found__decoration--blob-1"></div>
      <div class="not-found__decoration not-found__decoration--blob-2"></div>
      
      <div class="not-found__container">
        <div class="not-found__content">
          <h1 class="not-found__code">404</h1>
          <h2 class="not-found__title">Página no encontrada</h2>
          <p class="not-found__description">Lo sentimos, la página que buscas no existe o ha sido movida. ¿Por qué no volvemos al inicio para seguir buscando oportunidades?</p>
          <a routerLink="/" class="not-found__button">Volver al inicio</a>
        </div>
      </div>
    </main>

    <app-footer></app-footer>
  `,
  styles: [`
    @use '../../../styles/variables' as vars;

    .not-found {
      position: relative;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 120px 20px 60px;
      overflow: hidden;
      background: #fafafa;
    }

    .not-found__decoration {
      position: absolute;
      border-radius: 50%;
      filter: blur(100px);
      z-index: 0;
      opacity: 0.6;
      animation: float 8s ease-in-out infinite alternate;

      &--blob-1 {
        width: 400px;
        height: 400px;
        background: rgba(214, 25, 32, 0.15); /* vars.$primary-red */
        top: 20%;
        left: -10%;
      }

      &--blob-2 {
        width: 500px;
        height: 500px;
        background: rgba(43, 44, 45, 0.1); /* vars.$text-dark */
        bottom: -10%;
        right: -10%;
        animation-delay: -4s;
      }
    }

    @keyframes float {
      0% { transform: translateY(0) scale(1); }
      100% { transform: translateY(-50px) scale(1.1); }
    }

    .not-found__container {
      position: relative;
      z-index: 1;
      max-width: 800px;
      margin: 0 auto;
      text-align: center;
    }

    .not-found__content {
      background: white;
      padding: 60px 40px;
      border-radius: 24px;
      box-shadow: 0 20px 40px rgba(0,0,0,0.08);
      border: 1px solid rgba(0,0,0,0.05);
    }

    .not-found__code {
      font-family: vars.$font-family-poppins;
      font-size: 120px;
      font-weight: 800;
      color: vars.$primary-red;
      line-height: 1;
      margin: 0 0 20px;
      background: linear-gradient(135deg, vars.$primary-red, #ff5f66);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      @media (max-width: vars.$breakpoint-md) {
        font-size: 80px;
      }
    }

    .not-found__title {
      font-family: vars.$font-family-poppins;
      font-size: 32px;
      font-weight: 700;
      color: vars.$text-dark;
      margin: 0 0 16px;

      @media (max-width: vars.$breakpoint-md) {
        font-size: 24px;
      }
    }

    .not-found__description {
      font-family: vars.$font-family-poppins;
      font-size: 18px;
      color: vars.$text-muted;
      margin: 0 0 40px;
      line-height: 1.6;

      @media (max-width: vars.$breakpoint-md) {
        font-size: 16px;
      }
    }

    .not-found__button {
      display: inline-block;
      background: vars.$primary-red;
      color: white;
      font-family: vars.$font-family-poppins;
      font-weight: 600;
      font-size: 18px;
      padding: 16px 40px;
      border-radius: 12px;
      text-decoration: none;
      box-shadow: 0 8px 16px rgba(214, 25, 32, 0.3);
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 20px rgba(214, 25, 32, 0.4);
        background: color-mix(in srgb, vars.$primary-red, white 10%);
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotFoundComponent {
  constructor() {
    afterNextRender(() => {
      gsap.from('.not-found__content', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });
    });
  }
}
