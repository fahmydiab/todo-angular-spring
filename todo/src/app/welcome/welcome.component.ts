import { WelcomeDataService } from './../service/data/welcome-data.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name = '';

  constructor(private route: ActivatedRoute,
              private service: WelcomeDataService) { }
  message = 'Some Welcome Message';
  welcomemessageFromService;
  ngOnInit() {
    // console.log(this.message);
    // console.log(name);
    this.name = this.route.snapshot.params.name;
  }
  getWelcomeMessageWithParameter() {

    // console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldPathVar(this.name)
    .subscribe(

      res => this.handleSuccessfulResponse(res),
      error => this.handleErrorResponse(error)
    );

    console.log('last line of getWelcomeMessage');
    // console.log('get Welcome Message');
  }

  handleSuccessfulResponse(response) {
    this.welcomemessageFromService = response.message;
    // console.log(response);
    // console.log(response.message);
  }

  handleErrorResponse(err) {
    // console.log(err);
    this.welcomemessageFromService = err.error.message;
  }

}

