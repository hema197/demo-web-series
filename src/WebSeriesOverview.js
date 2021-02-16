import { LitElement, html, css } from 'lit-element';

export class WebSeriesOverview extends LitElement{
        static get styles(){
            return css`
            .cards-content{
                flex:40%;
                border-left:2px solid yellow;
            }`;
            
        }

        render(){
        return html`
        <div class="cards-content">
        <div class="cards"></div>
        </div>   
        `;
    }
    
}