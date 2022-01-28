import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-concept',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductComponent implements OnInit {

  buttonName: string = "Switch To Client View";
  pathName: string = "adminView";
  isAdminView: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  changeButtonName() {
    debugger
    this.isAdminView = !this.isAdminView;
    if (this.isAdminView) {
      this.pathName = "clientView";
      this.buttonName = "Switch To Admin View";
    } else {
      this.pathName = "adminView";
      this.buttonName = "Switch To Client View";
    }
  }

}
