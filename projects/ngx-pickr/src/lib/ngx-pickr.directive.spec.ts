import {NgxPickrDirective} from './ngx-pickr.directive';
import {Component} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NgxPickrModule} from 'ngx-pickr';

@Component({
    template: '<div ngxPickr></div>'
})
class TestPickrComponent {
}

describe('NgxPickrDirective', () => {
    let component: TestPickrComponent;
    let fixture: ComponentFixture<TestPickrComponent>;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [
                NgxPickrModule
            ],
            declarations: [
                TestPickrComponent
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestPickrComponent);

        component = fixture.componentInstance;
    });

    it('should compile', () => {
        expect(component).toBeTruthy();
    });

});
