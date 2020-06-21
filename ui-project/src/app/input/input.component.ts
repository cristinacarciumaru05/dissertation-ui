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

    private doi : string = '';
    private value : string = '0';
    private valueJSON : string = '0'
    onSubmit(){
        console.log("=============================");
        if(this.validateInput(this.doi,this.value,this.valueJSON)) {
            console.log(this.doi);
            console.log(this.value);
            console.log(this.valueJSON);
            this.addToast('Success','success');
        }
    }
    validateInput(doi: string, value: string, valueJSON: string): boolean {
        console.log(this.doi);
        console.log(this.value);
        console.log(this.valueJSON);
        let valid = true;
        if(doi == '' || this.validateDOI(doi) == false) {
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
    validateDOI(doi: string) {
        let array = [];
        array = doi.split('/');
        if(array.length != 2 || array[0].length == 0 || array[1].length == 0) {
            return false;
        }
        return true;
    }
}