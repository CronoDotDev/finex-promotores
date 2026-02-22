import { NgOptimizedImage } from "@angular/common";
import { Component, ChangeDetectionStrategy, signal, ElementRef, viewChild, afterNextRender } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-header',
  imports: [RouterLink, NgOptimizedImage],
  template: `
    <header #header class="header">
      <div class="header__container">
        <div class="header__logo">
          <a routerLink="/"><img ngSrc="assets/images/layout/logo-header.webp" alt="Finex Promotores" width="90" height="155" priority></a>
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
      position: fixed; top: 0; left: 0; width: 100%; z-index: 1000; height: 80px; overflow: visible; display: flex;
      background: linear-gradient(90deg, vars.$bg-gradient-start, vars.$bg-gradient-end); box-shadow: 0 4px 4px 0 rgba(0,0,0,0.25); transition: height 0.3s;
      /* &--scrolled { height: 64px; } */
    }
    .header__container { width: 100%; height: 100%; max-width: 1920px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; padding: 0 20px; position: relative; }
    .header__logo { height: 100%; display: flex; align-items: center; flex-shrink: 0; padding: 1rem 0; box-sizing: border-box; overflow: visible; a { height: 100%; display: block; } img { height: 100%; width: auto; aspect-ratio: 82/141; object-fit: contain; transition: height 0.3s; } }
    .header__hamburger { display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 5px; width: 40px; height: 40px; background: none; border: none; cursor: pointer; padding: 6px; z-index: 1001; position: relative; }
    .header__hamburger-bar { display: block; width: 24px; height: 2.5px; background: vars.$text-light; border-radius: 2px; transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1); transform-origin: center; }
    .header__hamburger--open .header__hamburger-bar:nth-child(1) { transform: translateY(7.5px) rotate(45deg); }
    .header__hamburger--open .header__hamburger-bar:nth-child(2) { opacity: 0; transform: scaleX(0); }
    .header__hamburger--open .header__hamburger-bar:nth-child(3) { transform: translateY(-7.5px) rotate(-45deg); }
    .header__nav--desktop { display: none; }
    .header__list { display: flex; align-items: center; gap: 32px; list-style: none; padding: 0; margin: 0; }
    .header__link { font: 500 18px/29.25px vars.$font-family-poppins; color: vars.$text-light; text-decoration: none; transition: opacity 0.3s; position: relative; }
    .header__link::after { content: ''; position: absolute; width: 0; height: 2px; bottom: -4px; left: 0; background: vars.$primary-red; transition: width 0.3s; }
    .header__link:hover { opacity: 0.8; &::after { width: 100%; } }
    .header__button-contact { background: vars.$primary-red; color: vars.$text-light; font: 500 18px/21.6px vars.$font-family-poppins; letter-spacing: 0.54px; padding: 8px 16px; border: none; border-radius: 8px; box-shadow: 4px 4px 8px 0 rgba(0,0,0,0.25); cursor: pointer; overflow: hidden; position: relative; z-index: 1; }
    .header__button-contact::before { content: ''; position: absolute; top: 0; left: 0; width: 0; height: 100%; background: color-mix(in srgb, vars.$primary-red, black 10%); transition: width 0.3s; z-index: -1; }
    .header__button-contact:hover::before { width: 100%; }
    .header__nav--mobile { display: none; }
    .header__nav--mobile-open { max-height: 100vh; opacity: 1; }
    .header__list--mobile { display: flex; flex-direction: column; align-items: stretch; gap: 0; padding: 16px 0; list-style: none; margin: 0; }
    .header__link--mobile { display: block; padding: 16px 32px; font: 500 18px vars.$font-family-poppins; color: vars.$text-light; text-decoration: none; transition: background-color 0.2s; position: relative; }
    .header__link--mobile::after { display: none; }
    .header__link--mobile:hover { background: rgba(255,255,255,0.08); opacity: 1; }
    .header__link--mobile:focus-visible { outline: 2px solid vars.$primary-red; outline-offset: -2px; }
    .header__button-contact--mobile { display: block; width: calc(100% - 64px); margin: 16px 32px; padding: 14px 16px; font-size: 18px; text-align: center; border-radius: 8px; }

    @media (max-width: calc(vars.$breakpoint-lg - 1px)) {
      .header__nav--mobile { display: block; position: fixed; top: 80px; left: 0; width: 100%; max-height: 0; overflow: hidden; background: linear-gradient(180deg, vars.$bg-gradient-end, vars.$bg-gradient-start); box-shadow: 0 8px 16px 0 rgba(0,0,0,0.3); opacity: 0; transition: max-height 0.4s cubic-bezier(0.645,0.045,0.355,1), opacity 0.3s; z-index: 999; }
      /* .header--scrolled .header__nav--mobile { top: 64px; } */
    }
    @media (max-width: calc(vars.$breakpoint-lg - 1px)) and (min-width: vars.$breakpoint-md) {
      .header__nav--mobile { top: 90px; }
      /* .header--scrolled .header__nav--mobile { top: 72px; } */
    }
    @media (max-width: 1200px) { .header__list { gap: 16px; } .header__link { font-size: 16px; } }
    @media (min-width: vars.$breakpoint-md) {
      .header { height: 90px; } /* .header.header--scrolled { height: 72px; } */ .header__container { padding: 0 40px; }
    }
    @media (min-width: vars.$breakpoint-lg) {
      .header { height: 100px; } /* .header.header--scrolled { height: 80px; } */ .header__hamburger { display: none; } .header__nav--desktop { display: block; }
    }
    @media (min-width: vars.$breakpoint-xl) { .header__container { padding: 0 100px; } }
    @media (min-width: vars.$breakpoint-tv) { .header { height: 173px; } /* .header.header--scrolled { height: 100px; } */ .header__container { padding: 0 260px; } }
    @media (min-width: 1350px) {
      .header { height: 10.8125rem; } /* .header.header--scrolled { height: 5rem; } */
      .header__logo { height: auto; } .header__logo a { height: auto; } .header__logo img { width: 5.125rem; height: 8.8125rem; }
      /* .header--scrolled .header__logo { height: 100%; a { height: 100%; } img { width: auto; height: 100%; } } */
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
      const init = () => this.initAnimations();
      if ('requestIdleCallback' in window) {
        (window as any).requestIdleCallback(init);
      } else {
        setTimeout(init, 50);
      }
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

    // Scroll Animation (Sticky Header) - Commented out as per client request
    /*
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
    */
  }

  scrollTo(event: Event, sectionId: string): void {
    event.preventDefault();

    // If we're already on the home page, perform the custom smooth scroll
    if (this.router.url === '/' || this.router.url.startsWith('/#')) {
      const target = document.getElementById(sectionId);
      if (!target) return;
      requestAnimationFrame(() => {
        const headerHeight = this.headerRef().nativeElement.offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      });
    } else {
      // If we are on another page (e.g. privacy or terms), navigate to home with the fragment
      this.router.navigate(['/'], { fragment: sectionId });
    }
  }
}
