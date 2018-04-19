
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
import { AboutComponent } from './about/about-list/about.component';


@NgModule({
  declarations: [
      AppComponent,
      IndexComponent,
      AboutComponent
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
