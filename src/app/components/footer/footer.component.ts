import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `
    <footer class="footer">
      <div class="footer__main">
        <div class="footer__container">
          
          <!-- Logo & Social -->
          <div class="footer__brand">
            <div class="footer__logo">
              <img src="https://www.figma.com/api/mcp/asset/0e5a712c-4907-4dd1-ac79-49c6b13f7a98" alt="Finex Logo">
            </div>
            <p class="footer__tagline">Promoción inteligente de oportunidades para mejorar tu hogar.</p>
            <div class="footer__social">
              <a href="#" class="footer__social-link">
                <img src="https://www.figma.com/api/mcp/asset/0ca290ff-aa6e-4cec-944a-54a22fcca76c" alt="Facebook">
              </a>
              <a href="#" class="footer__social-link">
                <img src="https://www.figma.com/api/mcp/asset/a0cb6b42-82de-4699-b3cd-be2b76cde1fa" alt="Instagram">
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div class="footer__links">
            <h3 class="footer__title">Enlaces rápidos</h3>
            <ul class="footer__list">
              <li><a href="#hero">Inicio</a></li>
              <li><a href="#contacto">Contacto</a></li>
              <li><a href="#testimonios">Testimonios</a></li>
              <li><a href="#beneficios">¿Por qué elegir FINEX?</a></li>
              <li><a href="#servicios">Nuestros Servicios</a></li>
              <li><a href="#nosotros">Nosotros</a></li>
              <li><a href="#aliados">Aliados</a></li>
            </ul>
          </div>

          <!-- Legal & Contact -->
          <div class="footer__info">
            <div class="footer__legal">
              <h3 class="footer__title">Legal</h3>
              <ul class="footer__list">
                <li><a href="#">Política de Privacidad y Protección de datos</a></li>
                <li><a href="#">Términos y Condiciones</a></li>
              </ul>
            </div>
            
            <div class="footer__contact">
              <h3 class="footer__title">Buzón</h3>
              <p>
                Para quejas y sugerencias también puedes escribirnos a:<br>
                <strong>contacto&#64;finexpromotores.com</strong>
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
      width: clamp(100px, 8vw, 141px);
      height: auto;
      object-fit: contain;
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
      gap: 9px;
      justify-content: center;
    }

    .footer__social-link {
      width: 36px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 4px;
      transition: background 0.3s ease;

      &:hover {
        background: rgba(255, 255, 255, 0.2);
      }

      img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 6px;
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
}
