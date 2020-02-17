import { BasicAuthenticationService } from './../basic-auth.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService
  implements HttpInterceptor {
  intercept(req: HttpRequest<any>,
            next: HttpHandler) {
    // const username = 'user';
    // const password = '123';
    // const basicAuthHeaderString =
    //   'Basic ' + window.btoa(username + ':' + password);

    const basicAuthHeaderString = this.basicAuthService.getAuthenticatedToken();
    const usernname = this.basicAuthService.getAuthenticatedUser();
    if (basicAuthHeaderString && usernname) {
      req = req.clone({
        setHeaders: {
          Authorization: basicAuthHeaderString
        }
      });
    }
    return next.handle(req);
  }

  constructor(private basicAuthService: BasicAuthenticationService) { }
}
