import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basic-concept',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductComponent implements OnInit {

  buttonName: string = "Switch To Client View";
  pathName: string = "adminView";

  isAdminView: boolean = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  changeButtonName() {
    this.isAdminView = !this.isAdminView;
    if (this.isAdminView) {
      this.buttonName = "Switch To Client View";
      this.router.navigate(['products/adminView']);
    } else {
      this.buttonName = "Switch To Admin View";
      this.router.navigate(['products/clientView']);
    }
  }
}
