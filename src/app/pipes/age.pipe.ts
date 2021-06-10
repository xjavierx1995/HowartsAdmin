import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(dateOfbirth: any, yearOfBirth?: any) {
    if (dateOfbirth) {
      let newdate = dateOfbirth.split("-").reverse().join("-");
      let birthDay = moment(newdate);
      let today = moment();
      let age = today.diff(birthDay, "years");
      return age;
    } else if (yearOfBirth){
        let year = moment().format('YYYY')
        let age = parseInt(year, 10) - parseInt(yearOfBirth, 10)
        return age;
    }else{
      return 'Desconocida';
    }
  }

}
