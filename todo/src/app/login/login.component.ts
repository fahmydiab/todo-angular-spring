import { BasicAuthenticationService } from './../service/basic-auth.service';
import { HardcodedAuthService } from './../service/hardcoded-auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'user';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  // Router
  // Angular.giveMeRouter
  // Dependency Injection
  constructor(private router: Router,
              private hardcodedAuthenticationService: HardcodedAuthService,
              private basicAuthenticationService: BasicAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin() {
    // console.log(this.username);
    // if(this.username==="in28minutes" && this.password === 'dummy') {
    if (this.hardcodedAuthenticationService.auth(this.username, this.password)) {
      // Redirect to Welcome Page
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

  handleBasicAuthLogin() {
    // console.log(this.username);
    // if(this.username==="in28minutes" && this.password === 'dummy') {
    this.basicAuthenticationService.executeAuthenticationService(this.username, this.password)
        .subscribe(
          data => {
            this.router.navigate(['welcome', this.username]);
            console.log(data);
            this.invalidLogin = false;
          },
          error => {
            console.log(error);
            this.invalidLogin = true;
          }
        );
  }

}
