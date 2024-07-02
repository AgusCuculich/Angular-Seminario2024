import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductShowcaseComponent } from './product-showcase/product-showcase.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductShowcaseComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
