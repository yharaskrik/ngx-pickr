import {NgModule} from '@angular/core';
import {NgxPickrComponent} from './ngx-pickr.component';
import {NgxPickrDirective} from './ngx-pickr.directive';

@NgModule({
  declarations: [NgxPickrComponent, NgxPickrDirective],
  imports: [],
  exports: [NgxPickrComponent, NgxPickrDirective]
})
export class NgxPickrModule {
}
