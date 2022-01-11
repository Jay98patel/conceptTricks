import { navBarList } from './shared/nav-bar';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { navBar } from './shared/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'conceptTricks';
  navBarLists: navBar[] = navBarList.navBar();

  constructor(private router:Router){}

  routeToTopic(topicName:navBar){
    this.router.navigate([topicName.path])
  }
}
