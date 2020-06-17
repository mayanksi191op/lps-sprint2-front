import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerserviceService } from '../customerservice.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private customerservice: CustomerserviceService,
    private router: Router
    ) { }

  changepass;
  falsemessage;
  truemessage;

  forgotpassword(form:NgForm){
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

  ngOnInit(): void {
  }

}
