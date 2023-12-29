import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  

  constructor(private authService: AuthService, private router: Router) {}
  username!: string 
  password!: string 


  login(){
     // Calling the login method from the AuthService with provided username and password
    if (this.authService.login(this.username, this.password)) {
       // If login is successful, retrieve the user role from AuthService
      const userRole = this.authService.getUser().role;
       // Navigate to a dashboard based on the user's role
      this.router.navigate([`${userRole}-dashboard`]);
    } else {
      // If login is unsuccessful, display an alert indicating invalid credentials
      alert('Invalid credentials');
    }
  }

}
