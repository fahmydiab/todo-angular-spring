import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HelloWorldBean {
  constructor(public message: string)  {

  }
}
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient
  ) { }
  executeHelloWorldBeanService() {
    // console.log('welcome');
    return this.http.get < HelloWorldBean >('http://localhost:8080/hello-world-bean');
  }
  executeHelloWorldPathVar(name) {
    // console.log('welcome');
    // const basicAuthHeaderString =
    //     this.createBasAuthHttpHeader();
    // const headers = new HttpHeaders({
    //   Authorization: basicAuthHeaderString
    // });

    return this.http.get < HelloWorldBean >(`http://localhost:8080/hello-world/path-var/${name }`,
    // {headers}
    );
  }
  // createBasAuthHttpHeader() {
  //   const username = 'username';
  //   const password = '123';
  //   const basicAuthHeaderString =
  //   'Basic ' + window.btoa(username + ':' + password);
  //   return basicAuthHeaderString;
  // }
}
