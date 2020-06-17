import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../adminservice.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private adminService: AdminserviceService, private router: Router) { }

   
  falsemessage: String;
  truemessage: String;

  postClient(form: NgForm){
 
    this.adminService.postClient(form.value).subscribe(response =>{
        console.log(response);
        this.router.navigate(['/updateloan']);
        if(response.error === false){   
          this.falsemessage = response.message;
          setTimeout(() => {
            this.falsemessage = null;
          }, 5000);
          this.router.navigate(['/applyloan']);
        } else if(response.error === true){
          this.truemessage = response.message;
          setTimeout(() => {
            this.truemessage = null;
          }, 5000);
        }
    })
  }

  selectLoan(){
    this.router.navigate(['/updateloan']);
  }

  ngOnInit(): void {
  }

}
