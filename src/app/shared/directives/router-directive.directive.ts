import { Directive, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Directive({
  selector: '[routerLink]',
})
export class RouterDirectiveDirective extends RouterLink{
  //Criei uma diretiva para que pudesse usar o routerLink como diretiva "bind" e conseguir passar a prop do objeto routes (route.path) no ngFor de sidenav.
  @HostListener('mouseup', ['$event'])
  triggerCustomClick(ev: MouseEvent) {
    if (ev.button === 1 || (ev.ctrlKey && ev.button === 0)) {
      window.open(this.urlTree.toString(), '_blank');
    }
  }
  
  @HostListener('mousedown', ['$event'])
  preventMiddleClickScroll(ev: MouseEvent) {
    if (ev.button === 1) {
      ev.preventDefault();
    }
  }

}
 
