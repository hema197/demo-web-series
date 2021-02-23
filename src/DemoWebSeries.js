import { LitElement, html, css } from 'lit-element';
import './web-series-form.js';
import './web-series-overview.js';
import './web-series-tab.js';
import './web-series-tab-panel.js';
import './web-series-tabs.js';

export class DemoWebSeries extends LitElement {
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
     :host{
          padding:0;
          margin:0;
          box-sizing:border-box;
          min-height:100vh;
        }
        header{
         padding:0;
         margin:0;
         background-image:url('./images/headerimg.jpg');
        
        } 
    h1{
          padding:0;
          margin:0;
          text-align: left;
          color: black;
          font-family: 'Lobster', cursive;
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
    <header>
    <h1>Web Series</h1>
    </header>
    <web-series-tabs>
    <web-series-tab slot="tab">Home</web-series-tab>>
    <web-series-tab-panel slot="panel"><section class="home"></section></web-series-tab-panel>
    <web-series-tab slot="tab">Shows</web-series-tab>
    <web-series-tab-panel slot='panel'>
    <web-series-overview .shows=${this.shows}>
    </web-series-overview>
    </web-series-tab-panel>
    <web-series-tab slot="tab">Add show</web-series-tab>
    <web-series-tab-panel slot="panel">
    <web-series-form  @add-show=${this._addShow}>
    </web-series-form>
    </web-series-tab-panel>
    </web-series-tabs>
     `;
    
  }
}