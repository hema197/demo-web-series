import {LitElement, html, css} from 'lit-element';

export class WebSeriesCard extends LitElement{
    static get poperties(){
        return{
            index:{
                type:Number
            },
            title:{
                type:String,
                reflect:true
            },
            stars:{
                type:String,
                reflect:true
                
            },
            director:{
                type:String,
                reflect:true
            },
            streamingPlatform:{
                type:String,
                reflect:true
            }
        }
    }

    constructor(){
        super();
        this.title='';
        this.stars='';
        this.director='';
        this.streamingPlatform='';
    }


    static get styles(){
        return css`
        :host{
            border:1px solid black;
            border-radius:5px;
            width:235px;
            height:150px;
            margin:0 5px 30px 5px;
            background-color:black;
            opacity:0.5;
            color:white;
            box-shadow: 0 1px 1px yellow ;
        }
        .show{
            height:73%;
        }
        ul{
            list-style-type:none;
            padding-left:8px;
        }
        li{
            margin-bottom:3px;
        }
        .delete{
            width:50%;
            margin-left:25%;
            margin-right:25%;
            text-align:center;
            background-color:yellow;
            color:black;
            margin-top:auto;
            border-radius:20px;
        }
        `;     
    }

    render(){
        return html`
        <div class="show">
        <ul>
            <li><span>Title:</span> <span class="tvalue">${this.title}</span></li>
            <li><span>Director:</span> <span>${this.director} </span></li>
            <li><span>Stars:</span> <span>${this.stars}</span></li>
            <li><span>Streaming On:</span> <span>${this.streamingPlatform}</span></li>
        </ul>
        </div>
        <div class="delete">
            Delete    
    </div>`;
    }
}

