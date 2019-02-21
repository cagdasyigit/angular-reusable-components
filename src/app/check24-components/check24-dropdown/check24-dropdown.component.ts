import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Check24Combobox } from '../check24-entities/check24-combobox';

@Component({
    selector: 'check24-dropdown',
    templateUrl: './check24-dropdown.component.html',
    styleUrls: ['./check24-dropdown.component.css']
})
export class Check24DropdownComponent implements OnInit {

    @Input('name') name: string;

    @Input('label') label: string;

    @Input('options') options: Check24Combobox[];

    @Input('selectedOption') selectedOption: string;

    @Output('onSelected') onSelected: EventEmitter<string>;

    constructor() {
        this.onSelected = new EventEmitter();
    }

    ngOnInit() {
        if (this.selectedOption == null) {
            this.selectedOption = '';
        }
    }

    onChange(event: Event) {
        const value = event.target['value'];

        this.onSelected.emit(value);
    }

}
