import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(private ele:ElementRef) 
  {
    console.log(ele);
    this.ele.nativeElement.style.background="yellow";
    this.ele.nativeElement.style.fontWeight="bold";
  }

}
