import { LitElement, html, css } from 'lit-element';
import './web-series-form.js';
import './web-series-overview.js';

export class DemoWebSeries extends LitElement {
  static get styles(){
    return css`
    :host{
          display: flex;
          flex-direction: column;
          min-height:100vh;
          background-image: url('./images/bgimg.jpg');
        }
    h1{
          text-align: center;
          color: whitesmoke;
          background-image: linear-gradient(to right, rgba(58, 56, 56, 0), rgb(15, 15, 15));
      }

    .content{
                display: flex;
                flex-grow:1;
            }`;
  }

  render() {
    return html`
    <h1>Web Series</h1>
    <div class="content">
    <web-series-form></web-series-form>
    <web-series-overview></web-series-overview>
    </div>
     `;
    
  }
}
