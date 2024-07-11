import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Product } from '../models/Product';

const URLProducts = 'https://668b22000b61b8d23b08926e.mockapi.io/api/v1/products';
const URLDolar = "https://dolarapi.com/v1/dolares/oficial";

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private http: HttpClient) { }

  getAll (): Observable<Product[]> {

    //El pipe nos permite hacer operaciones sobre los datos del observable antes de que sea visto por los observadores.
    return this.http.get<Product[]>(URLProducts).pipe(
      tap((products: Product[]) => products.forEach(product => product.quantity = 0))
    );
  }

  getDollarRates(): Observable<JSON> {
    return this.http.get<JSON>(URLDolar);
  }
}
