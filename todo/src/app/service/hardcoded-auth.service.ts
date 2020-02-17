import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthService {



  constructor() {

   }

  auth(username, password) {
    // console.log('before ' + this.isUserLoggedIn());

    if (username === 'user' && password === '123') {

      sessionStorage.setItem('authenticatedUser', username);
      // console.log('after ' + this.isUserLoggedIn());

      return true;
    }
    return false;
  }


  isUserLoggedIn() {
    const user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser');
  }
}
