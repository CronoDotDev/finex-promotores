import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  template: `
    <section class="about" id="about">
      <div class="about__container">
        <div class="about__content">
          <h2 class="about__title">{{ title() }}</h2>
          <p class="about__text">{{ description() }}</p>
        </div>
        <div class="about__image" *ngIf="imageUrl()">
          <img [src]="imageUrl()" [alt]="title()">
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about {
      padding: 80px 20px;
      background: #fdfdfd;
    }
    .about__container {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 80px;
    }
    @media (max-width: 960px) {
      .about__container {
        grid-template-columns: 1fr;
        text-align: center;
      }
    }
    .about__content {
      /* flex: 1; min-width: 300px; */
    }
    .about__image {
      /* flex: 1; min-width: 300px; */
    }
    .about__image img {
      width: 100%;
      height: auto;
      border-radius: 12px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    }
    .about__title {
      font-size: 2.5rem;
      margin-bottom: 20px;
    }
    .about__text {
      font-size: 1.1rem;
      line-height: 1.6;
      color: #444;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {
  title = input<string>('About Us');
  description = input<string>('We are a team of experts dedicated to providing the best financial solutions for your business.');
  imageUrl = input<string | null>(null);
}
