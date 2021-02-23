import { css, html, LitElement } from '@lion/core';

export class WebSeriesTab extends LitElement {
  static get styles() {
    return css`
      :host {
        text-shadow: 0 1px 0 rgba(0, 0, 0, 0.5);
        color: #fff;
        float: left;
        font-style:bold;
        height: 30px;
        padding: 6px 30px;
        text-decoration: none;
        margin-top:0;
        border:none;
        outline:none;
      }
      :host(:hover) {
        background: #ABE2F7;
        border-radius:4px;
        color:#222;
        cursor:pointer;  
      }
      :host(:focus) {
        border-radius: 4px; 
      }
      :host([selected]) {
        background-color:#ABE2F7;
        opacity:0.7;
        text-shadow: 0 0.7px 0 rgba(#ABE2F7,0.5);;
        color: black;
      }
    `;
  }

  render() {
    return html`<slot></slot>`;
  }
}