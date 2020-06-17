import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchLoan'
})


export class SearchLoanPipe implements PipeTransform {

 
  transform(programs: any[], searchValue: any, fieldName): unknown {
    if(!programs){
      return [];
    }
    if(!searchValue){
      return programs;
    }
    searchValue=searchValue.toLowerCase();
    return programs.filter(program=>{
      return program[fieldName].toLowerCase().includes(searchValue);
    })
  }



}
