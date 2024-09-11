import { Component } from '@angular/core';
import { User } from '../../../models/user';
import { FormsModule, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  router: Router;
  constructor(private http : HttpService, router : Router)
  {
    this.router = router;
  }
  user : User = new User
  (
    '',
    '',
    ''
  )

  submitted : boolean = false;

  onSubmit(formValues : any)
  {
    this.user.username = formValues.username;
    this.user.email = formValues.email;
    this.user.password = formValues.password;
    console.log(formValues);
    console.log('on submit function :' + this.user.username + this.user.password);
    this.http.registerNewUser(this.user)
    this.submitted = true;
    this.router.navigate(['']);
  }
}
