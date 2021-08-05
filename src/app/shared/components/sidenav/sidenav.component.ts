import { Component, OnInit, ViewChild } from '@angular/core';
import { SideBarRouteModel } from './model/model';
import { ResponsiveMenuComponent } from '../../responsive-menu/responsive-menu.component';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  

  //Utilizando um modelo para os links do sidebar e deixando como obrigatório no modelo os campos para evitar que o dev esqueça de inserir outras rotas, então o angular irá acusar caso ele esqueça de colocar icon ou path
  routes: SideBarRouteModel[] = [
    { path: '', icon: 'home', name:'Home' },
    { path: 'consumption', icon: 'insert_chart', name:'Consumo' },
  ]
  constructor() { }
  //Costumo utilizar um array de rotas, em sistemas escaláveis, a melhor maneira é criando para evitar a leitura no html que pode ser extensa

  ngOnInit(): void {
    this.routes;
  }


}
