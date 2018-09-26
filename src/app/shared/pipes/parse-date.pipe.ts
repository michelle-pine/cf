import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parseDate'
})
export class ParseDatePipe implements PipeTransform {
  transform(date: Date): Date {
    return new Date(date);
  }
}