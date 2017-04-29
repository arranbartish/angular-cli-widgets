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

const routes: Routes = [
];

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent
  ],
  imports: [
    MaterialModule,
    BrowserAnimationsModule,
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
