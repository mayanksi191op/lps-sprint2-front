import { Component, OnInit } from '@angular/core';
import { CustomerserviceService } from '../customerservice.service';

@Component({
  selector: 'app-loginredirect',
  templateUrl: './loginredirect.component.html',
  styleUrls: ['./loginredirect.component.css']
})
export class LoginredirectComponent implements OnInit {

  constructor(private customerservice: CustomerserviceService) {
    this.viewDetails();
    console.log(this.details);
   }

  details;
  role;

  viewDetails(){
    let userData = JSON.parse(localStorage.getItem('userData'));
    let email = userData.email;
    this.customerservice.viewDetails(email).subscribe(response => {
      this.details = response.data;
      this.role = response.data.role;
    })
  }

  ngOnInit(): void {
  }
}
