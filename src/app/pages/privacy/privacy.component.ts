import { Component, ChangeDetectionStrategy, afterNextRender } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { gsap } from 'gsap';

@Component({
  selector: 'app-privacy',
  imports: [HeaderComponent, FooterComponent],
  template: `
    <app-header></app-header>
    
    <main class="legal-page">
      <div class="legal-page__header">
        <div class="legal-page__container">
          <h1 class="legal-page__title">Política de Privacidad y Protección de Datos</h1>
          <p class="legal-page__date">Última actualización: Febrero 2026</p>
        </div>
      </div>

      <div class="legal-page__container">
        <div class="legal-page__content">
          <section class="legal-section">
            <h2>1. Introducción</h2>
            <p>En FINEX Promotores valoramos tu privacidad y nos comprometemos a proteger tus datos personales. Esta Política de Privacidad describe cómo recopilamos, usamos y resguardamos tu información, en cumplimiento con las leyes aplicables de protección de datos.</p>
          </section>

          <section class="legal-section">
            <h2>2. Información que Recopilamos</h2>
            <p>Para brindarte el mejor servicio, podemos recopilar la siguiente información:</p>
            <ul>
              <li><strong>Datos de Identificación:</strong> Nombre completo, documento de identidad, y estado civil.</li>
              <li><strong>Datos de Contacto:</strong> Correo electrónico, número de teléfono y dirección.</li>
              <li><strong>Datos Financieros:</strong> Ingresos, información laboral e historial crediticio, estrictamente para análisis y promoción de créditos.</li>
            </ul>
          </section>

          <section class="legal-section">
            <h2>3. Uso de la Información</h2>
            <p>Tus datos personales son utilizados exclusivamente para:</p>
            <ul>
              <li>Evaluar tu elegibilidad para créditos y productos financieros.</li>
              <li>Informarte sobre opciones de financiamiento y oportunidades.</li>
              <li>Mejorar nuestros servicios de intermediación financiera.</li>
              <li>Cumplir con requerimientos legales aplicables.</li>
            </ul>
          </section>

          <section class="legal-section">
            <h2>4. Compartición de Datos</h2>
            <p>FINEX actúa como un intermediario y promotora. Para asegurar las mejores tasas y oportunidades, compartiremos tus datos con instituciones financieras, bancarias y aliados crediticios <strong>únicamente bajo tu consentimiento previo</strong>. Nunca venderemos tus datos a terceros con fines publicitarios ajenos a los servicios financieros solicitados.</p>
          </section>

          <section class="legal-section">
            <h2>5. Seguridad de los Datos</h2>
            <p>Implementamos las medidas de seguridad técnicas, administrativas y físicas más estrictas para proteger tus datos personales contra el uso, acceso, alteración o pérdida no autorizada.</p>
          </section>

          <section class="legal-section">
            <h2>6. Tus Derechos (ARCO)</h2>
            <p>Tienes el derecho de <strong>Acceder, Rectificar, Cancelar u Oponerte</strong> al tratamiento de tus datos personales. Para ejercer estos derechos, ponte en contacto con nosotros escribiendo a <strong>contacto&#64;finexpromotores.com</strong> detallando tu solicitud.</p>
          </section>

          <section class="legal-section">
            <h2>7. Cambios a la Política</h2>
            <p>Podemos actualizar esta política ocasionalmente para reflejar cambios en nuestras prácticas o la ley. Te notificaremos de cambios significativos a través de nuestros canales oficiales y en nuestro sitio web.</p>
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
export class PrivacyComponent {
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
