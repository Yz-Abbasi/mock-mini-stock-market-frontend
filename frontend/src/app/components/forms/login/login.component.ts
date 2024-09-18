import { Component } from '@angular/core';
import { User } from '../../../models/user';
import { FormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpService } from '../../../services/http.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  router: Router;

  constructor(private http : HttpService, router : Router)
  {
    this.router = router;
  }


  newUser : User = new User
  (
    '',
    '',
    ''
  )

  existingUser : User = new User
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
    this.http.registerNewUser(this.newUser)
    this.submitted = true;
    this.router.navigate(['']);
  }

  loginUser(formValues : any)
  {

  }

  changeForm()
  {
    this.RegisterFormActive = !this.RegisterFormActive;
  }
}
