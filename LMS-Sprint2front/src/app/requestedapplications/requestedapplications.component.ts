import { Component, OnInit } from '@angular/core';
import { LadserviceService } from '../ladservice.service';
import { apply } from '../applyregister/applyregister.component';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-requestedapplications',
  templateUrl: './requestedapplications.component.html',
  styleUrls: ['./requestedapplications.component.css']
})
export class RequestedapplicationsComponent implements OnInit {

  constructor(private ladservice: LadserviceService, public login: LoginService) {
    this.getRequested(null);
   }

  ngOnInit(): void {
  }

  nameSearch: string = '';

  falsemessage;
  truemessage;


  pageLoans;
  pageNo = 0;
  itemsPerPage = 4; 
  totalitems;
  fieldname;
  searchValue;
  searchBy = "fullname";


  getRequested(fieldname){
         this.ladservice.getPageRequested(this.pageNo, this.itemsPerPage, fieldname).subscribe(response =>{
         console.log(response);
         this.pageLoans = response.content; 
         this.totalitems = response.totalElements;
         })   
  }

  getNextPageItems(event){
    console.log(event);
    this.pageNo = event.pageIndex;
    this.itemsPerPage = event.pageSize;
    this.getRequested(null);
  }

  getSortedData() {
    console.log(this.fieldname);
    this.getRequested(this.fieldname);
  }

  
  approveLoan(application){
    this.ladservice.approveLoan(application).subscribe(response =>{
      console.log(response);
      if(response.error === false){
        this.getRequested(this.fieldname);
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

  rejectLoan(application){
    this.ladservice.rejectLoan(application).subscribe(response =>{
      console.log(response);
      if(response.error === false){
        this.getRequested(this.fieldname);
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

}
