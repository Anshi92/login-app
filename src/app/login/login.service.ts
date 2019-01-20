import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class LoginService {

  constructor(private http: HttpClient) { }

  getAllCats() {
    return this.http.get<any>('http://localhost:8000/api/cats');
  }

  login(email: string, password: string){
    return this.http.post('http://localhost:8000/api/login', {
      email: email,
      password: password
    });
  }
}
