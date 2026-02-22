import { Directive, ElementRef, input, afterNextRender, DestroyRef, inject } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Directive({
    selector: '[appReveal]'
})
export class RevealDirective {
    /** Delay in seconds before the animation starts */
    readonly appRevealDelay = input(0);

    private readonly el = inject(ElementRef);
    private readonly destroyRef = inject(DestroyRef);

    constructor() {
        afterNextRender(() => {
            const init = () => this.initAnimation();
            if ('requestIdleCallback' in window) {
                (window as any).requestIdleCallback(init);
            } else {
                setTimeout(init, 50);
            }
        });
    }

    private initAnimation(): void {
        const element = this.el.nativeElement as HTMLElement;
        const delay = this.appRevealDelay() / 1000; // convert ms to seconds

        const tween = gsap.from(element, {
            y: 30,
            opacity: 0,
            duration: 0.7,
            delay,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: element,
                start: 'top 85%',
                end: 'top 20%',
                toggleActions: 'restart none none reset'
            }
        });

        this.destroyRef.onDestroy(() => {
            tween.scrollTrigger?.kill();
            tween.kill();
        });
    }
}
