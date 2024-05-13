import { Pipe, PipeTransform } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';

@Pipe({
  name: 'fechaPipe'
})
export class FechaPipePipe implements PipeTransform {

  transform(value: string): string {
    let original = value;
    let volteada = "";
    for(let i = original.length-1; i >= 0; i--)
      {
        volteada += original[i];
      }
      return volteada; 
  }
}
