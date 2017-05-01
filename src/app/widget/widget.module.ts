import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { UtilitiesModule } from './../utilities/utilities.module';
import { SearchFormComponent } from './search-form/search-form.component';
import { NavigationComponent } from './navigation/components/navigation.component';
import { NavigationItemComponent } from './navigation/components/navigation-item.component';
import { Tool42ButtonComponent } from './tool42-button/tool42-button.component';

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
    Tool42ButtonComponent
  ],
  declarations: [
    SearchFormComponent,
    NavigationComponent,
    NavigationItemComponent,
    Tool42ButtonComponent
  ]
})
export class WidgetModule {
}
