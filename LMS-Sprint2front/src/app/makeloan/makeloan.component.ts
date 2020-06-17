import { Component, OnInit } from '@angular/core';
import { CustomerserviceService } from '../customerservice.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-makeloan',
  templateUrl: './makeloan.component.html',
  styleUrls: ['./makeloan.component.css']
})
export class MakeloanComponent implements OnInit {

  constructor(private customerservice: CustomerserviceService, private router: Router, private adminService: AdminserviceService) {
    this.getLoans();
    this.viewDetails();
   }

  falsemessage;
  truemessage;
  loans;

  getLoans(){
    this.customerservice.getLoan().subscribe(response =>{
      console.log(response);
      this.loans = response.data;
    })
  }

  details;

  viewDetails(){
    let userData = JSON.parse(localStorage.getItem('userData'));
    let email = userData.email;
    this.customerservice.viewDetails(email).subscribe(response => {
      this.details = response.data;
    })
  }

  postapplication(form: NgForm) {
    console.log(form.value);
    let userData = JSON.parse(localStorage.getItem('userData'));
    let email = userData.email;
    this.customerservice.postApplication(email, form.value).subscribe(response => {
      console.log(response.data);
      if(response.error === false){  
        form.reset(); 
        this.falsemessage = response.message;
        setTimeout(() => {
          this.falsemessage = null;
        }, 5000);
        // this.router.navigate(['/applyloan']);
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
