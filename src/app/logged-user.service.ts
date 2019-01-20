import {Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const TOKEN = 'TOKEN';

@Injectable({
  providedIn: 'root'
})
export class LoggedUserService {

  private messageSource = new BehaviorSubject("Logged Out");
  currentMessage = this.messageSource.asObservable();

  setToken(token: string): void {
    localStorage.setItem(TOKEN, token);
    this.messageSource.next('Logged In');
  }

  isLogged() {
    return localStorage.getItem(TOKEN) != null;
  }

  removeToken() {
      localStorage.removeItem(TOKEN);
      this.messageSource.next('Logged Out');
  }
}