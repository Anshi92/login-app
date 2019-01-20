import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  title = 'login-app';
  header = 'Welcome';

  constructor(private router:Router) { }

  navigateToLogin() {
    this.router.navigateByUrl('/login');
  }
}
