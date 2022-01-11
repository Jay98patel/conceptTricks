import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideComponent } from './components/header/sideBar.component';



@NgModule({
  declarations: [
    SideComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SideComponent
  ]
})
export class CoreModule { }
