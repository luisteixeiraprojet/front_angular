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
    console.log("1.login, requestResult linha 33, ", requestResult);
      if(requestResult != undefined && requestResult != null){
        this._loginService.registerInLocalStorage('employeeInfos',JSON.stringify(requestResult));

      //change value of the variable used in the header so the header show/dont show the div with userName and butttons
        this._betweenService.isLoggedIn.next(true);
        this._router.navigate(['']);

      }else{ //if the credentials dont match with DB a div erreur will appear for 2.5 seconds
       this.errorLogIn = true;
       setTimeout(()=> this.errorLogIn = false,2500);
      }
  }

}//closes class

