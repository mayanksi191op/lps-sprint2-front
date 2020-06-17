import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

export let login = {
  "email": "",
  "password": "",
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private login: LoginService, private router: Router) { }

  falsemessage: String;
  truemessage: String;

  postLogin(form: NgForm){
    console.log(form.value);
    this.login.postLogin(form.value).subscribe(response =>{
      
        console.log(response);
        if(response.error === false){
          localStorage.setItem('userData',JSON.stringify(response));
          if(response.role === 'ROLE_ADMIN'){
            this.router.navigate(['/loginredirect']);
            this.router.navigateByUrl('/loginredirect');
          } else if(response.role === 'ROLE_CUSTOMER'){
            this.router.navigate(['/viewdetails']);
          } else if(response.role === 'ROLE_LAD'){
            this.router.navigate(['/loginredirect']);
            this.router.navigateByUrl('/loginredirect');
          }
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
  iconClass='fa fa-eye';
  showPassword(){
    if(this.passwordType==='password'){
      this.passwordType='text';
      this.iconClass='fa fa-eye-slash'
    }else{
      this.passwordType='password';
      this.iconClass='fa fa-eye'
    }
  }

  ngOnInit(): void {
  }

}
