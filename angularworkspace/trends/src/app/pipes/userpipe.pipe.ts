import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userpipe'
})
export class Userpipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
