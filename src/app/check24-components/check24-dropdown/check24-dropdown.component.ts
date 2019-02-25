import { Component, Input, Output, EventEmitter, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Check24Combobox } from '../check24-entities/check24-combobox';

@Component({
    selector: 'check24-dropdown',
    templateUrl: './check24-dropdown.component.html',
    styleUrls: ['./check24-dropdown.component.scss']
})
export class Check24DropdownComponent implements OnInit {

    @Input() name: string;

    @Input() label: string;

    @Input() options: Check24Combobox[];

    @Input() selectedOption: string;

    @Output() selected: EventEmitter<string>;

    public focused = false;

    public selection = '';

    constructor() {
        this.selected = new EventEmitter();
    }

    ngOnInit() {
        if (this.selectedOption == null) {
            this.selectedOption = '';
        } else {
            this.selection = this.selectedOption;
        }
    }

    onChange(code) {
        this.selected.emit(code);
    }

    onClickSelect() {
        this.focused = !this.focused;
    }

    onClickOption(code: string) {
        this.selectedOption = code;
        this.selection = code;
        this.onChange(code);
    }

    onKeydownSelect(event) {
        switch (event.code.toLowerCase()) {
            case 'enter':
            case 'space':
                this.focused = !this.focused;
                this.selectedOption = this.selection;
                this.onChange(this.selectedOption);
                break;

            case 'arrowdown':
                this.moveSelection('next');
                break;

            case 'arrowup':
                this.moveSelection('back');
                break;

            case 'escape':
                this.focused = false;
                break;
        }
    }

    moveSelection(step: 'back' | 'next') {
        // Options must be an array with items
        if (this.options != null && this.options.length > 0) {
            this.focused = true;

            // If nothing selected yet
            if (this.selection === '') {
                switch (step) {
                    case 'next':
                        this.selection = this.options[0].code;
                        break;

                    case 'back':
                        this.selection = this.options[this.options.length - 1].code;
                        break;
                }
            } else {
                // Or moving to another
                const currentIndex = this.options.findIndex(option => option.code === this.selection);
                const nextIndex = currentIndex + 1;
                const backIndex = currentIndex - 1;

                switch (step) {
                    case 'next':
                        if (this.options.length > nextIndex) {
                            this.selection = this.options[nextIndex].code;
                        } else {
                            this.selection = this.options[0].code;
                        }

                        break;

                    case 'back':
                        if (backIndex > -1) {
                            this.selection = this.options[backIndex].code;
                        } else {
                            this.selection = this.options[this.options.length - 1].code;
                        }

                        break;
                }
            }
        }
    }
}

@Pipe({ name: 'selectedValue' })
export class Check24DropdownPipe implements PipeTransform {
    transform(options: Check24Combobox[], code: string): string {
        const selectedOption = options.find(option => option.code === code);
        return selectedOption != null ? selectedOption.displayValue : 'Please select an option';
    }
}
