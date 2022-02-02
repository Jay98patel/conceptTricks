import { Category, Product } from './../../models/product.model';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-admin-products-view',
  templateUrl: './admin-products-view.component.html',
  styleUrls: ['./admin-products-view.component.scss']
})
export class AdminProductsViewComponent implements OnInit {

  categoryOptions: Category[];
  products: Product[];

  isProductSaveSuccess: boolean;

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.getCategoryOptions();
    this.getProductList();
  }

  getCategoryOptions() {
    this.productService.getCategory().subscribe((categoryOption: Category[]) => {
      this.categoryOptions = categoryOption;
    },(error)=>{
      alert("Somethings Went Wrong");
    });
  }

  getProductList() {
    this.productService.getProductList().subscribe((products: Product[]) => {
      this.products = products;
    },(error)=>{
      alert("Somethings Went Wrong");
    });
  }

  saveProduct(product: Product) {
    debugger
    if(product.id){
      this.updateProduct(product)
    }else{
      this.createProduct(product)
    }
  }
  
  createProduct(product:Product){
    this.productService.saveProduct(product).subscribe((savedProduct) => {
      this.isProductSaveSuccess = true;
      this.hideMessage();
      this.getProductList();
    },
    (error=>{
      alert("Somethings Went Wrong")
    }));
  }

  updateProduct(product:Product){
    this.productService.updateProduct(product).subscribe((savedProduct) => {
      this.isProductSaveSuccess = true;
      this.hideMessage();
      this.getProductList();
    },
    (error=>{
      alert("Somethings Went Wrong")
    }));
  }

  deleteProduct(id:number){
    debugger
    this.productService.deleteProduct(id).subscribe((deletedProductId:number)=>{
      console.log("Product Deleted successfully");
      this.getProductList();
    })
  }

  hideMessage(){
    setTimeout(() => {
      this.isProductSaveSuccess = false;
    }, 1000)
  }

}
