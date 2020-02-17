import { API_URL } from 'src/app/app.constants';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

export const TOKEN = 'token';
export const AUTH_USER = 'authenticatedUser';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  executeAuthenticationService(username, password) {

    const basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    const headers = new HttpHeaders({
        Authorization: basicAuthHeaderString
      });

    return this.http.get<AuthenticationBean>(
      `${API_URL}/basicauth`,
      {headers}).pipe(
        map(
          data => {
            sessionStorage.setItem(AUTH_USER, username);
            sessionStorage.setItem(TOKEN, basicAuthHeaderString);
            return data;
          }
        )
      );
    // console.log("Execute Hello World Bean Service")
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTH_USER);
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser()) {
      return sessionStorage.getItem(TOKEN);
    }
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem(AUTH_USER);
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem(AUTH_USER);
    sessionStorage.removeItem(TOKEN);
  }

}

export class AuthenticationBean {
  constructor(public message: string) { }
}
