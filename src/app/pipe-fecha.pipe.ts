import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeFecha'
})
export class PipeFechaPipe implements PipeTransform {

  transform(value: string): string {
    let original = value;
    let palabra = "";
    for(let i = original.length-1; i>=0; i--){
      palabra += value[i]
    }
    return palabra;
  }

}
