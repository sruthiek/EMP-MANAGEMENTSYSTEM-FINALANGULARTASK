import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class HrAuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
     //  it checks if the user's role, obtained from the AuthService, is equal to 'hr'. 
    // If true, it allows access to the route by returning true.
    if (this.authService.getUser()?.role === 'hr') {
      return true;
    }
    //  it checks if the user's role, obtained from the AuthService, is equal to 'employee'. 
    // If true, it allows access to the route by returning true.
    else if(this.authService.getUser()?.role === 'employee'){
      return true;
    }
        // If the user does not have the role of 'hr' or 'employee, it redirects the user to the login page and returns false
        else{
          this.router.navigate(['/login']);
          return false;
        }
    
  }
}