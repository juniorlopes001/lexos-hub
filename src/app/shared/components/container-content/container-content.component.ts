import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-container-content',
  templateUrl: './container-content.component.html',
  styleUrls: ['./container-content.component.scss']
})
export class ContainerContentComponent implements OnInit {

  @Input() title: string = '';
  @Input() mainIllustrationImage: any = '';
  @Input() cardTitle:string = '';
  @Input() subTitle: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
