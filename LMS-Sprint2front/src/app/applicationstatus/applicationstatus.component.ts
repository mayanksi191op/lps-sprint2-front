import { Component, OnInit } from '@angular/core';
import { CustomerserviceService } from '../customerservice.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-applicationstatus',
  templateUrl: './applicationstatus.component.html',
  styleUrls: ['./applicationstatus.component.css']
})
export class ApplicationstatusComponent implements OnInit {

  constructor(private customerservice: CustomerserviceService) {
    this.viewDetails();
   }

  user;
  nameSearch: string = '';
  searchValue;
  searchBy = "status";


  viewDetails(){
    let userData = JSON.parse(localStorage.getItem('userData'));
    let email = userData.email;
    this.customerservice.viewDetails(email).subscribe(response => {
     // console.log(response.data);
      this.user = response.data;
      console.log(this.user);
    })
    
  }

  ngOnInit(): void {
  }

}
