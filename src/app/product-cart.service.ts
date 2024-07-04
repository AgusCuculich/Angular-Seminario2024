import { Injectable } from '@angular/core';
import { Product } from './product-showcase/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {
  //Maneja la lógica del carrito.

  shoppingCart: Product[] = []; //Arreglo vacío donde irán todos los productos que se añadan al carrito de compras.

  constructor() { }

  addToCart(product: Product) { //declaramos el tipo de dato que recibirá el carrito.

    /**
     * Buscamos si ya existe un item con id x dentro del carrito de compras (de ser así, retorna el mismo valor 
     * o undefined en caso contrario).
     * 
     * Product | undefined --> En TypeScript, esto significa que la variable item podría ser de tipo Product o undefined.
     */
    let item: Product | undefined = this.shoppingCart.find((x) => x.id == product.id);

    if (!item) {
      this.shoppingCart.push({... product});  
    }
    /**
     * El if anterior checkea que el item no este exista en el carrito de compras para así añadirlo (nos asegura que no se 
     * repitan items iguales en el carrito).
     */

    console.log(this.shoppingCart);
  }
}
