import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Input } from '../dto/Input';
import { AppService } from '../app-service';
import { Results } from '../dto/Results';
import { IfStmt } from '@angular/compiler';

@Component({
    selector: 'app-input-component',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss']
})

export class InputComponent {
    blockedPanel = true;
    value1: number = 0;
    public result: Results = null;

    constructor(private service: AppService,
        private messageService: MessageService) {

    }

    private doi: string = '';
    private value: string = '0';
    private valueJSON: string = '1'

    onSubmit() {

        if (this.validateInput(this.doi, this.value, this.valueJSON)) {
            this.blockedPanel = true;
            let input = new Input();
            input.doi1 = this.doi.split('/')[0];
            input.doi2 = this.doi.split('/')[1];
            input.computedForCS = this.value == '1' ? false : true;
            input.showJson = this.valueJSON == '1' ? false : true;

            this.service.test(input).subscribe(str => {
                this.result = str;
                this.blockedPanel = false;
                console.log(this.result);
            });

            this.addToast('Success', 'success');
        }
    }
    reset() {
        if (this.doi == '' && this.value == '0') {
            this.addToast('No fields to be reseted', 'warn');
        } else {
            this.doi = '';
            this.value = '0';
            this.valueJSON = '1';
            this.blockedPanel = true;
            this.result = null;
            this.addToast('The fields were reseted', 'warn');
        }
    }
    validateInput(doi: string, value: string, valueJSON: string): boolean {
        let valid = true;
        if (doi == '' || this.validateDOI(doi) == false) {
            valid = false;
            this.addToast('Wrong input for DOI', 'error');
        }
        if (value == '0') {
            valid = false;
            this.addToast('Please select a value for Computed for Computer Science', 'error');
        }

        return valid;
    }
    addToast(msg: string, severity: string) {
        this.messageService.add({ severity: severity, summary: severity.toLocaleUpperCase(), detail: msg });
    }
    validateDOI(doi: string) {
        let array = [];
        array = doi.split('/');
        if (array.length != 2 || array[0].length == 0 || array[1].length == 0) {
            return false;
        }
        return true;
    }
}