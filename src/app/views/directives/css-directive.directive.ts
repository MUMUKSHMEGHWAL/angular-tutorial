import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[color]',
  inputs: ['bgColor', 'colour:color']
})
export class RedDirective {
  el;
  constructor(el: ElementRef) {
    this.el = el;    
   }
   set colour(color:String){
        this.el.nativeElement.style.color = color;
   }
   set bgColor(bgColor:String){
     console.log(bgColor);
        this.el.nativeElement.style.backgroundColor = bgColor;
   }
}
