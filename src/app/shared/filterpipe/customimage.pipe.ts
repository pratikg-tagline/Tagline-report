import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customimage'
})
export class CustomimagePipe implements PipeTransform {

  transform(users: any[], searchTerm: any): any[] {
    if (!users || !searchTerm) {
      return users;
    }
    return users.filter(user => user.name.toLowerCase()
      .indexOf(searchTerm.toLowerCase()) !== -1);
  }
}
