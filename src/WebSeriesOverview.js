import { LitElement, html, css } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';
import './web-series-card.js'


export class WebSeriesOverview extends LitElement{
        static get properties(){
             return {
                 shows:{
                     type:Array,
                     
                 }
             };
        }

        constructor(){
            super();
            this.shows=[];
        }

        static get styles(){
            return css`
            :host{
            margin-left:20%;
            margin-right:20%;
            min-height:100%;
             }
             #shows{
                 list-style-type:none;
                 margin-top:30px;
                 display: flex;
                 flex-flow:row wrap; 
             }
            .cards-content{
                width:100%;
                min-height:100%;
            }
          `;  
        }
        
        render(){
        return html`
        <div class="cards-content">
        <ul id="shows">
        ${repeat(this.shows,show=>show.title,(show, index)=>
        html`
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
