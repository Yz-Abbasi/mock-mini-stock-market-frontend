import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url : string = 'http://localhost:5037/api/account/';

  body : User = {
    username: '',
    password: ''
  }
  constructor(private http : HttpClient) {
  }

  registerNewUser(newUser : User)
  {
    this.body = {
      username: newUser.username,
      email: newUser.email,
      password: newUser.password
    }

    return this.http.post<any>(`${this.url}register`, this.body).subscribe();
  }

  login(user : User)
  {
    this.body = {
      username: user.username,
      password: user.password
    }

    return this.http.post(`${this.url}login`, this.body).subscribe();
  }
}
