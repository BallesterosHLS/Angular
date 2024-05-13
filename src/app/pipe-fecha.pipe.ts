import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeFecha'
})
export class PipeFechaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
