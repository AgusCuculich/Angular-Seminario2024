import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductShowcaseComponent } from './product-showcase/product-showcase.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { provideHttpClient } from '@angular/common/http';
import { MainContentComponent } from './main-content/main-content.component';
import { DistributorAccessComponent } from './distributor-access/distributor-access.component';

@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    DistributorAccessComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductShowcaseComponent,
    ShoppingCartComponent
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
