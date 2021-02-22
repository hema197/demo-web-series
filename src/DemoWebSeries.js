import { LitElement, html, css } from 'lit-element';
import './web-series-form.js';
import './web-series-overview.js';

export class DemoWebSeries extends LitElement {
  // static get properties(){
  //   return {
  //       shows:{
  //         type:Array
  //       }
  //     }
  // };

  constructor(){
    super();
    this.shows=[
        {title:"F.R.I.E.N.D.S", director:"David Crane", stars:"Mathew Perry", streamingPlatform:"Netflix"},
        {title:"Big Bang Theory", director:"Mark Cendrowski", stars:"Jim parsons", streamingPlatform:"Netflix"},
        {title:"Tripling", director:"Sumeet Saxena", stars:"Sumeet Vyas", streamingPlatform:"Amazon Prime"},
        {title:"Mismatched" ,director:"Akarsh Khurana", stars:"Prajakta Koli", streamingPlatform:"Netflix"},
        {title:"Money Heist", director:"Jesus Colmenar", stars:"Alvaro Morte", streamingPlatform:"Netflix"},
        {title:"Panchayat", director:"Deepak Kumar Mishra", stars:"Jitendra Kumar", streamingPlatform:"Hotstar"}

    ];
}

  static get styles(){
    return css`
    *{
      padding:0;
      margin:0;
      box-sizing:border-box;
    }
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
      }
    `;
  }

  _addShow(e){
    const show={
      title:e.detail.t,
      stars:e.detail.s,
      director:e.detail.d,
      streamingPlatform:e.detail.st

    };
    this.shows=[show, ...this.shows]
  }

  render() {
    return html`
    <h1>Web Series</h1>
    <div class="content">
    <web-series-form @add-show=${this._addShow}></web-series-form>
    <web-series-overview
    .shows=${this.shows}>
    </web-series-overview>
    </div>
     `;
    
  }
}