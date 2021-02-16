import { LitElement, html, css } from 'lit-element';

export class WebSeriesForm extends LitElement{
    static get properties(){
        return {
            title:{
                type:String
            },
            director:{
                type:String
            },
            stars:{
                type:String
            },
            streaming:{
                type:String
            }
            
        }

    };

    constructor(){
        super();
        this.title='';
        this.director='';
        this.stars='';
        this.streaming='';

    }

    static get styles() {
        return css`
        .form{
            flex:60%;
            margin-left:10%;
            margin-top:8%;

        }
        p{
            display:inline-block;
        }
        label{
            margin-left:10px;
            margin-bottom:10px;
            width:120px;
            color:whitesmoke;
            font-size:26px;
            text-align: left;
            display:inline-block;
        }
        form input,form select{
            padding:5px;
            margin-left:30px;
            margin-bottom:15px;
            border-radius:5px;
            width:190px;
            border:none;
            outline:none;
        }
        form input:hover{
            cursor: pointer;
            border:1px solid yellow;
        }
        form select:hover{
            border:1px solid yellow;
            cursor: pointer;
        }
        .add{
            text-align:center;
            padding:5px;
            width:70px;
            height:30px;
            margin-top:55px;
            margin-left:25px;
            border-radius:10px;
            font-size:15px;
            background-image: linear-gradient(to bottom, grey,black);
            box-shadow: 0 1px 1px 0 black;
            color:whitesmoke;
            border:none;
            outline:none;
        }
        .add:hover{
            background-color:black;
            opacity:1;
            cursor:pointer;
        }`;
    }

    render(){
        return html`
        <div class="form">
                        <form method="POST" @submit="${this.addShow}">
                            <p>
                            <label for="title">Title:</label>
                            <input type="text" id="title" name="title" required>
                            </p>
                            <br>
                            <p>
                            <label for="stars">Stars:</label>
                            <input type="text" id="stars" name="stars" required>
                            </p>
                            <br>
                            <p>
                            <label for="director">Director:</label>
                            <input type="text" id="director" name="director" required>
                            </p>
                            <br>
                            <p>
                            <label for="streaming">Streaming On:</label> 
                            <select name="streming on" id="streaming">
                                <option value="none" selected>Select</option>
                                <option value="Netflix">Netflix</option>
                                <option value="Amazon Prime">Amazon Prime</option>
                                <option value="Hotstar">Hotstar</option>
                                <option value="MX Player">MX Player</option>
                                <option value="others">Others</option>
                            </select> 
                            </p>
                            <p>
                            <button class="add" type="submit">Add</button>
                            </p>   
                        </form>
                    </div>
                    `;
    }
    }