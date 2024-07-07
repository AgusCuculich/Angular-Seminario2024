import { Component, Input, OnInit } from '@angular/core';
import { ProductCartService } from '../product-cart.service';
import { Product } from '../product-showcase/Product';
import { TitleCasePipe, CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

// Código +10 puntos extra: 555312

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [TitleCasePipe, CommonModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})
export class ShoppingCartComponent implements OnInit {
  /*
  Esta clase se encarga del carrito de compras. Utiliza el servicio "ProductCartService" para siempre tener la última versión 
  del arreglo del carrito de compras. Cada vez que hay un cambio en esta lista, el servicio avisa a la clase, y la clase 
  actualiza su propia lista de productos
  */

  total$: Observable<number> | undefined;
  
  shoppingCart$: Observable<Product[]> | undefined;
  //El $ es una conveción que se utiliza para indicar que es el observable que se utiliza con un pipe, y no el dato real.

  constructor(private cart: ProductCartService) {
    this.shoppingCart$ = cart.shoppingCart.asObservable();
    this.total$ = cart.total.asObservable();
  }
  /*
  El uso de la variable shoppingCart convirtada en un observable junto al uso de asObservable(), nos permite utilizar el
  pipe async en la plantilla.

  vs

  shoppingCart: Product[] | undefined;
  constructor(private cart: ProductCartService) {
    cart.shoppingCart.subscribe((arrCompras) => this.shoppingCart = arrCompras);
  }
  Nos suscribiamos directamente al BehaviorSubject shoppingCart del servicio productCartService y asignabamos su valor a la
  propiedad shoppingCart. Cada vez que el observable cartList emite un nuevo valor, el callback de la suscripción asigna ese 
  valor a la propiedad cartList de la clase.
  
  Ventajas de la versión actual a comparación de la anterior:
  - Maneja las suscripciones de manera más eficiente y declarativa.
  - Evita posibles fugas de memoria. La versión anterior que utiliza una subscripción directa, no gestiona explícitamente
  la cancelación de suscripciones, con lo que al eliminar un componente será necesario manualmente generar la desuscripción
  o el mismo seguirá suscripto y consumiendo memoria.

  Desventajas de la versión actual a comparación de la anterior:
  - No es posible utilizar la variable en el archivo ts del componente. A diferencia de la versión anterior donde guardabamos
  el dato en shoppingCart, el mismo no existe en el archivo actual, con lo que no será posible utilizarlo para cuestiones 
  lógicas o por si se quisiera usar en el ngOnInit.
  */

  deleteFromCart(product: Product): void {
    this.cart.deleteFromCart(product);
  }

  modifyQuantity(num: number, product: Product): void {
    this.cart.modifyQuantity(num, product);
  }

  ngOnInit(): void { }
}
