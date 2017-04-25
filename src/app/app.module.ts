import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule, ActionReducer, combineReducers } from '@ngrx/store';

import { AppComponent } from './app.component';
import { WidgetModule } from './widget/widget.module';
import { treeElements } from './widget/navigation/reducer/menu.reducer';

const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
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
