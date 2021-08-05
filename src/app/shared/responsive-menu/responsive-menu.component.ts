import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-responsive-menu',
  templateUrl: './responsive-menu.component.html',
  styleUrls: ['./responsive-menu.component.scss']
})
export class ResponsiveMenuComponent implements OnInit {

  @Input()
  showFilterMenu: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  closeFilter() {
    this.showFilterMenu = false;
  }
}
