import {ChangeDetectionStrategy, Component} from '@angular/core';
import Pickr from '@simonwep/pickr';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

    form: FormGroup;

    formColor(color): string {
        if (color) {
            if (typeof color === 'string') {
                return color;
            } else {
                return `hsl(${(color as Pickr.HSVaColor).toHSLA().join(',')})`;
            }
        }
    }

    constructor() {
        this.form = new FormGroup({
            color: new FormControl('#C20202')
        });
    }

    change($event: Pickr.HSVaColor): void {
    }

}
