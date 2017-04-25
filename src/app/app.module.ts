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
import {WidgetModule} from './widget/widget.module';
import { LandingPageComponent } from './shell/landing-page/landing-page.component';
import { ButtonsComponent } from './shell/buttons/buttons.component';



const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'main', component: LandingPageComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ButtonsComponent
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
