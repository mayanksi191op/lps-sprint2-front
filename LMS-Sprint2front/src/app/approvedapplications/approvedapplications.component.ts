import { Component, OnInit } from '@angular/core';
import { LadserviceService } from '../ladservice.service';

@Component({
  selector: 'app-approvedapplications',
  templateUrl: './approvedapplications.component.html',
  styleUrls: ['./approvedapplications.component.css']
})
export class ApprovedapplicationsComponent implements OnInit {

  constructor(private ladservice: LadserviceService) {
    this.getApproved(null);
   }

  ngOnInit(): void {
  }

  nameSearch: string = '';

  falsemessage;
  truemessage;


  pageLoans;
  pageNo = 0;
  itemsPerPage = 3; 
  totalitems;
  fieldname;
  searchValue;
  searchBy = "fullname";


  getApproved(fieldname){
         this.ladservice.getPageApproved(this.pageNo, this.itemsPerPage, fieldname).subscribe(response =>{
         console.log(response);
         this.pageLoans = response.content; 
         this.totalitems = response.totalElements;
         })   
  }

  getNextPageItems(event){
    console.log(event);
    this.pageNo = event.pageIndex;
    this.itemsPerPage = event.pageSize;
    this.getApproved(null);
  }

  getSortedData() {
    console.log(this.fieldname);
    this.getApproved(this.fieldname);
  }

}
