import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { RouterDirectiveDirective } from './directives/router-directive.directive';
import { ContainerContentComponent } from './components/container-content/container-content.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ResponsiveMenuComponent } from './responsive-menu/responsive-menu.component';




@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
    RouterDirectiveDirective,
    ContainerContentComponent,
    ResponsiveMenuComponent
  ],
  imports: [
    CommonModule,
    AngularSvgIconModule.forRoot(),
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  exports:[HeaderComponent, SidenavComponent, RouterDirectiveDirective, ContainerContentComponent]
})
export class SharedModule { }
