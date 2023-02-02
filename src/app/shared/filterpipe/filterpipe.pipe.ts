import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe'
})
export class FilterpipePipe implements PipeTransform {

  transform(value: any,search: string): any {
    // console.log('value :>> ', value);
    // console.log('search :>> ', search);
    if (!search) return value;
    return value.filter((val :any) => {
      return Object.keys(val).some(key => {
        return String(val[key]).toLowerCase().includes(search.toLowerCase());
      });
    });
  
  }

}
