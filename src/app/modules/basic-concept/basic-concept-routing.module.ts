import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicConceptComponent } from './basic-concept.component';

const routes: Routes = [
  {
    path:'',component:BasicConceptComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicConceptRoutingModule { }
