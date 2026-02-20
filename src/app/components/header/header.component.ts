import { Component, ChangeDetectionStrategy, signal, ElementRef, viewChild, afterNextRender } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <header #header class="header">
      <div class="header__container">
        <div class="header__logo">
          <img src="https://www.figma.com/api/mcp/asset/53dd4f92-def4-43f1-8dba-5f10b944cd0a" alt="Finex Promotores">
        </div>
        <nav class="header__nav" aria-label="Navegación principal">
          <ul class="header__list">
            @for (item of menuItems; track item.link) {
              <li class="header__item">
                <a [href]="item.link" class="header__link">{{ item.label }}</a>
              </li>
            }
            <li class="header__item">
              <button class="header__button-contact">Contacto</button>
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
      height: 100px;
      overflow: hidden; // Force containment
      display: flex;
      // align-items removed to allow stretch
      background: linear-gradient(90deg, vars.$bg-gradient-start 0%, vars.$bg-gradient-end 100%);
      box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
      transition: all 0.3s ease;

      &.header--scrolled {
         height: 80px;
      }

      @media (min-width: vars.$breakpoint-tv) {
        height: 173px; // Altura original solo en TVs/4K
        
        &.header--scrolled {
           height: 100px;
        }
      }
    }

    .header__container {
      width: 100%;
      height: 100%; // Ensure container takes full header height
      max-width: 1920px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;

      @media (min-width: vars.$breakpoint-xl) {
        padding: 0 100px;
      }

      @media (min-width: vars.$breakpoint-tv) {
        padding: 0 260px;
      }
    }

    .header__logo {
        height: 100%;
        max-width: 400px;
        display: flex;
        align-items: center;
        overflow: hidden;

      img {
        width: 82px;
        height: 141px;
        object-fit: contain;
      }
    }

    @media (min-width: vars.$breakpoint-tv) {
      .header__logo img {
        max-height: 173px;
      }
    }

    .header__nav {
      @media (max-width: vars.$breakpoint-lg) {
        display: none; // TODO: Implementar menú hamburguesa si se requiere
      }
    }

    // Scrolled state styles applied via class or GSAP
    :host ::ng-deep .header--scrolled .header__logo img {
       height: 100%;
    }

    .header__list {
      display: flex;
      align-items: center;
      gap: 32px; // Figma Gap
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
        background-color: color-mix(in srgb, #f0070a, black 10%); // Darker Red
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

    @media (max-width: 1024px) {
      .header__nav {
        display: none; // TODO: Mobile Menu
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  private readonly headerRef = viewChild.required<ElementRef<HTMLElement>>('header');

  menuItems = [
    { label: 'Inicio', link: '#hero' },
    { label: 'Nosotros', link: '#nosotros' },
    { label: 'Aliados', link: '#aliados' },
    { label: 'Servicios', link: '#servicios' },
    { label: 'Beneficios', link: '#beneficios' },
    { label: 'Testimonios', link: '#testimonios' }
  ];

  constructor() {
    afterNextRender(() => {
      this.initAnimations();
    });
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
}
