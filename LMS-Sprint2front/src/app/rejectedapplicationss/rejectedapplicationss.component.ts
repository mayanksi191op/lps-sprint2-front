import { Component, OnInit } from '@angular/core';
import { LadserviceService } from '../ladservice.service';


@Component({
  selector: 'app-rejectedapplicationss',
  templateUrl: './rejectedapplicationss.component.html',
  styleUrls: ['./rejectedapplicationss.component.css']
})
export class RejectedapplicationssComponent implements OnInit {

  constructor(private ladservice: LadserviceService) {
    this.getRejected(null);
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


  getRejected(fieldname){
         this.ladservice.getPageRejected(this.pageNo, this.itemsPerPage, fieldname).subscribe(response =>{
         console.log(response);
         this.pageLoans = response.content; 
         this.totalitems = response.totalElements;
         })   
  }

  getNextPageItems(event){
    console.log(event);
    this.pageNo = event.pageIndex;
    this.itemsPerPage = event.pageSize;
    this.getRejected(null);
  }

  getSortedData() {
    console.log(this.fieldname);
    this.getRejected(this.fieldname);
  }

}
