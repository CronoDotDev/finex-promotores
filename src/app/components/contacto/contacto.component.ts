import { NgOptimizedImage } from "@angular/common";
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { HubspotFormComponent } from './form.component';

@Component({
  selector: 'app-contacto',
  imports: [RevealDirective, NgOptimizedImage, HubspotFormComponent],
  template: `
    <section class="contacto">
      <div class="contacto__background" [style.background-image]="'url(' + backgroundImage + ')'"></div>
      <div class="contacto__overlay"></div>

      <div class="contacto__container">
        <div class="contacto__header">
          <h2 class="contacto__title">Contacto</h2>
        </div>
        
        <div class="contacto__content">
          <div class="contacto__info">
          <div class="contacto__info-box">
            <h3 class="contacto__box-title">Permítenos analizar tu caso y presentarte opciones claras y previamente evaluadas</h3>
            <p class="contacto__box-text">
              Completa el formulario y un asesor de FINEX se pondrá en contacto contigo para brindarte atención personalizada y resolver todas tus dudas.
            </p>
          </div>

          <div class="contacto__images">
            <div class="contacto__image" appReveal>
              <img ngSrc="assets/images/contact/contacto image-1.webp" alt="Asesoría Finex" fill>
            </div>
            <div class="contacto__image" appReveal [appRevealDelay]="150">
              <img ngSrc="assets/images/contact/contacto-imagen-2.webp" alt="Trato Directo" fill>
            </div>
          </div>

          <p class="contacto__location-text">
            Operamos en todo <strong>Tamaulipas</strong> con oficinas en Tampico y zona conurbada, Reynosa, Matamoros, Nuevo Laredo y Ciudad Victoria.
          </p>
        </div>

        <div class="contacto__form-wrapper">
          <div class="contacto__form-container">
            <div class="contacto__form-inner">
              <app-hubspot-form></app-hubspot-form>
            </div>

            <div class="contacto__privacy">
              <p>Tu información está protegida y solo será usada para contactarte y brindarte la mejor atención.</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    @use '../../../styles/variables' as vars;

    .contacto {
      padding: 60px 0;
      position: relative;
      overflow: hidden;
      width: 100%;
      display: flex;
      justify-content: center;

      @media (min-width: vars.$breakpoint-md) {
        padding: 128px 0;
      }
    }

    .contacto__background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      z-index: -2;
    }

    .contacto__overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.9);
      z-index: -1;
    }

    .contacto__container {
      max-width: 1920px;
      width: 100%;
      margin: 0 auto;
      padding: 0 20px;
      display: flex;
      flex-direction: column;
      gap: 32px;

      @media (min-width: vars.$breakpoint-lg) {
        @include vars.container-padding(180px);
      }
    }

    .contacto__content {
      display: flex;
      flex-direction: column;
      gap: 40px;
      width: 100%;

      @media (min-width: vars.$breakpoint-lg) {
        flex-direction: row;
        gap: 64px;
        align-items: flex-start;
      }
    }

    .contacto__info {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 24px;
      width: 100%;

      @media (min-width: vars.$breakpoint-md) {
        gap: 32px;
      }
    }

    .contacto__header {
        width: 100%;
        text-align: center;
        margin-bottom: 8px; // reduced since gap handles most spacing
        @media (min-width: vars.$breakpoint-lg) {
            text-align: left;
            margin-bottom: 0;
        }
    }

    .contacto__title {
      font-family: vars.$font-family-roboto;
      font-weight: 600;
      font-size: 32px;
      line-height: 1.2;
      color: vars.$primary-red;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      margin: 0;

      @media (min-width: vars.$breakpoint-md) {
        font-size: 48px;
      }
    }

    .contacto__info-box {
      background: vars.$primary-red;
      border-radius: 12px;
      padding: 30px 20px;
      color: white;
      display: flex;
      flex-direction: column;
      gap: 16px;
      width: 100%;
      text-align: center;

      @media (min-width: vars.$breakpoint-md) {
        padding: 32px 64px;
        text-align: left;
      }
    }

    .contacto__box-title {
      font-family: 'Inter', sans-serif;
      font-weight: 700;
      font-size: 20px;
      line-height: 1.3;
      margin: 0;

      @media (min-width: vars.$breakpoint-md) {
        font-size: 28.4px;
        line-height: 36px;
      }
    }

    .contacto__box-text {
      font-family: vars.$font-family-poppins;
      font-weight: 300;
      font-size: 16px;
      line-height: normal;
      margin: 0;

      @media (min-width: vars.$breakpoint-md) {
        font-size: 20px;
      }
    }

    .contacto__images {
      display: flex;
      flex-direction: column;
      gap: 16px;
      width: 100%;

      @media (min-width: vars.$breakpoint-md) {
        flex-direction: row;
        height: 237px;
      }
    }

    .contacto__image {
      flex: 1;
      height: 200px;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.25);

      @media (min-width: vars.$breakpoint-md) {
          height: 100%;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .contacto__location-text {
      font-family: vars.$font-family-poppins;
      font-weight: 300;
      font-size: 16px;
      color: black;
      margin: 0;
      text-shadow: 0px 0px 16px white, 0px 0px 16px white;
      width: 100%;
      text-align: center;

      @media (min-width: vars.$breakpoint-md) {
        font-size: 20px;
        text-align: left;
      }

      strong {
        font-weight: 700;
      }
    }

    .contacto__form-wrapper {
      flex: 1;
      display: flex;
      flex-direction: column;
      width: 100%;

      @media (min-width: vars.$breakpoint-lg) {
        flex: 0 0 50%;
        max-width: 770px;
      }
    }

    .contacto__form-container {
        display: flex;
        flex-direction: column;
        gap: 16px;
        width: 100%;
    }

    .contacto__form-inner {
      background: white;
      width: 100%;
      min-height: 400px;
      border-radius: 12px;
      overflow: hidden;
      padding: 30px 20px;

      @media (min-width: vars.$breakpoint-md) {
        min-height: 660px;
        padding: 40px;
      }
    }


    .contacto__privacy {
      border: 2px solid vars.$primary-red;
      border-radius: 15px;
      padding: 15px;
      text-align: center;
      width: 100%;

      p {
        font-family: vars.$font-family-poppins;
        font-style: italic;
        font-size: 16px;
        line-height: 1.4;
        color: #404040;
        margin: 0;

        @media (min-width: vars.$breakpoint-md) {
            font-size: 20px;
            line-height: 30px;
        }
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactoComponent {
  backgroundImage = 'assets/images/contact/contacto-background.webp';
}
