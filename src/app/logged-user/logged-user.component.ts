import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {LoggedUserService} from '../logged-user.service';

@Component({
  selector: 'app-logged',
  templateUrl: './logged-user.component.html',
  styleUrls: ['./logged-user.component.scss']
})

export class LoggedUserComponent {
  constructor(private router:Router , private loggedUserService : LoggedUserService) {  }

  logout() {
      this.loggedUserService.removeToken();
      this.router.navigateByUrl('/welcome');
  }
}
