import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(array: any[], text: string, column: string): any[] {

    if (text === '') {
      return array
    }
    text = text.toLowerCase();
    return array.filter(data => {
      return data[column].toLowerCase().includes(text)
    });

  }

}
