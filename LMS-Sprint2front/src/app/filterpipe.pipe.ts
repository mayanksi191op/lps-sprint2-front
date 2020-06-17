import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe'
})
export class FilterpipePipe implements PipeTransform {

  transform(value: any, searchterm: any): any {
    if(value.length === 0) {
      return value;
    }

    return value.filter(function(search){
      return search.loanname.toLowerCase().indexOf(searchterm.toLowerCase()) > -1
    });
  }
}
