import { Component, OnInit, ViewChild } from '@angular/core';
import { ResponsiveMenuComponent } from '../../responsive-menu/responsive-menu.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild(ResponsiveMenuComponent)
  MenuComponent!: ResponsiveMenuComponent;
  
  constructor() { }

  ngOnInit(): void {
  }


  showMenu(): void {
    this.MenuComponent.showFilterMenu = true;
  }
}
