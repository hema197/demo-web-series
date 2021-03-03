import {Validator} from '@lion/form-core';

const checkRegex=/^[A-Za-z ]+$/;
export class FieldValidator extends Validator{
    static get validatorName(){
        return 'FieldValidator';
    }

    // eslint-disable-next-line class-methods-use-this
    execute(value){
        let hasFeedback =false;
        if(!checkRegex.test(value.trim())){
            hasFeedback=true;
        }
        return hasFeedback;
    }

    static getMessage(){
        return `Please enter a valid name, numeric characters not allowed`;
    }

}