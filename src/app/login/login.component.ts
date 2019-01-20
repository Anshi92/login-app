import { Component , OnInit } from '@angular/core';
import {LoginService} from './login.service';
import {Router} from '@angular/router';
import {LoggedUserService} from '../logged-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loading = false;
  submitted = false;
  email: any;
  password: any;

  constructor(private loginService: LoginService , 
              private loggedUserService: LoggedUserService,
              private router:Router) { }

  login() {
    this.submitted = true;
    this.loading = true;
      this.loginService.login(
        this.email,
        this.password
      ).subscribe(result => {
        this.loading = false;
        this.router.navigateByUrl('/logged-user');
        this.loggedUserService.setToken(this.email);
      },
      r => {
        this.loading = false;
        alert('Invalid username or password');
      });     
  }

  previousView() {
    this.router.navigateByUrl('/welcome');
  }
}
