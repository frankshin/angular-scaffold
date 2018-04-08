
import { NgModule } from '@angular/core';
/**
 * 
 * modules
 * 
 */
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
      HttpClientModule,
      BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
