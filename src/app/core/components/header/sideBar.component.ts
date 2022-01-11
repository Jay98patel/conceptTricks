import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { navBar } from 'src/app/shared/models';

@Component({
  selector: 'app-sideBar',
  templateUrl: './sideBar.component.html',
  styleUrls: ['./sideBar.component.scss']
})
export class SideComponent implements OnInit {

  @Input() navBarLists: navBar[] | undefined;

  @Output() selectedName: EventEmitter<navBar> = new EventEmitter<navBar>();

  constructor() { }

  ngOnInit(): void {
  }

  selectTopic(navBar: navBar) {
    this.selectedName.emit(navBar);
  }

}
