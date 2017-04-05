import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UtilitiesModule } from '../utilities/utilities.module';
import { SearchFormComponent } from './search-form/search-form.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NavigationItemComponent } from './navigation/navigation-item.component';

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
export class WidgetModule { }
