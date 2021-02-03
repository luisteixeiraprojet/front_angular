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
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

//__________________________________________________
//when submitting form logIn
 async onSubmit(form: NgForm){
   // console.log('--------- 1. The form data : ', form.value);
    let requestResult  = await this._loginService.checkLogIn(form.value);
    //  console.log("------1.1.requestResult", requestResult);
      if(requestResult != undefined && requestResult != null){
        this._loginService.setDataInLocalStorage('employeeInfos',JSON.stringify(requestResult));
        console.log("--++++ component form logIn " +  JSON.stringify(requestResult));
        this._router.navigate(['']);
      }else{
       this.errorLogIn = true;
       setTimeout(()=> this.errorLogIn = false,2500);
      }
  }


//________________________________________________
  logout() {
   console.log("clic no logOut");
  }



}//closes class

