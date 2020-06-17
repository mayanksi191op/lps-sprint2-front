import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../adminservice.service';
import { LoginService } from '../login.service';

export interface Loans {
  loanname: String;
  validage: String;
  interestrates: String;
  maxtenure: String;
}

@Component({
  selector: 'app-loanprograms',
  templateUrl: './loanprograms.component.html',
  styleUrls: ['./loanprograms.component.css']
})

export class LoanprogramsComponent implements OnInit {

  constructor(private adminservice: AdminserviceService, public login: LoginService) {
    this.getLoans(null);
   }

  nameSearch: string = '';
  searchValue;
  searchBy = "loanname";

  

  pageLoans;
  pageNo = 0;
  itemsPerPage = 3; 
  totalitems;
  fieldname;

  getLoans(fieldname){
    this.adminservice.getPageLoans(this.pageNo, this.itemsPerPage, fieldname).subscribe(response =>{
      console.log(response);
      this.pageLoans = response.content; 
      this.totalitems = response.totalElements;
    })
  }

  getNextPageItems(event){
    console.log(event);
    this.pageNo = event.pageIndex;
    this.itemsPerPage = event.pageSize;
    this.getLoans(null);
  }

  getSortedData() {
    console.log(this.fieldname);
    this.getLoans(this.fieldname);
  }

  ngOnInit(): void {
  }

}
