import { BetweenComponentsService } from './../services/between-components.service';
import { LoginService } from './../services/login.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //will subscribe the value from betweenService
  loggedIn: boolean;

  //binding with html
  userLoggedName;

  constructor(private _loginService : LoginService,  private _router: Router, private _betweenService:BetweenComponentsService) { }

  ngOnInit(){

    //the variable loggedIn subscribs the value of the variable isLoggedIn.
    this._betweenService.isLoggedIn.subscribe(value => {
      this.loggedIn = value;
      //console.log("00 - valor de logged in ", this.loggedIn);

      if(this.loggedIn == true){
     // console.log("01 - valor de logged in ", this.loggedIn);
       this.userLoggedName= this.getUserName();
       //console.log("02 - valor de logged in ", this.userLoggedName);
      }
    })

  }

  async getUserName(){
    //console.log("0. dentro de getUserName - header")
    //console.log("1. header this.userLoggedIn", this.userLoggedName);
    this.userLoggedName = await this._loginService.userNameIs();
    console.log("1.1 header this.userLoggedIn", this.userLoggedName);
  }

  logOut(){
    this._loginService.clearStorageLogOut();
    this._betweenService.isLoggedIn.next(false);
    this._router.navigate(['login']);
  }

}//closes class
