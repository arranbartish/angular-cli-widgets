import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { UtilitiesModule } from './../utilities/utilities.module';
import { SearchFormComponent } from './search-form/search-form.component';
import { NavigationComponent } from './navigation/components/navigation.component';
import { NavigationItemComponent } from './navigation/components/navigation-item.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UtilitiesModule,
    ReactiveFormsModule
  ],
  exports: [
    SearchFormComponent,
    NavigationComponent
  ],
  declarations: [
    SearchFormComponent,
    NavigationComponent,
    NavigationItemComponent
  ]
})
export class WidgetModule {
}
