import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {

    canActivate(route: ActivatedRouteSnapshot): boolean {
        const expectedRoles = route.data.roles;
        let userData = JSON.parse(localStorage.getItem('userData'));
        let role;
        for(const index in expectedRoles){
            if(userData && userData.role === expectedRoles[index]){
             role = expectedRoles[index];   
            }
        }
        if(userData && userData.role === role){
            return true;
        } else {
            return false;
        }
    }
}