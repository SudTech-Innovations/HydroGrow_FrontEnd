import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sensor'
})
export class SensorPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
