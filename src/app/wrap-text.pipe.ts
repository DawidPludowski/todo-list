import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wrapText'
})
export class WrapTextPipe implements PipeTransform {

  transform(value: string): string {
    return value.length < 400 ? value : value.substring(0, 397).trim() + "..."
  }

}
