import { Component, AfterViewInit, ElementRef, ViewChild, Renderer2, inject, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-hubspot-form',
  template: `<div #hubspotFormContainer id="hubspot-form"></div>`,
  styles: [`
    :host {
      display: block;
      width: 100%;
      background: white;
    }
    #hubspot-form { 
      width: 100%; 
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HubspotFormComponent implements AfterViewInit {
  private renderer = inject(Renderer2);
  @ViewChild('hubspotFormContainer') formContainer!: ElementRef;


  ngAfterViewInit() {
    // 1. Explicitly clear the innerHTML
    this.formContainer.nativeElement.innerHTML = '';

    // 2. Load and Init HubSpot
    this.loadHubSpotScript().then(() => {
      this.createForm();
    });
  }

  private loadHubSpotScript(): Promise<void> {
    return new Promise((resolve) => {
      // Check if script is already in the document
      if (window.hasOwnProperty('hbspt')) {
        resolve();
        return;
      }

      const script = this.renderer.createElement('script');
      script.src = 'https://js.hsforms.net/forms/v2.js';
      script.type = 'text/javascript';
      script.onload = () => resolve();
      this.renderer.appendChild(document.head, script);
    });
  }

  private createForm() {
    if ((window as any).hbspt) {
      (window as any).hbspt.forms.create({
        portalId: '50394060',
        formId: 'fe58ecf0-8078-480d-922f-a26512ef2a87',
        target: '#hubspot-form' // Or use this.formContainer.nativeElement
      });
    }
  }
}