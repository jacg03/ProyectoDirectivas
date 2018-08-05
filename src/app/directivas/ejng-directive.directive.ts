import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appEjngDirective]'
})
export class EjngDirectiveDirective {
  @HostBinding('class.item-orange') private mostrar:boolean = false;

  @HostListener('mouseover')
  onmouseover() {
    this.mostrar = true;
  }

  @HostListener('mouseout')
  onmouseout() {
    this.mostrar = false;
  }

  constructor() { }

}
