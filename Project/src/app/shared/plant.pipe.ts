import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'plant'
})
export class PlantPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
