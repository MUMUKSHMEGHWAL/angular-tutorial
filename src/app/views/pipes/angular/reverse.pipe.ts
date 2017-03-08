import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(str: string, args?: any) {
      if(str){
        return str.split("").reverse().join("");        
      }
    }

}
