import { Component } from '@angular/core';
import { Check24Combobox } from './check24-components/check24-entities/check24-combobox';
import { isObject } from 'util';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    options1: Check24Combobox[];

    options2: Check24Combobox[];

    options3: Check24Combobox[];

    constructor() {
        this.options1 = [{
            code: '1-1',
            displayValue: 'Selection 1'
        }, {
            code: '1-2',
            displayValue: 'Selection 2'
        }, {
            code: '1-3',
            displayValue: 'Selection 3'
        }];

        this.options2 = [{
            code: '2-1',
            displayValue: 'Selection 1'
        }, {
            code: '2-2',
            displayValue: 'Selection 2'
        }, {
            code: '2-3',
            displayValue: 'Selection 3'
        }];

        this.options3 = [{
            code: '3-1',
            displayValue: 'Selection 1'
        }, {
            code: '3-2',
            displayValue: 'Selection 2'
        }, {
            code: '3-3',
            displayValue: 'Selection 3'
        }];
    }

    onOption3Selected(value) {
        const selectedOption = this.options3.find(option => option.code === value);

        alert(JSON.stringify(selectedOption));
    }
}
