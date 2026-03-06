import { Component, AfterViewInit, ElementRef, ViewChild, Renderer2, inject, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-hubspot-form',
  template: `
    <div 
      class="hs-form-frame" 
      #hubspotFormContainer
      data-region="na1" 
      data-form-id="fe58ecf0-8078-480d-922f-a26512ef2a87" 
      data-portal-id="50394060">
    </div>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
      background: white;
    }
    .hs-form-frame { 
      width: 100%; 
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HubspotFormComponent implements AfterViewInit {
  private renderer = inject(Renderer2);
  @ViewChild('hubspotFormContainer') formContainer!: ElementRef;


  ngAfterViewInit() {
    this.loadHubSpotScript();
    this.initHubSpotEvents();
  }

  private initHubSpotEvents() {
    const w = window as any;
    w.dataLayer = w.dataLayer || [];

    const onConversationsAPIReady = () => {
      w.HubSpotConversations.on('conversationStarted', () => {
        w.dataLayer.push({ 'event': 'chat_conversation_started' });
      });
      w.HubSpotConversations.on('contactAssociated', () => {
        w.dataLayer.push({ 'event': 'chat_contact_associated' });
      });
    };

    w.hsConversationsSettings = {};

    if (w.HubSpotConversations) {
      onConversationsAPIReady();
    } else {
      w.hsConversationsOnReady = [onConversationsAPIReady];
    }

    window.addEventListener('hs-form-event:on-ready', () => {
      w.dataLayer.push({ 'event': 'form_ready' });
    });

    window.addEventListener('hs-form-event:on-submission:success', (e: any) => {
      w.dataLayer.push({ 'form_id': e.detail?.formId, 'event': 'form_submit' });
    });
  }

  private loadHubSpotScript() {
    // Check if script is already in the document
    const scriptId = 'hubspot-form-script';
    if (document.getElementById(scriptId)) {
      return;
    }

    const script = this.renderer.createElement('script');
    script.id = scriptId;
    script.src = 'https://js.hsforms.net/forms/embed/50394060.js';
    script.type = 'text/javascript';
    script.defer = true;
    this.renderer.appendChild(document.head, script);
  }
}