import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pure',
  pure:false
})
export class PurePipe implements PipeTransform {

  transform(value: any): unknown {
    return value.join();
  }

}
