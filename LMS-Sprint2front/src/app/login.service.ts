import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  myURL = 'http://localhost:8080/api';

  constructor(private http: HttpClient, private router: Router) { }

  postLogin(login){
    return this.http.post<any>(`${this.myURL}/login`, login)
  }

  isAdmin(): boolean {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if(userData && userData.role === 'ROLE_ADMIN'){
      return true;
    } else {
      return false;
    }
  }

  isCustomer(): boolean {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if(userData && userData.role === 'ROLE_CUSTOMER'){
      return true;
    } else {
      return false;
    }
  }

  isLAD(): boolean {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if(userData && userData.role === 'ROLE_LAD'){
      return true;
    } else {
      return false;
    }
  }

  isLogged(): boolean {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if(userData){
      return true;
    } else {
      return false;
    }
  }

  logout(){
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }
}
