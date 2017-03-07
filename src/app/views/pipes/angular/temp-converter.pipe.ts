import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tempConverter'
})
export class TempConverterPipe implements PipeTransform {

  transform(value: any, args?: String): any {
    console.log(value,args[0]);
    let temp : number;
    if(value && !isNaN(value)){
      if(args[0]==='celsius' || args[0]==='c' ) {
         temp = (value - 32) * 5/9;
        return temp + 'C' ;
      } else {
        return ((value*9)/5)+32 + 'F';
      }
    }
    
  }

}
