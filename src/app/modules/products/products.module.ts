import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductComponent } from './products.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsFormComponent } from './components/products-form/products-form.component';
import { AdminProductsViewComponent } from './components/admin-products-view/admin-products-view.component';
import { ClientProductsViewComponent } from './components/client-products-view/client-products-view.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ProductComponent,
    ProductsListComponent,
    ProductsFormComponent,
    AdminProductsViewComponent,
    ClientProductsViewComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule
  ]
})
export class ProductsModule { }
