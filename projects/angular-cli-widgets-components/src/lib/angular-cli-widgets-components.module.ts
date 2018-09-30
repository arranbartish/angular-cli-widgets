import { NgModule } from '@angular/core';
import { WidgetModule} from './widget.module';
import { AngularCliWidgetsComponentsComponent } from './angular-cli-widgets-components.component';

@NgModule({
  imports: [
    WidgetModule
  ],
  declarations: [AngularCliWidgetsComponentsComponent],
  exports: [AngularCliWidgetsComponentsComponent, WidgetModule]
})
export class AngularCliWidgetsComponentsModule { }
