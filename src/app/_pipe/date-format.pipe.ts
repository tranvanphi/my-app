import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

import { Constant } from '../../ultil/constant';
@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe extends DatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return super.transform(value, Constant.DATE_FMT);
  }

}
