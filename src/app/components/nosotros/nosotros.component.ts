import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  imports: [],
  template: `
    <section class="nosotros" id="nosotros">
      <div class="nosotros__decoration nosotros__decoration--top-left"></div>
      <div class="nosotros__decoration nosotros__decoration--bottom-right"></div>

      <div class="nosotros__container">
        <h2 class="nosotros__title">Nosotros</h2>
        
        <p class="nosotros__description">
          En FINEX trabajamos para personas que todos los días cumplen horarios, turnos y metas. Sabemos el valor del esfuerzo y queremos que ese esfuerzo se refleje en mejores oportunidades para ti y tu familia
        </p>

        <!-- Misión -->
        <div class="nosotros__grid-item">
          <div class="nosotros__image-wrapper">
            <img src="https://www.figma.com/api/mcp/asset/f0f34d0d-2f4b-4656-ba5f-1db07d276cf3" alt="Misión">
          </div>
          <div class="nosotros__text-content">
            <h3 class="nosotros__subtitle">Misión</h3>
            <p class="nosotros__text">En FINEX ofrecemos soluciones financieras integrales y productos de calidad, facilitando el acceso al crédito mediante procesos simples, confiables y transparentes, enfocados en generar confianza y valor real para nuestros clientes.</p>
          </div>
        </div>

        <!-- Visión -->
        <div class="nosotros__grid-item nosotros__grid-item--reverse">
          <div class="nosotros__image-wrapper">
            <img src="https://www.figma.com/api/mcp/asset/3e0e86de-ab47-4a7a-90be-e004a435e982" alt="Visión">
          </div>
          <div class="nosotros__text-content">
            <h3 class="nosotros__subtitle">Visión</h3>
            <p class="nosotros__text">Consolidarnos como una promotora financiera líder y de preferencia en el mercado, reconocida por nuestras alianzas estratégicas, nuestra solidez operativa y nuestro compromiso con el bienestar financiero de cada persona que confía en nosotros.</p>
          </div>
        </div>

        <!-- Objetivos -->
        <div class="nosotros__objetivos">
          <div class="nosotros__objetivos-image">
            <img src="https://www.figma.com/api/mcp/asset/a381473c-d111-44a8-9919-a0eb5ea754a4" alt="Objetivos">
          </div>
          <div class="nosotros__objetivos-content">
            <h3 class="nosotros__subtitle">Objetivos</h3>
            <div class="nosotros__objetivos-grid">
              <div class="objetivo-card">
                <div class="objetivo-card__icon">
                    <img src="https://www.figma.com/api/mcp/asset/ade6a594-7433-4c70-add7-b4aea75e2c83" alt="Diversificar">
                </div>
                <p>Diversificar y fortalecer nuestra oferta de oportunidades de productos tanto financieros como físicos.</p>
              </div>
              <div class="objetivo-card">
                <div class="objetivo-card__icon">
                    <img src="https://www.figma.com/api/mcp/asset/5bd36b8e-ac5b-4e12-bcc1-741735742e0a" alt="Alianzas">
                </div>
                <p>Desarrollar y consolidar alianzas estratégicas con instituciones y socios clave.</p>
              </div>
              <div class="objetivo-card">
                <div class="objetivo-card__icon">
                    <img src="https://www.figma.com/api/mcp/asset/e03a7715-efee-4df7-8f6d-5672a37b5bca" alt="Accesible">
                </div>
                <p>Brindar una experiencia clara, accesible y transparente en cada etapa del proceso.</p>
              </div>
              <div class="objetivo-card">
                <div class="objetivo-card__icon">
                    <img src="https://www.figma.com/api/mcp/asset/1ed8db73-1e21-4946-aa41-2463bffc22d8" alt="Crecimiento">
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
      position: relative;
      padding: 60px 0;
      background: white;
      overflow: hidden;

      @media (min-width: vars.$breakpoint-md) {
        padding: 128px 0;
      }
    }

    .nosotros__decoration {
      position: absolute;
      width: 100%;
      height: 100%;
      background-size: contain;
      background-repeat: no-repeat;
      pointer-events: none;
      z-index: 0;
      opacity: 0.1;

      &--top-left {
        top: -10%;
        left: -10%;
        background-image: url("data:image/svg+xml,%3Csvg width='1446' height='1492' viewBox='0 0 1446 1492' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect opacity='0.15' x='278.844' width='1167.16' height='1210.29' rx='27' transform='rotate(43.9619 278.844 0)' fill='%23949494'/%3E%3C/svg%3E");
      }

      &--bottom-right {
        bottom: -10%;
        right: -10%;
        transform: rotate(180deg);
        background-image: url("data:image/svg+xml,%3Csvg width='1446' height='1492' viewBox='0 0 1446 1492' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect opacity='0.15' x='278.844' width='1167.16' height='1210.29' rx='27' transform='rotate(43.9619 278.844 0)' fill='%23949494'/%3E%3C/svg%3E");
      }
    }

    .nosotros__container {
      position: relative;
      max-width: 1920px;
      margin: 0 auto;
      z-index: 1;
      display: flex;
      flex-direction: column;
      gap: 40px;
      @include vars.container-padding(360px);

      @media (min-width: vars.$breakpoint-md) {
        gap: 64px;
      }
    }

    .nosotros__title {
      font-family: vars.$font-family-roboto;
      font-weight: 600;
      font-size: 32px;
      line-height: 1.2;
      color: vars.$primary-red;
      text-align: center;
      margin: 0;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

      @media (min-width: vars.$breakpoint-md) {
        font-size: 48px;
      }
    }

    .nosotros__description {
      font-family: vars.$font-family-poppins;
      font-style: italic;
      font-weight: 300;
      font-size: 18px;
      line-height: 1.4;
      color: vars.$text-dark;
      text-align: center;
      margin: 0 auto;
      max-width: 1000px;

      @media (min-width: vars.$breakpoint-md) {
        font-size: 24px;
      }
    }

    .nosotros__grid-item {
      display: flex;
      flex-direction: column;
      gap: 24px;
      align-items: center;

      @media (min-width: vars.$breakpoint-lg) {
        flex-direction: row;
        gap: 64px;
      }

      @media (min-width: vars.$breakpoint-tv) {
        gap: 128px;
      }

      &--reverse {
        @media (min-width: vars.$breakpoint-lg) {
          flex-direction: row-reverse;
        }
      }
    }

    .nosotros__image-wrapper {
      width: 100%;
      height: 250px;
      border-radius: 20px;
      overflow: hidden;

      @media (min-width: vars.$breakpoint-md) {
        height: 333px;
        border-radius: 27px;
      }

      @media (min-width: vars.$breakpoint-lg) {
        flex: 0 0 45%;
      }

      @media (min-width: vars.$breakpoint-tv) {
        flex: 0 0 500px;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .nosotros__text-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 12px;
      text-align: center;

      @media (min-width: vars.$breakpoint-lg) {
        text-align: left;
      }
    }

    .nosotros__subtitle {
      font-family: vars.$font-family-roboto;
      font-weight: 600;
      font-size: 24px;
      color: vars.$text-dark;
      margin: 0;

      @media (min-width: vars.$breakpoint-md) {
        font-size: 32px;
      }
    }

    .nosotros__text {
      font-family: vars.$font-family-poppins;
      font-size: 16px;
      line-height: 1.6;
      color: vars.$text-dark;
      margin: 0;

      @media (min-width: vars.$breakpoint-md) {
        font-size: 18px;
        text-align: justify;
      }
    }

    .nosotros__objetivos {
      display: flex;
      flex-direction: column;
      gap: 32px;
      align-items: center;
      padding-top: 20px;

      @media (min-width: vars.$breakpoint-lg) {
        flex-direction: row;
        align-items: flex-start;
        gap: 64px;
      }
    }

    .nosotros__objetivos-image {
      width: 100%;
      height: 400px;
      overflow: hidden;
      border-radius: 20px;

      @media (min-width: vars.$breakpoint-lg) {
        flex: 0 0 40%;
        height: 611px;
      }

      @media (min-width: vars.$breakpoint-tv) {
        flex: 0 0 500px;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .nosotros__objetivos-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 24px;
      width: 100%;
    }

    .nosotros__objetivos-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 20px;

      @media (min-width: vars.$breakpoint-md) {
        grid-template-columns: 1fr 1fr;
      }
    }

    .objetivo-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;
      padding: 20px;
      text-align: center;
      background: #f9f9f9;
      border-radius: 15px;

      @media (min-width: vars.$breakpoint-md) {
        padding: 36px 0 13.5px;
        background: transparent;
      }

      .objetivo-card__icon {
        width: 60px;
        height: 60px;
        
        @media (min-width: vars.$breakpoint-md) {
          width: 90px;
          height: 90px;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }

      p {
        font-family: vars.$font-family-poppins;
        font-size: 14px;
        line-height: 1.5;
        color: #1f1f1f;
        margin: 0;

        @media (min-width: vars.$breakpoint-md) {
          font-size: 18px;
        }
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NosotrosComponent { }
