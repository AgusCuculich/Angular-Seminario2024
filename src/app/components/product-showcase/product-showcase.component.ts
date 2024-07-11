import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { TitleCasePipe, CommonModule } from '@angular/common';
import { CurrencyComponent } from '../currency/currency.component';
import { ProductCartService } from '../../services/product-cart.service';
import { ProductDataService } from '../../services/product-data.service';

@Component({
  selector: 'app-product-showcase',
  standalone: true,
  imports: [TitleCasePipe, CurrencyComponent, CommonModule],
  templateUrl: './product-showcase.component.html',
  styleUrl: './product-showcase.component.scss'
})
export class ProductShowcaseComponent implements OnInit {
  products: Product[] = [];

  potato$ = this.productDataService.getAll();

  constructor(
    private cart: ProductCartService,
    private productDataService: ProductDataService
  ) { } //Inyectamos la dependencia del servicio.
  /*
  Cuando se construya el componente, se instanciará la clase "ProductCartService" o se devolverá la instancia ya existente.
  Declara que cart es una propiedad privada de la clase, y a su vez, asigna automáticamente el valor del parámetro cart 
  del constructor a esta propiedad interna de la clase (evita la necesidad de declarar y asignar la propiedad manualmente 
  dentro de la clase).
  Es buena práctica inyectar los servicios en lugar de instanciarlos (incluso si se lo usa en un servicio).
  */

  ngOnInit(): void { }

  addToCart(product: Product): void {
    this.cart.addToCart(product);
  }
}

