import { Component, OnInit } from '@angular/core';
import { CustomerserviceService } from '../customerservice.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  

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

  changepassword(form: NgForm){
    console.log(form.value);
    this.customerservice.changepassword(form.value).subscribe(response => {
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

  passwordType='password';
  passwordType2='password';
  iconClass='fa fa-eye';
  iconClass2='fa fa-eye';
  showPassword(){
    if(this.passwordType==='password'){
      this.passwordType='text';
      this.iconClass='fa fa-eye-slash'
    }else{
      this.passwordType='password';
      this.iconClass='fa fa-eye'
    }
  }

  showPassword2(){
    if(this.passwordType2==='password'){
      this.passwordType2='text';
      this.iconClass2='fa fa-eye-slash'
    }else{
      this.passwordType2='password';
      this.iconClass2='fa fa-eye'
    }
  }

}
