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
  userName;
  isLogin: boolean = false;
  errorLogIn : boolean = false;
  isLostPsw : boolean = false;
  resultForgottenPsw={};
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

    let requestResult  = await this._loginService.checkLogIn(form.value);
    console.log("resquesResult ", requestResult);
    if(requestResult.result=="ko"){
      this.errorLogIn = true;
     setTimeout(()=> this.errorLogIn = false,2500);
    }
  }

//________________________________________________________
//when submitting form forgot psw
async sendUN(form: NgForm){

this.resultForgottenPsw  = await this._loginService.forgotPsw(form.value);


  }

}//closes class

