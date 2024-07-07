import { Component, Input, OnInit } from '@angular/core';
import { ProductCartService } from '../product-cart.service';
import { Product } from '../product-showcase/Product';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})
export class ShoppingCartComponent implements OnInit {
  /**
   * Esta clase se encarga del carrito de compras. Utiliza el servicio "ProductCartService" para siempre tener la última versión 
   * del arreglo del carrito de compras. Cada vez que hay un cambio en esta lista, el servicio avisa a la clase, y la clase 
   * actualiza su propia lista de productos
   */
  
  shoppingCart: Product[] | undefined;

  constructor(private cart: ProductCartService) {
    cart.shoppingCart.subscribe((arrCompras) => this.shoppingCart = arrCompras);
  }

  deleteFromCart(product: Product): void {
    this.cart.deleteFromCart(product);
  }

  modifyQuantity(num: number, product: Product): void {
    this.cart.modifyQuantity(num, product);
  }

  ngOnInit(): void { }
}
