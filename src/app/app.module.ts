import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {WidgetModule} from './widget/widget.module';
import {RouterModule, Routes} from '@angular/router';
import {MaterialModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LandingPageComponent } from './shell/landing-page/landing-page.component';
import { ButtonsComponent } from './shell/buttons/buttons.component';
import { Tool42ButtonComponent } from './widget/tool42-button/tool42-button.component';

import {FlexLayoutModule} from '@angular/flex-layout';

const routes: Routes = [
  { path: 'buttons', component: ButtonsComponent},
  { path: 'main', component: LandingPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ButtonsComponent,
    Tool42ButtonComponent
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
