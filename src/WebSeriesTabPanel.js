import { html, css, LitElement } from '@lion/core';

export class WebSeriesTabPanel extends LitElement {
  static get styles() {
    return css`
        :host {
         min-height:100vh; 
        }
        ::slotted(.home){
        background-image:url('./images/indeximg.jpg');
        min-height:100vh;
      } 
      ::slotted(*){
        min-height:100vh;
      }
      `; 
  }

  render(){
    return html`
    <slot></slot>
    `;
  }
}