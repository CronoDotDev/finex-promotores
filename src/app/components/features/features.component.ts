import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Feature {
  title: string;
  description: string;
  icon?: string;
}

@Component({
  selector: 'app-features',
  imports: [CommonModule],
  template: `
    <section class="features" id="features">
      <div class="features__container">
        <h2 class="features__title">Features</h2>
        <div class="features__grid">
          @for (feature of features(); track feature.title) {
            <div class="feature-card">
              <div class="feature-card__icon" *ngIf="feature.icon">
                <span class="material-icons">{{ feature.icon }}</span>
              </div>
              <h3 class="feature-card__title">{{ feature.title }}</h3>
              <p class="feature-card__description">{{ feature.description }}</p>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .features {
      padding: 80px 20px;
      background: white;
    }
    .features__container {
      max-width: 1200px;
      margin: 0 auto;
      text-align: center;
    }
    .features__grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 30px;
      margin-top: 50px;
    }
    .feature-card {
      padding: 30px;
      border-radius: 8px;
      background: #fafafa;
      transition: transform 0.3s ease;
    }
    .feature-card:hover {
      transform: translateY(-5px);
    }
    .feature-card__icon {
      margin-bottom: 20px;
      color: #3f51b5;
    }
    .feature-card__icon .material-icons {
      font-size: 3rem;
    }
    .feature-card__title {
      margin-bottom: 15px;
      font-size: 1.5rem;
    }
    .feature-card__description {
      color: #666;
      line-height: 1.5;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeaturesComponent {
  features = input<Feature[]>([]);
}
