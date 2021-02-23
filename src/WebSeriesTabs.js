import { css } from '@lion/core';
import { LionTabs } from '@lion/tabs';

export class WebSeriesTabs extends LionTabs {
  static get styles() {
    return [
      super.styles,
      css`
      :host {
       display: block;
       margin:0;  
      }
      .tabs__tab-group{
        background-color:#47C6E6;
      }
    `];
  }

  connectedCallback(){
    super.connectedCallback();
  }
    
  }
