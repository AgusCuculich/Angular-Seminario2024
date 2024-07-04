import { Component, OnInit } from '@angular/core';
import { Product } from './Product';
import { TitleCasePipe } from '@angular/common';
import { CurrencyComponent } from '../currency/currency.component';
import { ProductCartService } from '../product-cart.service';

@Component({
  selector: 'app-product-showcase',
  standalone: true,
  imports: [TitleCasePipe, CurrencyComponent],
  templateUrl: './product-showcase.component.html',
  styleUrl: './product-showcase.component.scss'
})
export class ProductShowcaseComponent implements OnInit {
  products: Product[] = [
    {
      id: 1,
      name: 'standard cut',
      img: 'assets/img/standard.png',
      price: 10,
    },
    {
      id: 2,
      name: 'Crinckle',
      img: 'assets/img/crinckle.png',
      price: 20,
    },
    {
      id: 3,
      name: 'Smiley',
      img: 'assets/img/smiley.png',
      price: 30,
    },
    {
      id: 4,
      name: 'Steak',
      img: 'assets/img/steakCut.png',
      price: 40,
    },
    {
      id: 5,
      name: 'Rustic',
      img: 'assets/img/rustic.png',
      price: 50,
    },
    {
      id: 6,
      name: 'Noisette',
      img: 'assets/img/noisette.png',
      price: 60,
    },
    {
      id: 7,
      name: 'Sweet Fries',
      img: 'assets/img/sweet_fries.png',
      price: 70,
    },
    {
      id: 8,
      name: 'Chips',
      img: 'assets/img/chips.png',
      price: 80,
    }
  ];

  constructor(private cart: ProductCartService) { } //Inyectamos la dependencia del servicio.
  /**
   * Cuando se construya el componente, se instanciará la clase "ProductCartService" o se devolverá la instancia ya existente.
   * Declara que cart es una propiedad privada de la clase, y a su vez, asigna automáticamente el valor del parámetro cart 
   * del constructor a esta propiedad interna de la clase (evita la necesidad de declarar y asignar la propiedad manualmente 
   * dentro de la clase).
   * Es buena práctica inyectar los servicios en lugar de instanciarlos (incluso si se lo usa en un servicio).
   */

  ngOnInit(): void { }

  addToCart(product: Product): void {
    this.cart.addToCart(product);
  }
}
