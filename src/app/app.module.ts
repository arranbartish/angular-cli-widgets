import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule, ActionReducer, combineReducers } from '@ngrx/store';

import { AppComponent } from './app.component';
import { ButtonsComponent } from './shell/buttons/buttons.component';
import { LandingPageComponent } from './shell/landing-page/landing-page.component';
import { treeElements } from './widget/navigation/reducer/menu.reducer';
import { WidgetModule } from './widget/widget.module';
import { LabelsComponent } from './shell/labels/labels.component';
import { FormInputsComponent } from './shell/form-inputs/form-inputs.component';
import { ContactUsFormComponent } from './shell/contact-us-form/contact-us-form.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'main', component: LandingPageComponent },
  { path: 'labels', component: LabelsComponent },
  { path: 'form-inputs', component: FormInputsComponent },
  { path: 'contact-us-form', component: ContactUsFormComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ButtonsComponent,
    LabelsComponent,
    FormInputsComponent,
    ContactUsFormComponent
  ],
  imports: [
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    WidgetModule,
    StoreModule.provideStore({ treeElements })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
