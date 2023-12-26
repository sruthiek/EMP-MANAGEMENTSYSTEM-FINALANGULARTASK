import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private apiUrl = 'http://localhost:3000/userlogindetails';


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

  getUser(): any {
    return this.loggedInUser;
  }

  logout(): void {
    this.loggedInUser = null;
  }
}
