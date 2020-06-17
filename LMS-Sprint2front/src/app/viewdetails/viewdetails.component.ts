import { Component, OnInit } from '@angular/core';
import { CustomerserviceService } from '../customerservice.service';

@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.css']
})
export class ViewdetailsComponent implements OnInit {

  constructor(private customerservice: CustomerserviceService) {
    this.viewDetails();
    console.log(this.details);
   }

  ngOnInit(): void {
  }

  details;

  viewDetails(){
    let userData = JSON.parse(localStorage.getItem('userData'));
    let email = userData.email;
    this.customerservice.viewDetails(email).subscribe(response => {
      this.details = response.data;
    })
  }
}
