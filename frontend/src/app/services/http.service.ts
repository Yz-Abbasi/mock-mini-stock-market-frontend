import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  body = {
    username: '',
    email: '',
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
    return this.http.post<any>('http://localhost:5037/api/account/register', this.body).subscribe();
  }

  login(username : string, password : string)
  {
    
  }
}
