import { Category, Product } from './../../models/product.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss']
})
export class ProductsFormComponent implements OnInit {

  @Input() categories: Category[];

  @Output() createdProduct: EventEmitter<Product> = new EventEmitter<Product>();

  productForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private ProductService:ProductsService) { }

  ngOnInit(): void {
    this.buildProductForm();
    console.log(this.productForm);
    this.getProductToEdit()
  }

  buildProductForm() {
    this.productForm = this.formBuilder.group({
      id:[],
      productName: ['',Validators.required],
      price: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(5)]],
      category: [,Validators.required],
      quantity: [null,[Validators.required,Validators.min(10)]],
      stock: [true,Validators.required],
      term: [false,Validators.requiredTrue]
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

  /**
   * @summary This method subscribe  getProductToEdit() of product service when component will load and when observalble emit data it will come to the form*/
  getProductToEdit(){
    this.ProductService.getProductToEdit().subscribe((product:Product)=>{
      debugger
      this.productForm.patchValue(product);
    },(error)=>{
      alert("Something went wrong");
    })
  }

  get formControl(){
    return this.productForm.controls;
  }

  resetForm(){
    this.productForm.reset();
  }



}
