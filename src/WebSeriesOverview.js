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
        const showsRender=this.shows.slice(0,6);
        return html`
        <div class="cards-content">
        <ul id="shows">
        ${repeat(showsRender,show=>show.title,(show, index)=>
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