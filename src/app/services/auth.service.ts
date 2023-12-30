import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {



   // Property to hold the currently logged-in user
  loggedInUser: any;


  login(username: string, password: string): boolean {
    // Assuming API endpoint to authenticate user
    const userlogindetails = [
      { id: 1, username: 'hr', password: 'hrpass', role: 'hr' },
      { id: 2, username: 'employee', password: 'employeepass', role: 'employee' }
    ];
  // Find user in the  array based on username and password
    const user = userlogindetails.find(u => u.username === username && u.password === password);

// If user is found, set the loggedInUser property and return true
    if (user) {
      this.loggedInUser = user;
      return true;
    }
 // If user is not found, return false
    return false;
  }

  //method to return the currently logged-in user.
  getUser(): any {
    return this.loggedInUser;
  }
  
    // Method to log out the user by resetting loggedInUser to null
  logout(): void {
    this.loggedInUser = null;
  }
}
