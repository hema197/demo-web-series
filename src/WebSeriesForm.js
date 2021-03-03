import {ScopedElementsMixin, LitElement, html, css} from '@lion/core';
import {LionForm} from  '@lion/form';
import {LionButton} from '@lion/button';
import {LionInput} from '@lion/input';
import {LionSelect} from '@lion/select';
import {Required} from '@lion/form-core';
import {FieldValidator} from './FieldValidator.js'

export class  WebSeriesForm extends ScopedElementsMixin(LitElement){
    static get scopedElements(){
        return{
            'lion-form':LionForm,
            'lion-input':LionInput,
            'lion-button':LionButton,
            'lion-select':LionSelect
        };
    }

    static get styles(){
        return css
            `   
            .form{
                width:30%;
                height:53vh;
                margin:3% 45% 0 25%;
                padding:20px;
                box-shadow:2px 3px 3px 3px #1dbfff;
            
            }
              input,select{
                border:1px solid black;
                border-radius:5px;
                padding:2px;
                margin-bottom:12px;
                width:60%;
                display:block;
            }
            input:hover{
                box-shadow:0.5px 0.5px 0.7px 0.5px #1dbfff;
                border:none;
                outline:none;
                cursor:pointer;
            }
            select:hover{
                box-shadow:0.5px 0.5px 0.7px 0.5px #1dbfff;
                border:none;
                outline:none;
                cursor:pointer;
            }
            input:focus{
                box-shadow:1px 1px 1px 1px #1dbfff;
            }
            input:blur{
                box-shadow:1px 1px 1px 1px #1dbfff;
            }
            input:invalid{
                border:none;
                box-shadow:1px 1px 1px 1px red;
            }
        
            .add{
                background:#1dbfff;
                color:white;
                border:none;
                outline:none;
                border-radius:5px;
                margin-left:35%;
                margin-top:10%;
                width:26%;
                padding-left:10%;
                
            }
            .add:hover{
                color:white;
                background:black;
                opacity:0.5;
                font-style:bold;
                cursor:pointer;
                font-weight:400px;
            }`
        } 
         
    // eslint-disable-next-line class-methods-use-this
    submitHandler(ev){
        if(ev.target.hasFeedbackFor.includes('error')){
            const errorEl=ev.target.formElements.find(el=>
                el.hasFeedbackFor.includes('error'));
        errorEl.focus();
        return;
    }
    else{
        const data=ev.target.serializedValue;
        const eventDetails=data;
        this.dispatchEvent(new CustomEvent('add-show', {detail:eventDetails}));
        ev.target.reset();
        
    }
};   

    render(){
        return html`
        <lion-form class="form" @submit=${this.submitHandler}>
        <form class="inside">
        <lion-input class="field"
        name="title" label="Title:" .validators="${[new Required(null,{getMessage:()=>'Title is required'}), new FieldValidator()]}">
        </lion-input>
        <lion-input class="field"
        name="stars" label="Stars:" .validators="${[new Required(null,{getMessage:()=>'Stars is required'}), new FieldValidator()]}">
        </lion-input>
        <lion-input class="field"
        name="director" label="Director:" .validators="${[new Required(null,{getMessage:()=>'Director is required'}), new FieldValidator()]}">
        </lion-input>
        <lion-select name="streaming" label="Straming Platform:"  .validators="${[new Required(null,{getMessage:()=>'Please select an option.'})]}">
        <select slot="input">
        <option value="null" selected>Select</option>
        <option value="Netflix">Netflix</option>
        <option value="Amazon Prime">Amazon Prime</option>
        <option value="MX Player">MX Player</option>
        <option value="Hotstar">Hotstar</option>
        </select>
        </lion-select>
        <lion-button type="submit" class="add" raised>Add</lion-button>
        </form>
        </lion-form>`;
    }

}