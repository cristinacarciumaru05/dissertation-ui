import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-input-component',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss']
})

export class InputComponent{

    constructor(private messageService: MessageService){

    }

    private doi ='';
    private value ='0';
    private valueJSON ='0'
    onSubmit(){
        console.log("=============================");
        if(this.validateInput(this.doi,this.value,this.valueJSON)) {
            console.log(this.doi);
            console.log(this.value);
            console.log(this.valueJSON);
            this.addToast('Success','success');
        }
    }
    validateInput(doi: String, value: String, valueJSON: String): boolean {
        console.log(this.doi);
        console.log(this.value);
        console.log(this.valueJSON);
        let valid = true;
        if(doi == '' ) {
            console.log('Wrong input for DOI');
            valid = false;
            this.addToast('Wrong input for DOI','error');
        }
        if(value == '0') {
            console.log('Please select a value');
            valid = false;
            this.addToast('Please select a value','error');
        }
        if(valueJSON == '0') {
            console.log('Please select a value for JSON');
            valid = false;
            this.addToast('Please select a value for JSON','error');
        }

        return valid;
    }
    addToast(msg:string, severity: string) {
            this.messageService.add({severity:severity, summary:'Service Message', detail:msg});
    }
}