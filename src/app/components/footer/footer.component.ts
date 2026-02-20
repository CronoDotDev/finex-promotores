import { Component, ChangeDetectionStrategy, afterNextRender } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  template: `
    <footer class="footer">
      <div class="footer__main">
        <div class="footer__container">
          
          <!-- Logo & Social -->
          <div class="footer__brand">
            <div class="footer__logo">
              <a routerLink="/"><img src="assets/images/layout/logo-footer.webp" alt="Finex Logo"></a>
            </div>
            <p class="footer__tagline">Promoción inteligente de oportunidades para mejorar tu hogar.</p>
            <div class="footer__social">
              <a href="#" class="footer__social-link" aria-label="Facebook">
                <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.39 17.97H3.26V9.74H.7V7.2H3.26V5.39C3.26 2.82 4.36 2 7.12 2C7.99 2 8.86 2.13 8.86 2.13V4.74H7.86C6.72 4.74 6.48 5.27 6.48 6.07V7.2H9.21L8.85 9.74H6.38V17.97H6.39Z" fill="white"/>
                </svg>
              </a>
              <a href="#" class="footer__social-link" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 1.558C11.403 1.558 11.688 1.567 12.637 1.61C13.515 1.65 13.991 1.797 14.308 1.92C14.728 2.083 15.028 2.278 15.343 2.593C15.658 2.908 15.853 3.208 16.015 3.628C16.138 3.945 16.285 4.421 16.325 5.299C16.368 6.248 16.377 6.533 16.377 8.936C16.377 11.339 16.368 11.624 16.325 12.573C16.285 13.451 16.138 13.927 16.015 14.244C15.853 14.664 15.658 14.964 15.343 15.279C15.028 15.594 14.728 15.789 14.308 15.952C13.991 16.075 13.515 16.222 12.637 16.262C11.688 16.305 11.403 16.314 9 16.314C6.597 16.314 6.312 16.305 5.363 16.262C4.485 16.222 4.009 16.075 3.692 15.952C3.272 15.789 2.972 15.594 2.657 15.279C2.342 14.964 2.147 14.664 1.985 14.244C1.862 13.927 1.715 13.451 1.675 12.573C1.632 11.624 1.623 11.339 1.623 8.936C1.623 6.533 1.632 6.248 1.675 5.299C1.715 4.421 1.862 3.945 1.985 3.628C2.147 3.208 2.342 2.908 2.657 2.593C2.972 2.278 3.272 2.083 3.692 1.92C4.009 1.797 4.485 1.65 5.363 1.61C6.312 1.567 6.597 1.558 9 1.558ZM9 0C6.556 0 6.249 0.01 5.289 0.054C4.331 0.098 3.677 0.25 3.105 0.472C2.514 0.702 2.012 1.009 1.512 1.509C1.012 2.009 0.705 2.511 0.475 3.102C0.253 3.674 0.101 4.328 0.057 5.286C0.013 6.246 0.003 6.553 0.003 8.997C0.003 11.441 0.013 11.748 0.057 12.708C0.101 13.666 0.253 14.32 0.475 14.892C0.705 15.483 1.012 15.985 1.512 16.485C2.012 16.985 2.514 17.292 3.105 17.522C3.677 17.744 4.331 17.896 5.289 17.94C6.249 17.984 6.556 17.994 9 17.994C11.444 17.994 11.751 17.984 12.711 17.94C13.669 17.896 14.323 17.744 14.895 17.522C15.486 17.292 15.988 16.985 16.488 16.485C16.988 15.985 17.295 15.483 17.525 14.892C17.747 14.32 17.899 13.666 17.943 12.708C17.987 11.748 17.997 11.441 17.997 8.997C17.997 6.553 17.987 6.246 17.943 5.286C17.899 4.328 17.747 3.674 17.525 3.102C17.295 2.511 16.988 2.009 16.488 1.509C15.988 1.009 15.486 0.702 14.895 0.472C14.323 0.25 13.669 0.098 12.711 0.054C11.751 0.01 11.444 0 9 0ZM9 4.378C6.448 4.378 4.378 6.448 4.378 9C4.378 11.552 6.448 13.622 9 13.622C11.552 13.622 13.622 11.552 13.622 9C13.622 6.448 11.552 4.378 9 4.378ZM9 12.064C7.308 12.064 5.936 10.692 5.936 9C5.936 7.308 7.308 5.936 9 5.936C10.692 5.936 12.064 7.308 12.064 9C12.064 10.692 10.692 12.064 9 12.064ZM14.884 4.196C14.884 4.792 14.4 5.276 13.804 5.276C13.208 5.276 12.724 4.792 12.724 4.196C12.724 3.6 13.208 3.116 13.804 3.116C14.4 3.116 14.884 3.6 14.884 4.196Z" fill="#ffffff" stroke="none"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div class="footer__links">
            <h3 class="footer__title">Enlaces rápidos</h3>
            <ul class="footer__list">
              <li><a href="#hero" (click)="scrollTo($event, 'hero')">Inicio</a></li>
              <li><a href="#contacto" (click)="scrollTo($event, 'contacto')">Contacto</a></li>
              <li><a href="#testimonios" (click)="scrollTo($event, 'testimonios')">Testimonios</a></li>
              <li><a href="#beneficios" (click)="scrollTo($event, 'beneficios')">¿Por qué elegir FINEX?</a></li>
              <li><a href="#servicios" (click)="scrollTo($event, 'servicios')">Nuestros Servicios</a></li>
              <li><a href="#nosotros" (click)="scrollTo($event, 'nosotros')">Nosotros</a></li>
              <li><a href="#aliados" (click)="scrollTo($event, 'aliados')">Aliados</a></li>
            </ul>
          </div>

          <!-- Legal & Contact -->
          <div class="footer__info">
            <div class="footer__legal">
              <h3 class="footer__title">Legal</h3>
              <ul class="footer__list">
                <li><a routerLink="/privacy">Política de Privacidad y Protección de datos</a></li>
                <li><a routerLink="/terms">Términos y Condiciones</a></li>
              </ul>
            </div>
            
            <div class="footer__contact">
              <h3 class="footer__title">Buzón</h3>
              <p>
                Para quejas y sugerencias también puedes escribirnos a:<br>
                <strong><a href="mailto:contacto@finexpromotores.com" target="_blank" style="color: white; text-decoration: underline;">contacto&#64;finexpromotores.com</a></strong>
              </p>
            </div>
          </div>
        </div>

        <div class="footer__divider"></div>
      </div>

      <div class="footer__bottom">
        <p>
          FINEX promotores © {{ currentYear }}. Todos los derechos reservados. Promovido por 
          <a href="https://qbo.agency/" target="_blank">Agencia de Publicidad Digital</a>
        </p>
      </div>
    </footer>
  `,
  styles: [`
    @use '../../../styles/variables' as vars;

    .footer {
      background: linear-gradient(90.18deg, #383838 9.49%, #606060 94.32%);
      color: white;
    }

    .footer__main {
      padding: 60px 0 0;
      @media (min-width: vars.$breakpoint-md) {
        padding: 89px 0 0;
      }
    }

    .footer__container {
      max-width: 1920px;
      margin: 0 auto;
      padding: 0 20px 40px;
      display: flex;
      flex-direction: column;
      gap: 40px;
      text-align: center;

      @media (min-width: vars.$breakpoint-lg) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        text-align: left;
        @include vars.container-padding(242px);
        padding-bottom: 54px;
      }
    }

    .footer__brand {
      flex: 1;
      min-width: 280px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 24px;

      @media (min-width: vars.$breakpoint-md) {
        gap: 36px;
      }
    }

    .footer__logo img {
      width: auto;
      height: 141px;
      aspect-ratio: 82 / 141;
      object-fit: contain;

      @media (min-width: vars.$breakpoint-md) {
        height: 243px;
      }
    }

    .footer__tagline {
      font-family: vars.$font-family-poppins;
      font-size: 16px;
      line-height: 1.5;
      text-align: center;
      margin: 0;
      max-width: 442px;

      @media (min-width: vars.$breakpoint-md) {
        font-size: 18px;
        line-height: 27.6px;
      }
    }

    .footer__social {
      display: flex;
      gap: 20px;
      justify-content: center;
      margin-top: 20px;
    }

    .footer__social-link {
      display: flex;
      align-items: center;
      justify-content: center;
      transition: opacity 0.3s ease;

      &:hover {
        opacity: 0.7;
      }

      svg {
        display: block;
      }
    }

    .footer__links, .footer__info {
      flex: 1;
      min-width: 200px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .footer__title {
      font-family: vars.$font-family-roboto;
      font-weight: 600;
      font-size: 20px;
      line-height: 1.4;
      margin: 0;

      @media (min-width: vars.$breakpoint-md) {
        font-size: 24px;
        line-height: 45px;
      }
    }

    .footer__list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 8px;

      a {
        font-family: vars.$font-family-poppins;
        font-size: 16px;
        color: white;
        text-decoration: none;
        transition: opacity 0.3s ease;

        @media (min-width: vars.$breakpoint-md) {
            font-size: 18px;
        }

        &:hover {
          opacity: 0.8;
        }
      }
    }

    .footer__contact {
      margin-top: 24px;
      
      @media (min-width: vars.$breakpoint-md) {
        margin-top: 48px;
      }

      p {
        font-family: vars.$font-family-poppins;
        font-size: 16px;
        line-height: 1.5;
        margin: 0;

        @media (min-width: vars.$breakpoint-md) {
            font-size: 18px;
            line-height: 27.6px;
        }
      }

      strong {
        font-weight: 700;
        letter-spacing: 0.54px;
      }
    }

    .footer__divider {
      max-width: 1400px;
      margin: 0 auto;
      height: 1px;
      background: #6b7280;
      opacity: 0.3;
    }

    .footer__bottom {
      background: vars.$primary-red;
      padding: 30px 20px;
      text-align: center;

      @media (min-width: vars.$breakpoint-md) {
        padding: 52px 20px 54px;
      }

      p {
        font-family: 'Open Sans', sans-serif;
        font-style: italic;
        font-size: 16px;
        line-height: 1.4;
        margin: 0;
        
        @media (min-width: vars.$breakpoint-md) {
          font-size: 24px;
          line-height: 30px;
        }
      }

      a {
        color: white;
        text-decoration: underline;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  constructor(private router: Router) {
    afterNextRender(() => {
      this.initSocialStagger();
    });
  }

  scrollTo(event: Event, sectionId: string): void {
    event.preventDefault();
    if (this.router.url === '/' || this.router.url.startsWith('/#')) {
      const target = document.getElementById(sectionId);
      if (!target) return;
      const header = document.querySelector('.header') as HTMLElement;
      const headerHeight = header ? header.offsetHeight : 0;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    } else {
      this.router.navigate(['/'], { fragment: sectionId });
    }
  }

  private initSocialStagger(): void {
    const socialLinks = document.querySelectorAll('.footer__social-link');
    if (!socialLinks.length) return;

    gsap.from(socialLinks, {
      y: 20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.footer__social',
        start: 'top 95%',
        toggleActions: 'play none none reverse'
      }
    });
  }
}
