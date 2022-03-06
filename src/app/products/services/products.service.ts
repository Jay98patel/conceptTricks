import { Product } from './../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  apiLink: string;

  productToEdit: Subject<Product> = new Subject<Product>();

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
    return this.http.post<Product>(`${this.apiLink}/products/`, product);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiLink}/products/${product.id}`, product);
  }

  sendProductToEdit(product:Product){
    this.productToEdit.next(product);
  }

  getProductToEdit():Observable<Product>{
    return this.productToEdit.asObservable();
  }

  deleteProduct(id:number):Observable<number>{
    return this.http.delete<number>(`${this.apiLink}/products/${id}`);
  }
}
