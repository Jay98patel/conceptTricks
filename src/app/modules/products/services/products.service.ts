import { Product } from './../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  apiLink: string | undefined;

  constructor(private http: HttpClient) {
    this.apiLink = environment.baseURL;
  }

  getCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiLink}/category`);
  }

  getProductList(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiLink}/products`);
  }

  saveProduct(product: Product): Observable<Product> {
    debugger
    return this.http.post<Product>(`${this.apiLink}/products/`,product);
  }
}
