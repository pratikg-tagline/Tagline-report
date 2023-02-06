import { Input, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boldsearch',
})
export class BoldsearchPipe implements PipeTransform {
  transform(value: any, search: any): any {
    if (!search) return value;

    return value
      .filter((val: any) => {
        return val.text.toLowerCase().includes(search.toLowerCase());
      })
      .map((filterd: any) => {
        return {
          text: filterd.text.replace(new RegExp(search, 'gi'), `<b>${search}</b>`),
        };
      });
  }
}
