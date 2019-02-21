import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Check24DropdownComponent } from './check24-dropdown/check24-dropdown.component';
import { CommonModule } from '@angular/common';

// May be we can add more components to the app, who knows?
@NgModule({
    declarations: [
        Check24DropdownComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        Check24DropdownComponent
    ]
})
export class Check24ComponentsModule {}