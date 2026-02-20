import { Directive, ElementRef, input, afterNextRender, DestroyRef, inject } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Directive({
    selector: '[appParallax]'
})
export class ParallaxDirective {
    /** Total Y displacement in pixels (default 80) */
    readonly appParallaxDistance = input(80);

    private readonly el = inject(ElementRef);
    private readonly destroyRef = inject(DestroyRef);

    constructor() {
        afterNextRender(() => {
            this.initParallax();
        });
    }

    private initParallax(): void {
        const element = this.el.nativeElement as HTMLElement;
        const distance = this.appParallaxDistance();

        const tween = gsap.to(element, {
            y: distance,
            ease: 'none',
            scrollTrigger: {
                trigger: element,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });

        this.destroyRef.onDestroy(() => {
            tween.scrollTrigger?.kill();
            tween.kill();
        });
    }
}
