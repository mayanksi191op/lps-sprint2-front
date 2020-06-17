import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../adminservice.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addloan',
  templateUrl: './addloan.component.html',
  styleUrls: ['./addloan.component.css']
})
export class AddloanComponent implements OnInit {

  constructor(private adminService: AdminserviceService ) { }

  

  ngOnInit(): void {
  }

  falsemessage: String;
  truemessage: String;

  postLoan(form: NgForm){
    console.log(form.value.loanname);
    console.log(form.value.validage);
    console.log(form.value.interestrates);
    console.log(form.value.maxtenure);
    this.adminService.postLoan(form.value).subscribe(response =>{
        console.log(response);
        form.reset();
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
