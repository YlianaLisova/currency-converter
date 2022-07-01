import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from './components/header/header.component';
import { CurrencyComponent } from './components/currency/currency.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CurrencyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
