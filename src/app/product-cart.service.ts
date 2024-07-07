import { Injectable } from '@angular/core';
import { Product } from './product-showcase/Product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {
  //Maneja la lógica del carrito.

  max_quantity: number = 5;
  min_quantity: number = 1;

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

    let item: Product | undefined = this._shoppingCart.find((x) => x.id == product.id);
    /**
     * Buscamos si ya existe un item con id x dentro del carrito de compras (de ser así, retorna el mismo valor 
     * o undefined en caso contrario).
     * 
     * Product | undefined --> En TypeScript, esto significa que la variable item podría ser de tipo Product o undefined.
     */

    if (!item) {
      product.quantity = 1;
      this._shoppingCart.push({ ...product });
    }
    this.shoppingCart.next(this._shoppingCart);
    /**
     * 1. El if anterior checkea que el item no este exista en el carrito de compras para así añadirlo (nos asegura que no se 
     * repitan items iguales en el carrito).
     * 2. El BehaviourSubject no detecta los cambios, con lo que hay que indicarle que emita (next) los mismos.
     * 3. Como las cantidades a comprar de cada producto están seteadas a 0, antes de que se añada un producto al carrito, la 
     * cantidad del mismo se establece a 1.
     */

    console.log(this._shoppingCart);
  }

  modifyQuantity(num: number, product: Product) {
    const newQuantity: number = product.quantity + num;
    let pos: number | undefined = this._shoppingCart.findIndex((x) => x.id == product.id) ?? -1;
    if (newQuantity >= this.min_quantity && newQuantity <= this.max_quantity)  {
      this._shoppingCart[pos].quantity = newQuantity;
      //console.log(product);
      //console.log(newQuantity);
      this.shoppingCart.next(this._shoppingCart);
    }
  }

  deleteFromCart(product: Product) {

    /**
     * El operador de encadenamiento opcional (?.) maneja el caso posible caso de que this.shoppingCart sea undefined o null.
     * Si es el caso, toda la expresión se evaluará como undefined sin larzar error. Acompañado a esto, añadimos el operador
     * de coalescencia nula (??) el cual asigna un valor predeterminado por el usuario cuando la parte de la izquierda de la
     * expresión es null o undefined. 
     */
    let pos: number | undefined = this._shoppingCart.findIndex((x) => x.id == product.id) ?? -1;

    if (pos !== -1 && this._shoppingCart) {
      this._shoppingCart.splice(pos, 1);
      this.shoppingCart.next(this._shoppingCart);
    }
  }
}
