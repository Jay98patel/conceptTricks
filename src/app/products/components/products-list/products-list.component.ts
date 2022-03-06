import { Product } from './../../models/product.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  @Input() productList: Product[];

  @Output() productToEdit: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() productToDelete: EventEmitter<number> = new EventEmitter<number>();


  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
  }

  editProduct(productToEdit: Product) {
    this.productService.sendProductToEdit(productToEdit);
  }

  deleteProduct(id:number){
    this.productToDelete.emit(id);
  }


}
