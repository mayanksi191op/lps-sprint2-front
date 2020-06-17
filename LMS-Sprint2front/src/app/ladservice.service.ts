import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LadserviceService {

  constructor(private http: HttpClient) { }

  myURL = 'http://localhost:8080/api';

  getPageApplications(pageNo, itemsPerPage, sortBy){
    if(!sortBy){
    return this.http.get<{content: any[], totalElements: number}>(`${this.myURL}/applications/status/${pageNo}/${itemsPerPage}`);
    } else {
      return this.http.get<{content: any[], totalElements: number}>(`${this.myURL}/loanprograms/${pageNo}/${itemsPerPage}/${sortBy}`);
    }
  }

  requested(){
    return this.http.get<any>(`${this.myURL}/application/requested/`)
  }

  getPageRequested(pageNo, itemsPerPage, sortBy){
    if(!sortBy){
    return this.http.get<{content: any[], totalElements: number}>(`${this.myURL}/application/requested/${pageNo}/${itemsPerPage}`);
    } else {
      return this.http.get<{content: any[], totalElements: number}>(`${this.myURL}/application/requested/${pageNo}/${itemsPerPage}/${sortBy}`);
    }
  }

  approved(){
    return this.http.get<any>(`${this.myURL}/application/approved/`)
  }

  getPageApproved(pageNo, itemsPerPage, sortBy){
    if(!sortBy){
    return this.http.get<{content: any[], totalElements: number}>(`${this.myURL}/application/approved/${pageNo}/${itemsPerPage}`);
    } else {
      return this.http.get<{content: any[], totalElements: number}>(`${this.myURL}/application/approved/${pageNo}/${itemsPerPage}/${sortBy}`);
    }
  }

  rejected(){
    return this.http.get<any>(`${this.myURL}/application/rejected/`)
  }

  getPageRejected(pageNo, itemsPerPage, sortBy){
    if(!sortBy){
    return this.http.get<{content: any[], totalElements: number}>(`${this.myURL}/application/rejected/${pageNo}/${itemsPerPage}`);
    } else {
      return this.http.get<{content: any[], totalElements: number}>(`${this.myURL}/application/rejected/${pageNo}/${itemsPerPage}/${sortBy}`);
    }
  }

  approveLoan(application){
    return this.http.put<any>(`${this.myURL}/application/setapprove/${application.loanid}`, application)
  }

  rejectLoan(application){
    return this.http.put<any>(`${this.myURL}/application/setreject/${application.loanid}`, application)
  }
}
