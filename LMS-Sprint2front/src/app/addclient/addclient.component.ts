import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../adminservice.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.css']
})

export class AddclientComponent implements OnInit {

  constructor(private adminService: AdminserviceService,
    private router: Router) { }

  ngOnInit(): void {
  }

  
  
  falsemessage: String;
  truemessage: String;

  postClient(form: NgForm){
    form.value.role = "ROLE_LAD";
    form.value.password = "Qwerty@123";
    console.log(form.value);
    this.adminService.postClient(form.value).subscribe(response =>{
      
        console.log(response);
        if(response.error === false){
          form.reset();
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

