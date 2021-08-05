import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title: string =  'Bem-vindo ao Lexos My Account';
  subtitle: string = 'Sua central de aplicativos, ferramentas e serviços Lexos';
  cardTitle: string = 'Aplicativos'
  constructor() { }

  ngOnInit(): void {
  }

}
