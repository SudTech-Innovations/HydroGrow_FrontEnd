import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'planning'
})
export class PlanningPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
