import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatPaginatorModule} from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { LoanprogramsComponent } from './loanprograms/loanprograms.component';
import { AddclientComponent } from './addclient/addclient.component';
import { MakeloanComponent } from './makeloan/makeloan.component';
import { HomeComponent } from './home/home.component';
import { ViewclientComponent } from './viewclient/viewclient.component';
import { AddloanComponent } from './addloan/addloan.component';
import { CrudloanComponent } from './crudloan/crudloan.component';
import { FilterpipePipe } from './filterpipe.pipe';
import { ClientsearchpipePipe } from './clientsearchpipe.pipe';
import { UpdateloanComponent } from './updateloan/updateloan.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectapplicationComponent } from './selectapplication/selectapplication.component';
import { ApprovedapplicationsComponent } from './approvedapplications/approvedapplications.component';
import { RequestedapplicationsComponent } from './requestedapplications/requestedapplications.component';
import { RejectedapplicationssComponent } from './rejectedapplicationss/rejectedapplicationss.component';
import { RegisterComponent } from './register/register.component';
import { ApplyregisterComponent } from './applyregister/applyregister.component';
import { AuthGuard } from './auth.guard';
import { AuthGuardLogin } from './auth.guardlogin';
import { RequestInterceptor } from './request.interceptor';
import { LoginService } from './login.service';
import { AdminserviceService } from './adminservice.service';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ApplicationstatusComponent } from './applicationstatus/applicationstatus.component';
import { CustomerserviceService } from './customerservice.service';
import { LoginredirectComponent } from './loginredirect/loginredirect.component';
import { FilterloanPipe } from './filterloan.pipe';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { SearchLoanPipe } from './search-loan.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    LoanprogramsComponent,
    AddclientComponent,
    MakeloanComponent,
    HomeComponent,
    ViewclientComponent,
    AddloanComponent,
    CrudloanComponent,
    FilterpipePipe,
    ClientsearchpipePipe,
    UpdateloanComponent,
    SelectapplicationComponent,
    ApprovedapplicationsComponent,
    RequestedapplicationsComponent,
    RejectedapplicationssComponent,
    RegisterComponent,
    ApplyregisterComponent,
    ViewdetailsComponent,
    ChangepasswordComponent,
    ApplicationstatusComponent,
    LoginredirectComponent,
    FilterloanPipe,
    EditprofileComponent,
    ForgotpasswordComponent,
    AboutusComponent,
    ContactComponent,
    SearchLoanPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatPaginatorModule,
    NgxPaginationModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'' , component: HomeComponent},
      {path:'home' , component: HomeComponent},
      {path:'login' , component: LoginComponent, canActivate: [AuthGuardLogin]},
      {path:'loanprograms', component: LoanprogramsComponent},
      {path:'addclient', component: AddclientComponent, data: {roles: ['ROLE_ADMIN']}, canActivate: [AuthGuard]},
      {path:'makeloan', component: MakeloanComponent, data: {roles: ['ROLE_CUSTOMER']}, canActivate: [AuthGuard]},
      {path:'viewclient', component: ViewclientComponent, data: {roles: ['ROLE_ADMIN', 'ROLE_LAD', 'ROLE_ADMIN']}, canActivate: [AuthGuard]},
      {path:'crudloan', component: CrudloanComponent, data: {roles: ['ROLE_ADMIN']}, canActivate: [AuthGuard]},
      {path:'addloan', component: AddloanComponent, data: {roles: ['ROLE_ADMIN']}, canActivate: [AuthGuard]},
      {path:'updateloan', component: UpdateloanComponent, data: {roles: ['ROLE_ADMIN']}, canActivate: [AuthGuard]},
      {path:'selectapplication', component: SelectapplicationComponent, data: {roles: ['ROLE_LAD', 'ROLE_ADMIN']}, canActivate: [AuthGuard]},
      {path:'approvedapplications', component: ApprovedapplicationsComponent, data: {roles: ['ROLE_LAD', 'ROLE_ADMIN']}, canActivate: [AuthGuard]},
      {path:'requestedapplications', component: RequestedapplicationsComponent, data: {roles: ['ROLE_LAD', 'ROLE_ADMIN']}, canActivate: [AuthGuard]},
      {path:'rejectedapplications', component: RejectedapplicationssComponent, data: {roles: ['ROLE_LAD', 'ROLE_ADMIN']}, canActivate: [AuthGuard]},
      {path:'register', component: RegisterComponent},
      {path:'applyregister', component: ApplyregisterComponent},
      {path:'viewdetails', component: ViewdetailsComponent, data: {roles: ['ROLE_CUSTOMER', 'ROLE_LAD', 'ROLE_ADMIN']}, canActivate: [AuthGuard]},
      {path:'changepassword', component: ChangepasswordComponent, data: {roles: ['ROLE_CUSTOMER', 'ROLE_LAD', 'ROLE_ADMIN']}, canActivate: [AuthGuard]},
      {path:'applicationstatus', component: ApplicationstatusComponent, data: {roles: ['ROLE_CUSTOMER']}, canActivate: [AuthGuard]},
      {path:'loginredirect', component: LoginredirectComponent, data: {roles: ['ROLE_ADMIN', 'ROLE_CUSTOMER', 'ROLE_LAD']}, canActivate: [AuthGuard]},
      {path:'editprofile', component: EditprofileComponent, data: {roles: ['ROLE_CUSTOMER', 'ROLE_LAD', 'ROLE_ADMIN']}, canActivate: [AuthGuard]},
      {path:'forgotpassword', component: ForgotpasswordComponent},
      {path:'aboutus', component: AboutusComponent},
      {path:'contact', component: ContactComponent}
    ]),
    BrowserAnimationsModule
  ],
  providers: [
    LoginService,
    AdminserviceService,
    CustomerserviceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
