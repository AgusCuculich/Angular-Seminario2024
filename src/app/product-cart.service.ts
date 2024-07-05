import { Injectable } from '@angular/core';
import { Product } from './product-showcase/Product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {
  //Maneja la lógica del carrito.

  private _shoppingCart: Product[] = [];
  shoppingCart: BehaviorSubject<Product[]> = new BehaviorSubject(this._shoppingCart);
  /**
   * 1. Arreglo vacío donde irán todos los productos que se añadan al carrito de compras.
   * 2. Encapsulamos el carrito de compras en un BehaviourSubject para poder suscribirnos a sus cambios.
   * 3. El BehaviourSubject encapsula una variable privada. Se considera una buena práctica crear una 
   * propiedad privada con el mismo nombre y que inicie con un guión bajo.
   */

  constructor() { }

  addToCart(product: Product) { //declaramos el tipo de dato que recibirá el carrito.

    /**
     * Buscamos si ya existe un item con id x dentro del carrito de compras (de ser así, retorna el mismo valor 
     * o undefined en caso contrario).
     * 
     * Product | undefined --> En TypeScript, esto significa que la variable item podría ser de tipo Product o undefined.
     */
    let item: Product | undefined = this._shoppingCart.find((x) => x.id == product.id);

    if (!item) {
      this._shoppingCart.push({... product});
      this.shoppingCart.next(this._shoppingCart);
    }
    /**
     * 1. El if anterior checkea que el item no este exista en el carrito de compras para así añadirlo (nos asegura que no se 
     * repitan items iguales en el carrito).
     * 2. El BehaviourSubject no detecta los cambios, con lo que hay que indicarle que emita (next) los mismos.
     */

    //console.log(this._shoppingCart);
  }
}
