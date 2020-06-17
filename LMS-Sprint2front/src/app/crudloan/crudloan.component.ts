import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../adminservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crudloan',
  templateUrl: './crudloan.component.html',
  styleUrls: ['./crudloan.component.css']
})
export class CrudloanComponent implements OnInit {

  constructor(private adminservice: AdminserviceService,
              private router: Router) {
    this.getLoans(null);
   }

  nameSearch: string = '';

  pageLoans;
  pageNo = 0;
  itemsPerPage = 3; 
  totalitems;
  falsemessage: String;
  truemessage: String;
  fieldname;
  searchValue;
  searchBy = "loanname";

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

  deleteLoan(loan){
    this.adminservice.deleteLoan(loan).subscribe(response =>{
      console.log(response);
      if(response.error === false){
        this.getLoans(null);
        this.falsemessage = response.message;
        setTimeout(() => {
          this.falsemessage = null;
        }, 5000);
      } else if(response.error === true){
        this.truemessage = response.message;
        setTimeout(() => {
          this.truemessage = null;
        }, 5000);
      }
    })
  }

  getSortedData() {
    console.log(this.fieldname);
    this.getLoans(this.fieldname);
  }

  selectLoan(loan){
    this.router.navigate(['/updateloan'], {queryParams: loan});
  }

  ngOnInit(): void {
  }

}
