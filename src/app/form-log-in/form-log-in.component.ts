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

  constructor(
    private _loginService : LoginService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }


  onSubmit(form: NgForm){
    console.log('--------- The form data : ', form.value);
    this._loginService.postTypeRequest('user/login', form.value).subscribe(
      (res: any) => {
        if (res.status) {
          console.log(" o res é ", res);
        }
      });
  }

  logout() {
   console.log("clic no logOut");
  }



}//closes class

