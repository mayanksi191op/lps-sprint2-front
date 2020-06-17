import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-viewclient',
  templateUrl: './viewclient.component.html',
  styleUrls: ['./viewclient.component.css']
})
export class ViewclientComponent implements OnInit {

  constructor(private adminservice: AdminserviceService) { 
    this.getClients(null);
  }

  nameSearch: string = '';

  clients;
  pageNo = 0;
  itemsPerPage = 3; 
  totalitems;
  falsemessage: String;
  truemessage: String;
  fieldname;

  getClients(fieldname){
    this.adminservice.viewPageClients(this.pageNo, this.itemsPerPage, fieldname).subscribe(response => {
      console.log(response);
      this.clients = response.content;
      this.totalitems = response.totalElements;
    })
  }

  getSortedData() {
    console.log(this.fieldname);
    this.getClients(this.fieldname);
  }

  getNextPageItems(event){
    console.log(event);
    this.pageNo = event.pageIndex;
    this.itemsPerPage = event.pageSize;
    this.getClients(null);
  }

  deleteClient(client){
    this.adminservice.deleteClient(client).subscribe(response =>{
      console.log(response);
      if(response.error === false){
        this.getClients(null);
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

  ngOnInit(): void {
  }

}
