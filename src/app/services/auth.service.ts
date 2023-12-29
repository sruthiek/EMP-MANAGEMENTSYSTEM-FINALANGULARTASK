import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  //  property to  holds  the currently logged-in user
  loggedInUser: any;

  login(username: string, password: string): boolean {
    // Assuming API endpoint to authenticate user
    const userlogindetails = [
      { id: 1, username: 'hr', password: 'hrpass', role: 'hr' },
      { id: 2, username: 'employee', password: 'employeepass', role: 'employee' }
    ];

    const user = userlogindetails.find(u => u.username === username && u.password === password);

    if (user) {
      this.loggedInUser = user;
      return true;
    }

    return false;
  }

  //method to return the currently logged-in user.
  getUser(): any {
    return this.loggedInUser;
  }
  
  logout(): void {
    this.loggedInUser = null;
  }
}
