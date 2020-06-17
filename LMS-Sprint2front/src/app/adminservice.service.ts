import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  myURL = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  postLoan(loan) {
    return this.http.post<any>(`${this.myURL}/loanprograms/add`, loan)
  }

  getLoan(){
    return this.http.get<any>(`${this.myURL}/loanprograms`)
  }

  deleteLoan(loan){
    return this.http.delete<any>(`${this.myURL}/loanprograms/delete/${loan.loan_no}`)
  }

  getPageLoans(pageNo, itemsPerPage, sortBy){
    if(!sortBy){
    return this.http.get<{content: any[], totalElements: number}>(`${this.myURL}/loanprograms/${pageNo}/${itemsPerPage}`);
    } else {
      return this.http.get<{content: any[], totalElements: number}>(`${this.myURL}/loanprograms/${pageNo}/${itemsPerPage}/${sortBy}`);
    }
  }

  updateLoan(loan){
    return this.http.put<any>(`${this.myURL}/loanprograms/update`, loan);
  }

  viewClients(){
    return this.http.get<any>(`${this.myURL}/clients`)
  }

  viewPageClients(pageNo, itemsPerPage, sortBy){
    if(!sortBy){
      return this.http.get<{content: any[], totalElements: number}>(`${this.myURL}/clients/${pageNo}/${itemsPerPage}`);
    } else {
      return this.http.get<{content: any[], totalElements: number}>(`${this.myURL}/clients/${pageNo}/${itemsPerPage}/${sortBy}`);
    }   
  }

  deleteClient(client){
    return this.http.delete<any>(`${this.myURL}/clients/${client.userid}`) 
  }

  postClient(client) {
    return this.http.post<any>(`${this.myURL}/clients`, client)
  }

}
