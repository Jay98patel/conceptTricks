import { Category, Product } from './../../models/product.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss']
})
export class ProductsFormComponent implements OnInit {

  @Input() categories: Category[];

  @Output() createdProduct: EventEmitter<Product> = new EventEmitter<Product>();

  productForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildProductForm();
  }

  buildProductForm() {
    this.productForm = this.formBuilder.group({
      productName: [],
      price: [],
      category: [0],
      quantity: [],
      stock: [true],
      term: [false]
    });
  }


  saveProduct() {
    const productToSave = this.productForm.value;
    if (this.productForm.valid) {
      this.createdProduct.emit(productToSave);
      this.resetForm();
    }
    else{
      console.log("solve Errors")
    }
  }

  resetForm(){
    this.productForm.reset()
  }



}
