import { Component } from '@angular/core';
import { User } from '../../../models/user';
import { FormsModule, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpService } from '../../../services/http.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  providers: [CookieService],
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  router: Router;

  constructor(
    private http : HttpService,
    router : Router,
    private cookieService : CookieService)
  {
    this.router = router;
  }


  newUser : User = new User
  (
    '',
    '',
    ''
  )

  checkUser : User = new User
  (
    '',
    '',
    ''
  )

  submitted : boolean = false;
  loginFormActive : boolean = true;
  RegisterFormActive : boolean = true;

  registerUser(formValues : any)
  {
    this.newUser.username = formValues.username;
    this.newUser.email = formValues.email;
    this.newUser.password = formValues.password;
    console.log(formValues);
    console.log('on submit function :' + this.newUser.username + this.newUser.password);

    const response = this.http.registerNewUser(this.newUser);
    console.log(response);

    this.cookieService.set("JWT", "Token goes here");

    this.submitted = true;

    this.router.navigate(['']);
  }

  loginUser(formValues : any)
  {
    this.checkUser.username = formValues.username;
    this.checkUser.password = formValues.password;
    console.log(formValues);

    const response = this.http.login(this.checkUser);
    console.log(response)

    this.cookieService.set("JWT", "Token goes here");

    this.router.navigate(['']);
  }

  switchForm()
  {
    this.RegisterFormActive = !this.RegisterFormActive;
  }
}
