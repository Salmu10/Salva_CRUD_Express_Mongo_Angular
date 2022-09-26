import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

const URL = 'http://localhost:8080/api/products';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private http: HttpClient) { }

  all_products(): Observable<Product[]> {
    return this.http.get<Product[]>(URL);
  }

  get_product(id: String): Observable<Product> {
    return this.http.get<Product>(`${URL}/${id}`);
  }

  create_product(product: Product): Observable<Product[]> {
    return this.http.post<Product[]>(URL, product);
  }

  update_product(product: Product, id: String): Observable<Product[]> {
    return this.http.put<Product[]>(`${URL}/${id}`, product);
  }

  delete_product(id: String): Observable<Product[]> {
    return this.http.delete<Product[]>(`${URL}/${id}`);
  }
  
  delete_all_products(): Observable<Product[]> {
    return this.http.delete<Product[]>(`${URL}`);
  }

}
