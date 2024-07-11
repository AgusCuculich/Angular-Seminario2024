import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductShowcaseComponent } from './components/product-showcase/product-showcase.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { provideHttpClient } from '@angular/common/http';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DistributorAccessComponent } from './pages/distributor-access/distributor-access.component';
import { FooterContentComponent } from './components/footer-content/footer-content.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HeaderContentComponent } from './components/header-content/header-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DistributorAccessComponent,
    FooterContentComponent,
    AboutUsComponent,
    HeaderContentComponent,
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
