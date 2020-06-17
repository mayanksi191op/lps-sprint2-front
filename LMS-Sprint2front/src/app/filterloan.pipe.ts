import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterloan'
})
export class FilterloanPipe implements PipeTransform {

  transform(value: any, searchterm: any): any {
    if(value.length === 0) {
      return value;
    }

    return value.filter(function(search){
      return search.fullname.toLowerCase().indexOf(searchterm.toLowerCase()) > -1
    });
  }

}
