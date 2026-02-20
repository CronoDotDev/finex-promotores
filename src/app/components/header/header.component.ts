import { Component, ChangeDetectionStrategy, signal, ElementRef, viewChild, afterNextRender } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  template: `
    <header #header class="header">
      <div class="header__container">
        <div class="header__logo">
          <a routerLink="/"><img src="assets/images/layout/logo-header.webp" alt="Finex Promotores"></a>
        </div>

        <!-- Hamburger Toggle (mobile/tablet only) -->
        <button
          class="header__hamburger"
          [class.header__hamburger--open]="mobileMenuOpen()"
          (click)="toggleMenu()"
          [attr.aria-expanded]="mobileMenuOpen()"
          aria-controls="mobile-nav"
          aria-label="Abrir menú de navegación"
        >
          <span class="header__hamburger-bar"></span>
          <span class="header__hamburger-bar"></span>
          <span class="header__hamburger-bar"></span>
        </button>

        <!-- Desktop Nav -->
        <nav class="header__nav header__nav--desktop" aria-label="Navegación principal">
          <ul class="header__list">
            @for (item of menuItems; track item.id) {
              <li class="header__item">
                <a (click)="scrollTo($event, item.id)" [href]="'#' + item.id" class="header__link">{{ item.label }}</a>
              </li>
            }
            <li class="header__item">
              <button class="header__button-contact" (click)="scrollTo($event, 'contacto')">Contacto</button>
            </li>
          </ul>
        </nav>

        <!-- Mobile Nav Overlay -->
        <nav
          id="mobile-nav"
          class="header__nav header__nav--mobile"
          [class.header__nav--mobile-open]="mobileMenuOpen()"
          aria-label="Navegación principal"
        >
          <ul class="header__list header__list--mobile">
            @for (item of menuItems; track item.id) {
              <li class="header__item">
                <a (click)="scrollTo($event, item.id); closeMenu()" [href]="'#' + item.id" class="header__link header__link--mobile">{{ item.label }}</a>
              </li>
            }
            <li class="header__item">
              <button class="header__button-contact header__button-contact--mobile" (click)="scrollTo($event, 'contacto'); closeMenu()">Contacto</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  `,
  styles: [`
    @use '../../../styles/variables' as vars;

    .header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 1000;
      height: 80px;
      overflow: visible;
      display: flex;
      background: linear-gradient(90deg, vars.$bg-gradient-start 0%, vars.$bg-gradient-end 100%);
      box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
      transition: height 0.3s ease;

      &.header--scrolled {
        height: 64px;
      }

      @media (min-width: vars.$breakpoint-md) {
        height: 90px;

        &.header--scrolled {
          height: 72px;
        }
      }

      @media (min-width: vars.$breakpoint-lg) {
        height: 100px;

        &.header--scrolled {
          height: 80px;
        }
      }

      @media (min-width: 1350px) {
        height: 10.8125rem;

        &.header--scrolled {
          height: 5rem;
        }
      }

      @media (min-width: vars.$breakpoint-tv) {
        height: 173px;

        &.header--scrolled {
          height: 100px;
        }
      }
    }

    .header__container {
      width: 100%;
      height: 100%;
      max-width: 1920px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
      position: relative;

      @media (min-width: vars.$breakpoint-md) {
        padding: 0 40px;
      }

      @media (min-width: vars.$breakpoint-xl) {
        padding: 0 100px;
      }

      @media (min-width: vars.$breakpoint-tv) {
        padding: 0 260px;
      }
    }

    /* ==================== LOGO ==================== */

    .header__logo {
      height: 100%;
      display: flex;
      align-items: center;
      flex-shrink: 0;
      padding: 1rem 0;
      box-sizing: border-box;
      overflow: visible;

      img {
        height: 100%;
        width: auto;
        aspect-ratio: 82 / 141;
        object-fit: contain;
        transition: height 0.3s ease;
      }

      @media (min-width: 1350px) {
        height: auto;

        img {
          width: 5.125rem;
          height: 8.8125rem;
        }

        // Revert to fluid size when scrolled to fit the smaller header
        :host ::ng-deep .header--scrolled & {
          height: 100%;

          img {
            width: auto;
            height: 100%;
          }
        }
      }
    }

    /* ==================== HAMBURGER MENU BUTTON ==================== */

    .header__hamburger {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 5px;
      width: 40px;
      height: 40px;
      background: none;
      border: none;
      cursor: pointer;
      padding: 6px;
      z-index: 1001;
      position: relative;

      @media (min-width: vars.$breakpoint-lg) {
        display: none;
      }
    }

    .header__hamburger-bar {
      display: block;
      width: 24px;
      height: 2.5px;
      background-color: vars.$text-light;
      border-radius: 2px;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      transform-origin: center;
    }

    // Animate to X when open
    .header__hamburger--open {
      .header__hamburger-bar:nth-child(1) {
        transform: translateY(7.5px) rotate(45deg);
      }
      .header__hamburger-bar:nth-child(2) {
        opacity: 0;
        transform: scaleX(0);
      }
      .header__hamburger-bar:nth-child(3) {
        transform: translateY(-7.5px) rotate(-45deg);
      }
    }

    /* ==================== DESKTOP NAV ==================== */

    .header__nav--desktop {
      display: none;

      @media (min-width: vars.$breakpoint-lg) {
        display: block;
      }
    }

    .header__list {
      display: flex;
      align-items: center;
      gap: 32px;
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .header__link {
      font-family: vars.$font-family-poppins;
      font-weight: 500;
      font-size: 18px;
      line-height: 29.25px;
      color: vars.$text-light;
      text-decoration: none;
      transition: opacity 0.3s ease;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        bottom: -4px;
        left: 0;
        background-color: vars.$primary-red;
        transition: width 0.3s ease;
      }

      &:hover {
        opacity: 0.8;
        &::after {
          width: 100%;
        }
      }
    }

    .header__button-contact {
      background: vars.$primary-red;
      color: vars.$text-light;
      font-family: vars.$font-family-poppins;
      font-weight: 500;
      font-size: 18px;
      line-height: 21.6px;
      letter-spacing: 0.54px;
      padding: 8px 16px;
      border: none;
      border-radius: 8px;
      box-shadow: 4px 4px 8px 0px rgba(0,0,0,0.25);
      cursor: pointer;
      overflow: hidden;
      position: relative;
      z-index: 1;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 0%;
        height: 100%;
        background-color: color-mix(in srgb, #f0070a, black 10%);
        transition: width 0.3s ease;
        z-index: -1;
      }

      &:hover::before {
        width: 100%;
      }
    }

    @media (max-width: 1200px) {
      .header__list {
        gap: 16px;
      }
      .header__link {
        font-size: 16px;
      }
    }

    /* ==================== MOBILE NAV ==================== */

    .header__nav--mobile {
      display: none;

      @media (max-width: calc(vars.$breakpoint-lg - 1px)) {
        display: block;
        position: fixed;
        top: 80px;
        left: 0;
        width: 100%;
        max-height: 0;
        overflow: hidden;
        background: linear-gradient(180deg, vars.$bg-gradient-end 0%, vars.$bg-gradient-start 100%);
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.3);
        opacity: 0;
        transition: max-height 0.4s cubic-bezier(0.645, 0.045, 0.355, 1),
                    opacity 0.3s ease;
        z-index: 999;
      }
    }

    .header__nav--mobile-open {
      max-height: 100vh;
      opacity: 1;
    }

    .header__list--mobile {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      gap: 0;
      padding: 16px 0;
      list-style: none;
      margin: 0;
    }

    .header__link--mobile {
      display: block;
      padding: 16px 32px;
      font-family: vars.$font-family-poppins;
      font-weight: 500;
      font-size: 18px;
      color: vars.$text-light;
      text-decoration: none;
      transition: background-color 0.2s ease;
      position: relative;

      &::after {
        display: none;
      }

      &:hover {
        background-color: rgba(255, 255, 255, 0.08);
        opacity: 1;
      }

      &:focus-visible {
        outline: 2px solid vars.$primary-red;
        outline-offset: -2px;
      }
    }

    .header__button-contact--mobile {
      display: block;
      width: calc(100% - 64px);
      margin: 16px 32px;
      padding: 14px 16px;
      font-size: 18px;
      text-align: center;
      border-radius: 8px;
    }

    // Adjust mobile overlay top position for different header heights on scroll
    @media (max-width: calc(vars.$breakpoint-lg - 1px)) {
      :host ::ng-deep .header--scrolled ~ .header__nav--mobile,
      :host ::ng-deep .header--scrolled .header__nav--mobile {
        top: 64px;
      }

      @media (min-width: vars.$breakpoint-md) {
        .header__nav--mobile {
          top: 90px;
        }

        :host ::ng-deep .header--scrolled ~ .header__nav--mobile,
        :host ::ng-deep .header--scrolled .header__nav--mobile {
          top: 72px;
        }
      }
    }
  `],
  host: {
    '(document:keydown.escape)': 'closeMenu()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  private readonly headerRef = viewChild.required<ElementRef<HTMLElement>>('header');

  mobileMenuOpen = signal(false);

  menuItems = [
    { label: 'Inicio', id: 'hero' },
    { label: 'Nosotros', id: 'nosotros' },
    { label: 'Aliados', id: 'aliados' },
    { label: 'Servicios', id: 'servicios' },
    { label: 'Beneficios', id: 'beneficios' },
    { label: 'Testimonios', id: 'testimonios' }
  ];

  constructor(private router: Router) {
    afterNextRender(() => {
      this.initAnimations();
    });
  }

  toggleMenu() {
    this.mobileMenuOpen.update(open => !open);
  }

  closeMenu() {
    this.mobileMenuOpen.set(false);
  }

  private initAnimations() {
    const header = this.headerRef().nativeElement;

    // Initial Entrance Animation
    gsap.from(header, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });

    // Scroll Animation (Sticky Header)
    ScrollTrigger.create({
      start: 'top top',
      end: 99999,
      onUpdate: (self) => {
        const isScrolled = self.scroll() > 50;
        if (isScrolled) {
          header.classList.add('header--scrolled');
        } else {
          header.classList.remove('header--scrolled');
        }
      }
    });
  }

  scrollTo(event: Event, sectionId: string): void {
    event.preventDefault();

    // If we're already on the home page, perform the custom smooth scroll
    if (this.router.url === '/' || this.router.url.startsWith('/#')) {
      const target = document.getElementById(sectionId);
      if (!target) return;
      const headerHeight = this.headerRef().nativeElement.offsetHeight;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    } else {
      // If we are on another page (e.g. privacy or terms), navigate to home with the fragment
      this.router.navigate(['/'], { fragment: sectionId });
    }
  }
}
