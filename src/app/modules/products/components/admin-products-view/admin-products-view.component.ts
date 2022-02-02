import { Category } from './../../models/product.model';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-admin-products-view',
  templateUrl: './admin-products-view.component.html',
  styleUrls: ['./admin-products-view.component.scss']
})
export class AdminProductsViewComponent implements OnInit {

  categoryOptions: Category[] | undefined;

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.getCategoryOptions();
  }
 

  getCategoryOptions() {
    this.productService.getCategory().subscribe((categoryOption: Category[]) => {
      this.categoryOptions = categoryOption;
    });
  }

}
