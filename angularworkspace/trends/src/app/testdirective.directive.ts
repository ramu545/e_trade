import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDirective]'
})
export class TestDirective {

  constructor(private el:ElementRef) { }
  @HostListener('mouseover')onmouseover(){
    this.el.nativeElement.style.color = 'red';
  }
  @HostListener('mouseleave')onmouseleave(){
    this.el.nativeElement.style.color = 'black';
  }
}
