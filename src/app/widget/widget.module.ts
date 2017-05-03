import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { UtilitiesModule } from './../utilities/utilities.module';
import { SearchFormComponent } from './search-form/search-form.component';
import { NavigationComponent } from './navigation/components/navigation.component';
import { NavigationItemComponent } from './navigation/components/navigation-item.component';
import {TekButtonComponent} from './tek-button/tek-button.component';
import { TekLabelComponent } from './tek-label/tek-label.component';
import { TekFormInputComponent } from './tek-form-input/tek-form-input.component';
import { TekContactUsFormComponent } from './tek-contact-us-form/tek-contact-us-form.component';

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
    TekButtonComponent,
    TekLabelComponent,
    TekFormInputComponent,
    TekContactUsFormComponent
  ],
  declarations: [
    SearchFormComponent,
    NavigationComponent,
    NavigationItemComponent,
    TekButtonComponent,
    TekLabelComponent,
    TekFormInputComponent,
    TekContactUsFormComponent
  ]
})
export class WidgetModule {
}
