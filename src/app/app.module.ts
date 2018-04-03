
/**
 * 
 * modules
 * 
 */
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

/**
 * components
 */
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      NgModule,
      HttpClientModule,
      BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
