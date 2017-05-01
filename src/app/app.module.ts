import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {WidgetModule} from './widget/widget.module';
import {RouterModule, Routes} from '@angular/router';
import {MaterialModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { LandingPageComponent } from './shell/landing-page/landing-page.component';
import { ButtonsComponent } from './shell/buttons/buttons.component';
import { Tool42ButtonComponent } from './widget/tool42-button/tool42-button.component';

import {FlexLayoutModule} from '@angular/flex-layout';
import { InputElementsComponent } from './shell/input-elements/input-elements.component';
import { Tool42InputComponent } from './widget/tool42-input/tool42-input.component';
import { LabelsComponent } from './shell/labels/labels.component';
import { Tool42LabelComponent } from './widget/tool42-label/tool42-label.component';
import { FormComponent } from './shell/form/form.component';
import { Tool42FormInputFieldComponent } from './widget/tool42-form-input-field/tool42-form-input-field.component';
import { Tool42ContactUsComponent } from './widget/tool42-contact-us/tool42-contact-us.component';
import { ContactUsComponent } from './shell/contact-us/contact-us.component';
import { HeadingsComponent } from './shell/headings/headings.component';
import { Tool42HeadingComponent } from './widget/tool42-heading/tool42-heading.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  { path: 'buttons', component: ButtonsComponent},
  { path: 'input-element', component: InputElementsComponent},
  { path: 'labels', component: LabelsComponent},
  { path: 'headings', component: HeadingsComponent},
  { path: 'forms', component: FormComponent},
  { path: 'contact-us', component: ContactUsComponent},
  { path: 'main', component: LandingPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ButtonsComponent,
    Tool42ButtonComponent,
    InputElementsComponent,
    Tool42InputComponent,
    LabelsComponent,
    Tool42LabelComponent,
    FormComponent,
    Tool42FormInputFieldComponent,
    Tool42ContactUsComponent,
    ContactUsComponent,
    HeadingsComponent,
    Tool42HeadingComponent
  ],
  imports: [
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    WidgetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
