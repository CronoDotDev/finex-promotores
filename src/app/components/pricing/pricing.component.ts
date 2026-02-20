import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

@Component({
  selector: 'app-pricing',
  imports: [CommonModule],
  template: `
    <section class="pricing" id="pricing">
      <div class="pricing__container">
        <h2 class="pricing__title">Our Pricing</h2>
        <div class="pricing__grid">
          @for (plan of plans(); track plan.name) {
            <div class="pricing-card" [class.pricing-card--popular]="plan.isPopular">
              <div class="pricing-card__popular-badge" *ngIf="plan.isPopular">Most Popular</div>
              <h3 class="pricing-card__name">{{ plan.name }}</h3>
              <div class="pricing-card__price">{{ plan.price }}<span>/mo</span></div>
              <ul class="pricing-card__features">
                @for (feature of plan.features; track feature) {
                  <li><span class="material-icons">check</span> {{ feature }}</li>
                }
              </ul>
              <button class="pricing-card__button">Get Started</button>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .pricing {
      padding: 80px 20px;
      background: white;
    }
    .pricing__container {
      max-width: 1200px;
      margin: 0 auto;
      text-align: center;
    }
    .pricing__grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
      margin-top: 50px;
    }
    .pricing-card {
      padding: 40px;
      border: 1px solid #eee;
      border-radius: 12px;
      position: relative;
      display: flex;
      flex-direction: column;
    }
    .pricing-card--popular {
      border-color: #3f51b5;
      box-shadow: 0 10px 30px rgba(63, 81, 181, 0.1);
    }
    .pricing-card__popular-badge {
      position: absolute;
      top: -15px;
      left: 50%;
      transform: translateX(-50%);
      background: #3f51b5;
      color: white;
      padding: 5px 15px;
      border-radius: 20px;
      font-size: 0.8rem;
    }
    .pricing-card__price {
      font-size: 2.5rem;
      font-weight: bold;
      margin: 20px 0;
    }
    .pricing-card__price span {
      font-size: 1rem;
      color: #666;
    }
    .pricing-card__features {
      list-style: none;
      padding: 0;
      margin: 30px 0;
      text-align: left;
      flex: 1;
    }
    .pricing-card__features li {
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .pricing-card__features .material-icons {
      color: #4caf50;
      font-size: 1.2rem;
    }
    .pricing-card__button {
      padding: 12px;
      border-radius: 8px;
      border: 1px solid #3f51b5;
      background: transparent;
      color: #3f51b5;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .pricing-card--popular .pricing-card__button {
      background: #3f51b5;
      color: white;
    }
    .pricing-card__button:hover {
      background: #3f51b5;
      color: white;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PricingComponent {
  plans = input<PricingPlan[]>([]);
}
