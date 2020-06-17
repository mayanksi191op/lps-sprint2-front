import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminserviceService } from '../adminservice.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-updateloan',
  templateUrl: './updateloan.component.html',
  styleUrls: ['./updateloan.component.css']
})
export class UpdateloanComponent implements OnInit {

  loanToUpdate;

  constructor(private route: ActivatedRoute,
              private adminservice: AdminserviceService,
              private router: Router) {
    this.route.queryParams.subscribe(response =>{
      this.loanToUpdate = response;
      console.log(this.loanToUpdate);
    })
   }

   updateLoan(form: NgForm){
     this.adminservice.updateLoan(form.value).subscribe(response =>{
       console.log(response);
       form.reset();
       if(response.error === false) {
        form.reset();
        this.router.navigateByUrl('/crudloan');
      }
     })
   }

  ngOnInit(): void {
  }

}
