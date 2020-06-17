import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../adminservice.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CustomerserviceService } from '../customerservice.service';

export let apply = {
  "fullname": "",
  "password": "",
  "email": "",
  "address": "",
  "state": "",
  "city": "",
  "pincode": "",
  "phone": "",
  "age": 0,
  "gender": "",
  "role": "ROLE_CUSTOMER",
  "applyloans": [
    {
        "loantype": "",
        "state": "",
        "city": "",
        "pincode": 0,
        "card": "",
        "occupation": "",
        "monthlyincome": "",
        "loanamount": "",
        "loantenure": "",
        "address": "",
        "status": "Requested",
        "mobile": "",
        "fullname": "",
        "age": ""
    }
  ]
}

@Component({
  selector: 'app-applyregister',
  templateUrl: './applyregister.component.html',
  styleUrls: ['./applyregister.component.css']
})


export class ApplyregisterComponent implements OnInit {

  constructor(private customerService: CustomerserviceService, 
              private router: Router,
              private adminService: AdminserviceService) {
                this.getLoans();
               }

  falsemessage: String;
  truemessage: String;
  loans;

  

  getLoans(){
    this.customerService.getLoan().subscribe(response =>{
      console.log(response);
      this.loans = response.data;
    })
  }

  postCustomer(form: NgForm){
   
        apply.email = form.value.email;
        apply.password = "Qwerty@123";
        apply.fullname = form.value.fullname;
        apply.address = form.value.address;
        apply.state = form.value.state;
        apply.city = form.value.city;
        apply.pincode = form.value.pincode;
        apply.phone = form.value.phone;
        apply.age = form.value.age;
        apply.gender = form.value.gender;
        apply.role = "ROLE_CUSTOMER";
        apply.applyloans[0].loantype = form.value.loantype;
        apply.applyloans[0].state = form.value.state;
        apply.applyloans[0].city = form.value.city;
        apply.applyloans[0].pincode = form.value.pincode;
        apply.applyloans[0].card = form.value.card;
        apply.applyloans[0].occupation = form.value.occupation;
        apply.applyloans[0].monthlyincome = form.value.monthlyincome;
        apply.applyloans[0].loanamount = form.value.loanamount;
        apply.applyloans[0].loantenure = form.value.loantenure;
        apply.applyloans[0].address = form.value.address;
        apply.applyloans[0].status = "Requested";
        apply.applyloans[0].mobile = form.value.phone;
        apply.applyloans[0].fullname = form.value.fullname;
        apply.applyloans[0].age = form.value.age;


        console.log(apply);
        this.customerService.postCustomer(apply).subscribe(response =>{
        // this.router.navigate(['/updateloan']);
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
