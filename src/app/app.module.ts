import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';


import { ReactiveFormsModule } from '@angular/forms';
import { WardComponent } from './prision/ward/ward.component';
import { LoginComponent } from './prision/login/login.component';





@NgModule({
  declarations: [
    AppComponent,
    WardComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }