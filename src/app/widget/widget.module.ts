import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {UtilitiesModule} from './../utilities/utilities.module';
import {SearchFormComponent} from './search-form/search-form.component';
import {NavigationComponent} from './navigation/components/navigation.component';
import {NavigationItemComponent} from './navigation/components/navigation-item.component';
import {Tool42ButtonComponent} from './tool42-button/tool42-button.component';
import {Tool42HeadingComponent} from './tool42-heading/tool42-heading.component';
import {Tool42ContactUsComponent} from './tool42-contact-us/tool42-contact-us.component';
import {Tool42FormInputFieldComponent} from './tool42-form-input-field/tool42-form-input-field.component';
import {Tool42LabelComponent} from './tool42-label/tool42-label.component';
import {Tool42InputComponent} from './tool42-input/tool42-input.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UtilitiesModule,
    ReactiveFormsModule
  ],
  exports: [
    SearchFormComponent,
    NavigationComponent,
    Tool42ButtonComponent,
    Tool42InputComponent,
    Tool42LabelComponent,
    Tool42FormInputFieldComponent,
    Tool42ContactUsComponent,
    Tool42HeadingComponent
  ],
  declarations: [
    SearchFormComponent,
    NavigationComponent,
    NavigationItemComponent,
    Tool42ButtonComponent,
    Tool42InputComponent,
    Tool42LabelComponent,
    Tool42FormInputFieldComponent,
    Tool42ContactUsComponent,
    Tool42HeadingComponent
  ]
})
export class WidgetModule {
}
