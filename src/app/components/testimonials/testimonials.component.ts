import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  imports: [],
  template: `
    <section class="testimonials" id="testimonios">
      <div class="testimonials__container">
        <div class="testimonials__header">
          <h2 class="testimonials__title">Testimonios</h2>
          <p class="testimonials__subtitle">Historias reales de quienes ya confiaron en FINEX</p>
        </div>

        <div class="testimonials__cards-wrapper">
          <div class="testimonials__cards">
            <!-- Testimonial 1 -->
            <div class="testimonial-card">
              <div class="testimonial-card__quote-icon">
                <img src="https://www.figma.com/api/mcp/asset/9d69361b-f633-4acb-8066-2c9a47e7b2fe" alt="quote">
              </div>
              <div class="testimonial-card__content">
                <p class="testimonial-card__text">Desde el primer contacto sentí claridad y confianza. Me acompañaron en todo el proceso y hoy tengo el crédito que necesitaba para renovar mi vivienda. Totalmente recomendados.</p>
                
                <div class="testimonial-card__author">
                  <div class="testimonial-card__avatar">
                    <img src="https://www.figma.com/api/mcp/asset/75786ec0-7d7f-4580-b6c8-970f77df35e5" alt="María González">
                  </div>
                  <div class="testimonial-card__info">
                    <h4 class="testimonial-card__name">María González</h4>
                    <p class="testimonial-card__location">Tampico, Tamps.</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Testimonial 2 -->
            <div class="testimonial-card">
              <div class="testimonial-card__quote-icon">
                <img src="https://www.figma.com/api/mcp/asset/9d69361b-f633-4acb-8066-2c9a47e7b2fe" alt="quote">
              </div>
              <div class="testimonial-card__content">
                <p class="testimonial-card__text">El equipo de FINEX me explicó cada paso y resolvió todas mis dudas. El proceso fue mucho más sencillo de lo que esperaba.</p>
                
                <div class="testimonial-card__author">
                  <div class="testimonial-card__avatar">
                    <img src="https://www.figma.com/api/mcp/asset/7a6dce2c-7907-4300-9686-e071c156bfb9" alt="Luis Hernández">
                  </div>
                  <div class="testimonial-card__info">
                    <h4 class="testimonial-card__name">Luis Hernández</h4>
                    <p class="testimonial-card__location">Reynosa, Tamps.</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Testimonial 3 -->
            <div class="testimonial-card">
              <div class="testimonial-card__quote-icon">
                <img src="https://www.figma.com/api/mcp/asset/9d69361b-f633-4acb-8066-2c9a47e7b2fe" alt="quote">
              </div>
              <div class="testimonial-card__content">
                <p class="testimonial-card__text">Me gustó mucho la transparencia y el trato profesional. Siempre estuvieron al pendiente y cumplieron lo que prometieron.</p>
                
                <div class="testimonial-card__author">
                  <div class="testimonial-card__avatar">
                    <img src="https://www.figma.com/api/mcp/asset/cc41f0d5-e939-406c-aec1-2fb16d58560b" alt="Ana Rodríguez">
                  </div>
                  <div class="testimonial-card__info">
                    <h4 class="testimonial-card__name">Ana Rodríguez</h4>
                    <p class="testimonial-card__location">Ciudad Victoria, Tamps.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    @use '../../../styles/variables' as vars;

    .testimonials {
      padding: 128px 0;
      background: #ffffff;
      width: 100%;
      display: flex;
      justify-content: center;
    }

    .testimonials__container {
      max-width: 1920px;
      width: 100%;
      padding: 0 20px;
      display: flex;
      flex-direction: column;
      align-items: center;

      @media (min-width: vars.$breakpoint-xl) {
        padding: 0 160px;
      }
    }

    .testimonials__header {
      text-align: center;
      margin-bottom: 30.8px;
      max-width: 1600px;
      width: 100%;
    }

    .testimonials__title {
      font-family: vars.$font-family-roboto;
      font-weight: 600;
      font-size: 48px;
      line-height: 45px;
      color: vars.$primary-red;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      margin: 0 0 32px;
    }

    .testimonials__subtitle {
      font-family: 'Open Sans', sans-serif;
      font-style: italic;
      font-weight: 400;
      font-size: 24px;
      line-height: 30px;
      color: #2f3137;
      margin: 0;
    }

    .testimonials__cards-wrapper {
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 32px 0;
    }

    .testimonials__cards {
      display: flex;
      gap: 31px;
      width: 1300px;
      justify-content: center;

      @media (max-width: 1340px) {
        width: 100%;
        overflow-x: auto;
        justify-content: flex-start;
        padding: 20px;
        
        &::-webkit-scrollbar {
          display: none;
        }
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
    }

    .testimonial-card {
      position: relative;
      flex: 0 0 413px;
      background: #f8f8f8;
      border-radius: 32px;
      padding: 64px;
      box-shadow: 8px 8px 8px 0px rgba(0, 0, 0, 0.25);
      display: flex;
      flex-direction: column;
      gap: 32px;

      @media (max-width: 500px) {
        flex: 0 0 100%;
        padding: 40px;
      }
    }

    .testimonial-card__quote-icon {
      position: absolute;
      top: 24.85px;
      right: 40px; // Positioning roughly at 3/4 of the card width
      width: 78.58px;
      height: 78.58px;
      
      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }

    .testimonial-card__content {
      display: flex;
      flex-direction: column;
      gap: 32px;
      padding-top: 64px; // Matches the top padding from Figma's Container inside Card
    }

    .testimonial-card__text {
      font-family: vars.$font-family-poppins;
      font-weight: 400;
      font-size: 18px;
      line-height: 27.6px;
      color: #1f1f1f;
      margin: 0;
      min-height: 138px;
    }

    .testimonial-card__author {
      display: flex;
      flex-direction: column;
      gap: 32px;
    }

    .testimonial-card__avatar {
      width: 93.78px;
      height: 93.78px;
      border-radius: 50%;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .testimonial-card__info {
      display: flex;
      flex-direction: column;
      color: #1f1f1f;
    }

    .testimonial-card__name {
      font-family: vars.$font-family-poppins;
      font-weight: 700;
      font-size: 20px;
      line-height: normal;
      margin: 0;
    }

    .testimonial-card__location {
      font-family: vars.$font-family-poppins;
      font-weight: 400;
      font-size: 18px;
      line-height: 27.6px;
      margin: 0;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestimonialsComponent { }
