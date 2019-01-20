import { Component } from '@angular/core';
import {LoggedUserService} from './logged-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  status : any;

  constructor(private loggedUserService: LoggedUserService) {
     this.loggedUserService.currentMessage.subscribe(status => this.status = status);
  }

}
