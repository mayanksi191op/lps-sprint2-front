import { Component, OnInit } from '@angular/core';
import { CustomerserviceService } from '../customerservice.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  constructor(private customerservice: CustomerserviceService, private router: Router) {
    this.viewDetails();
    console.log(this.details);
   }

  ngOnInit(): void {
  }

  details;
  falsemessage;
  truemessage;

  viewDetails(){
    let userData = JSON.parse(localStorage.getItem('userData'));
    let email = userData.email;
    this.customerservice.viewDetails(email).subscribe(response => {
      this.details = response.data;
    })
  }

  updateuser(form: NgForm){
    this.customerservice.updateuser(form.value).subscribe(response => {
      form.reset();
        console.log(response);
         if(response.error === false){
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
