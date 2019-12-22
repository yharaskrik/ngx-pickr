import {NgModule} from '@angular/core';
import {NgxPickrDirective} from './ngx-pickr.directive';
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        NgxPickrDirective
    ],
    imports: [
        FormsModule
    ],
    exports: [
        NgxPickrDirective
    ]
})
export class NgxPickrModule {
}
