import { ClientProductsViewComponent } from './components/client-products-view/client-products-view.component';
import { AdminProductsViewComponent } from './components/admin-products-view/admin-products-view.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './products.component';

const routes: Routes = [
  {
    path: '', component: ProductComponent,
    children: [
      {
        path: '', component: AdminProductsViewComponent
      },
      {
        path: 'adminView', component: AdminProductsViewComponent
      },
      {
        path: 'clientView', component: ClientProductsViewComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
