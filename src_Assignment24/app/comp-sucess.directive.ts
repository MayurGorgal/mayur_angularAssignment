import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCompSucess]'
})
export class CompSucessDirective 
{

  //getting reference of our HTML file here
  //using dependency injection
  constructor(private ele:ElementRef) 
  {
  }

  //handling mouse events
  @HostListener('mouseover')
  onmouseover()
  {
    this.ele.nativeElement.style.color="green";
  }

  //handling mouse events
  @HostListener('mouseleave')
  onmouseleave()
  {
    this.ele.nativeElement.style.color="black";
  }

}
