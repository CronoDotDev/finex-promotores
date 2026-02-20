import { Component, ChangeDetectionStrategy, afterNextRender } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { gsap } from 'gsap';

@Component({
  selector: 'app-terms',
  imports: [HeaderComponent, FooterComponent],
  template: `
    <app-header></app-header>
    
    <main class="legal-page">
      <div class="legal-page__header">
        <div class="legal-page__container">
          <h1 class="legal-page__title">Términos y Condiciones</h1>
          <p class="legal-page__date">Última actualización: Febrero 2026</p>
        </div>
      </div>

      <div class="legal-page__container">
        <div class="legal-page__content">
          <section class="legal-section">
            <h2>1. Aceptación de los Términos</h2>
            <p>Al acceder y utilizar el sitio web de FINEX Promotores, aceptas estar sujeto a estos Términos y Condiciones. Si no estás de acuerdo con alguna parte de estos términos, te solicitamos que no utilices nuestros servicios.</p>
          </section>

          <section class="legal-section">
            <h2>2. Naturaleza del Servicio</h2>
            <p>FINEX opera como una <strong>agencia promotora e intermediaria</strong>. No otorgamos créditos directamente, sino que facilitamos el análisis, gestión y vinculación entre los clientes y nuestras instituciones financieras aliadas o proveedores de bienes físicos.</p>
          </section>

          <section class="legal-section">
            <h2>3. Responsabilidad del Usuario</h2>
            <p>Al solicitar nuestros servicios, te comprometes a:</p>
            <ul>
              <li>Proporcionar información veraz, precisa y actualizada en todo momento.</li>
              <li>Cumplir con las obligaciones financieras adquiridas con las instituciones crediticias, entendiéndose que dichas obligaciones son independientes de FINEX.</li>
              <li>No utilizar la plataforma para actividades ilegales o fraudulentas.</li>
            </ul>
          </section>

          <section class="legal-section">
            <h2>4. Aprobación y Otorgamiento</h2>
            <p>La aprobación, montos, tasas de interés, plazos y demás condiciones de los créditos o financiamientos <strong>dependen exclusiva y totalmente de la institución financiera u otorgante externo</strong>, sujeto a sus políticas internas de evaluación y análisis de riesgo. FINEX no garantiza la aprobación de ninguna solicitud.</p>
          </section>

          <section class="legal-section">
            <h2>5. Propiedad Intelectual</h2>
            <p>Todo el contenido del sitio (textos, gráficos, logotipos, imágenes e iconos) es propiedad exclusiva de FINEX o de sus licenciados, estando protegido por leyes de derechos de autor y marcas aplicables.</p>
          </section>

          <section class="legal-section">
            <h2>6. Limitación de Responsabilidad</h2>
            <p>FINEX no será responsable por daños directos, indirectos o consecuentes que resulten del uso o la imposibilidad de uso de nuestros servicios web, ni por decisiones tomadas por las instituciones crediticias a partir de la información procesada.</p>
          </section>

          <section class="legal-section">
            <h2>7. Contacto</h2>
            <p>Para cualquier duda o aclaración respecto a estos Términos y Condiciones, por favor escríbenos a <strong>contacto&#64;finexpromotores.com</strong>.</p>
          </section>
        </div>
      </div>
    </main>

    <app-footer></app-footer>
  `,
  styles: [`
    @use '../../../styles/variables' as vars;

    .legal-page {
      min-height: 100vh;
      background: #fafafa;
      padding-bottom: 80px;
    }

    .legal-page__header {
      background: linear-gradient(135deg, vars.$text-dark 0%, #1a1a1a 100%);
      padding: 220px 20px 80px;
      color: white;
      text-align: center;
      position: relative;
      overflow: hidden;

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 40px;
        background: #fafafa;
        border-radius: 40px 40px 0 0;
      }
    }

    .legal-page__container {
      max-width: 1000px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .legal-page__title {
      font-family: vars.$font-family-poppins;
      font-size: 36px;
      font-weight: 700;
      margin: 0 0 16px;
      position: relative;
      z-index: 1;

      @media (min-width: vars.$breakpoint-md) {
        font-size: 48px;
      }
    }

    .legal-page__date {
      font-family: vars.$font-family-poppins;
      font-size: 16px;
      color: rgba(255, 255, 255, 0.7);
      margin: 0;
      position: relative;
      z-index: 1;
    }

    .legal-page__content {
      background: white;
      border-radius: 24px;
      padding: 60px 80px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.05);
      border: 1px solid rgba(0,0,0,0.05);
      margin-top: -30px;
      position: relative;
      z-index: 2;

      @media (max-width: vars.$breakpoint-md) {
        padding: 40px 24px;
      }
    }

    .legal-section {
      margin-bottom: 40px;

      &:last-child {
        margin-bottom: 0;
      }

      h2 {
        font-family: vars.$font-family-poppins;
        color: vars.$text-dark;
        font-size: 24px;
        font-weight: 600;
        margin: 0 0 16px;
      }

      p {
        font-family: vars.$font-family-poppins;
        font-size: 16px;
        color: vars.$text-muted;
        line-height: 1.8;
        margin: 0 0 16px;
      }

      ul {
        margin: 0 0 16px;
        padding-left: 20px;

        li {
          font-family: vars.$font-family-poppins;
          font-size: 16px;
          color: vars.$text-muted;
          line-height: 1.8;
          margin-bottom: 8px;

          &::marker {
            color: vars.$primary-red;
          }
        }
      }

      strong {
        color: vars.$text-dark;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TermsComponent {
  constructor() {
    afterNextRender(() => {
      gsap.from('.legal-page__content', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.2
      });
      window.scrollTo(0, 0);
    });
  }
}
