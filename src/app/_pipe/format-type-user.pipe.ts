import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatTypeUser'
})
export class FormatTypeUserPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value == 1){
      return 'Bán chuyên';
    }
    return 'Cá nhân';
  }

}
