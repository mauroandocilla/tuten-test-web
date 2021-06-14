import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'searchFilter'
})

export class SearchFilterPipe implements PipeTransform {

  transform(data: any, key?: any, value?: any): any {
    if (!data) return null;
    if (!key) return data;

    value = value.toLowerCase();

    return data.filter((data: any) => {
      return String(data[key]).includes(value);
    });
  }

}
