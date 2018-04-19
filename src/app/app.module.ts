
import { NgModule } from '@angular/core';
/**
 * 
 * modules
 * 
 */
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

/**
 * components
 */
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index-list/index.component';


@NgModule({
  declarations: [
      AppComponent,
      IndexComponent
  ],
  imports: [
      HttpClientModule,
      BrowserModule,
      AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
