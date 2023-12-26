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
    if (this.authService.login(this.username, this.password)) {
      const userRole = this.authService.getUser().role;
      this.router.navigate([`${userRole}-dashboard`]);
    } else {
      alert('Invalid credentials');
    }
  }

}
