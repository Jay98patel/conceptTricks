import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicConceptRoutingModule } from './basic-concept-routing.module';
import { BasicConceptComponent } from './basic-concept.component';


@NgModule({
  declarations: [
    BasicConceptComponent
  ],
  imports: [
    CommonModule,
    BasicConceptRoutingModule
  ]
})
export class BasicConceptModule { }
