import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Check24DropdownComponent } from './check24-dropdown.component';

describe('Check24DropdownComponent', () => {
    let component: Check24DropdownComponent;
    let fixture: ComponentFixture<Check24DropdownComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [Check24DropdownComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(Check24DropdownComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
