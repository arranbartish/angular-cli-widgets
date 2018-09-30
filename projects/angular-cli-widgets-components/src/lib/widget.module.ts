import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { UtilitiesModule } from './../utilities/utilities.module';
import { SearchFormComponent } from './search-form/search-form.component';
import { TekButtonComponent } from './tek-button/tek-button.component';
import { TekLabelComponent } from './tek-label/tek-label.component';
import { TekFormInputComponent } from './tek-form-input/tek-form-input.component';
import { TekContactUsFormComponent } from './tek-contact-us-form/tek-contact-us-form.component';
import { TekCancelSubmitButtonsComponent } from './tek-cancel-submit-buttons/tek-cancel-submit-buttons.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UtilitiesModule,
    ReactiveFormsModule
  ],
  exports: [
    SearchFormComponent,
    TekButtonComponent,
    TekLabelComponent,
    TekFormInputComponent,
    TekContactUsFormComponent,
    TekCancelSubmitButtonsComponent
  ],
  declarations: [
    SearchFormComponent,
    TekButtonComponent,
    TekLabelComponent,
    TekFormInputComponent,
    TekContactUsFormComponent,
    TekCancelSubmitButtonsComponent
  ]
})
export class WidgetModule {
}
