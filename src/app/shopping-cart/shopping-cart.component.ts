import { Component, OnInit } from '@angular/core';
import { ProductCartService } from '../product-cart.service';
import { Product } from '../product-showcase/Product';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [],
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

  ngOnInit(): void { }
}
