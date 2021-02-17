import { LitElement, html, css } from 'lit-element';
import './web-series-card.js'

export class WebSeriesOverview extends LitElement{
        static get properties(){
             return {
                 shows:{
                     type:Array
                 }
             };
        }

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
            display:flex;
            flex-grow:1;
            flex-basis:40%;
             }
             #shows{
                 list-style-type:none;
                 margin-top:20px;
                 display: flex;
                 flex-flow:row wrap;
             }

            .cards-content{
                width:100%;
                border-left:2px solid yellow;
            }
          `;  
        }

        render(){
        return html`
        <div class="cards-content">
        <ul id="shows">
        ${this.shows.map((show, index)=>html`
        <web-series-card
        .index=${index}
        .title=${show.title}
        .stars=${show.stars}
        .director=${show.director}
        .streamingPlatform=${show.streamingPlatform}>
        </web-series-card>`
        )}
        </ul> 
        </div>  
        `;
    }
    
}