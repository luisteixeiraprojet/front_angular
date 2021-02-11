import { BetweenComponentsService } from './../services/between-components.service';
import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-log-in',
  templateUrl: './form-log-in.component.html',
  styleUrls: ['./form-log-in.component.css']
})
export class FormLogInComponent implements OnInit {

  isLogin: boolean = false;
  errorLogIn : boolean = false;

  constructor(
    private _loginService : LoginService,
    private _router: Router,
    private _betweenService:BetweenComponentsService
  ) { }

  ngOnInit(): void {
  }

//__________________________________________________
//when submitting form logIn
 async onSubmit(form: NgForm){

    //pass the values written on the form - loginService + requests-api.service
    let requestResult  = await this._loginService.checkLogIn(form.value);
    console.log(">>>>>>>>>1.form-log-in click submit chama checkLogin ");
    console.log(">>>>>>>>>1.1. form-log-in resultado de chamar checkLogin ", requestResult);


    if(!requestResult){
      this.errorLogIn = true;
     setTimeout(()=> this.errorLogIn = false,2500);
    }

  }

}//closes class

