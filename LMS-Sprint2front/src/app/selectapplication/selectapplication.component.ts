import { Component, OnInit } from '@angular/core';
import { LadserviceService } from '../ladservice.service';

@Component({
  selector: 'app-selectapplication',
  templateUrl: './selectapplication.component.html',
  styleUrls: ['./selectapplication.component.css']
})
export class SelectapplicationComponent implements OnInit {

  constructor(private ladservice: LadserviceService) { }

  applications;
  falsemessage;
  truemessage;

  requested(){
    this.ladservice.requested().subscribe(response =>{
      console.log(response);
      this.applications = response.data;
    })
  }


  ngOnInit(): void {
  }


}
