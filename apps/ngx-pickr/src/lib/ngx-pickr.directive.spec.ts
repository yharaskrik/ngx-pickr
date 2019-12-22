import {NgxPickrDirective} from './ngx-pickr.directive';
import {createComponentFactory, createDirectiveFactory, Spectator, SpectatorDirective} from '@ngneat/spectator/jest';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Component, ElementRef, ViewChild} from '@angular/core';
import {NgxPickrModule} from './ngx-pickr.module';
import Pickr from '@simonwep/pickr';
import {CommonModule} from '@angular/common';

describe('NgxPickrDirective', () => {

    let instance: NgxPickrDirective;

    describe('No Form', () => {
        let spectator: SpectatorDirective<NgxPickrDirective>;

        const createDirective = createDirectiveFactory({
            directive: NgxPickrDirective,
            imports: [
                ReactiveFormsModule,
                FormsModule
            ]
        });

        beforeEach(() => {
            spectator = createDirective(`<div [(ngModel)]="field" ngxPickr></div>`);
        });

        it('should compile', () => {
            instance = spectator.directive;
            expect(instance).toBeTruthy();
        });
    });

    describe('Reactive Forms', () => {

        let spectator: Spectator<TestComponent>;

        @Component({
            selector: 'ngx-test-component',
            template: `
                <form [formGroup]="form">
                    <div #colorDiv [style.backgroundColor]="color" ngxPickr (change)="color = $event" formControlName="color"></div>
                </form>
            `
        })
        class TestComponent {
            form: FormGroup;

            color: Pickr.HSVaColor;

            @ViewChild('colorDiv', {static: true}) colorDiv: ElementRef;

            constructor() {
                this.form = new FormGroup({
                    color: new FormControl('')
                });
            }

            get formColor(): string {
                const color = this.form.get('color').value;
                if (color) {
                    if (typeof color === 'string') {
                        return color;
                    } else {
                        return `hsl(${(color as Pickr.HSVaColor).toHSLA().join(',')})`;
                    }
                }
            }
        }

        const createComponent = createComponentFactory({
            component: TestComponent,
            imports: [
                NgxPickrModule,
                ReactiveFormsModule,
                CommonModule,
                FormsModule
            ]
        });

        beforeEach(() => {
            spectator = createComponent();
        });

        it('should compile', () => {
            expect(spectator.component).toBeTruthy();
        });
    });
});
