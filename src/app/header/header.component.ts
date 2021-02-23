import { BetweenComponentsService } from './../services/between-components.service';
import { LoginService } from './../services/login.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LocalStorageService } from './../services/local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent implements OnInit {
  //will subscribe the value from betweenService so it changes the userLoggedName and show/hide the div inside the header
  loggedIn: boolean;

  //binding with html
  userLoggedName;

  constructor(
    private _localStorageService: LocalStorageService,
    private _loginService: LoginService,
    private _router: Router,
    private _betweenService: BetweenComponentsService
  ) {}

  ngOnInit() {
    //get the value of isLoggedIn and pass it/subscrib it to loggedIn variable
    this._betweenService.isLoggedIn.subscribe((value) => {
      this.loggedIn = value;

      if (this.loggedIn == true) {
        this.userLoggedName = this.getFirstName();
      }
    });

/*the token verification is here because everytime that there's an event (get/post requests,
reload page, this part of the app is constantlty updated and hasa variable whose
value changes/is updated at each event - betweenServices)*/

  this._loginService.verifyValidationToken();

  }

  //get the firstName to pass to the variable userLoggedName(html)
  async getFirstName() {
    let userLogged = await this._loginService.whoIsLogged();
    if (
      userLogged.firstName == null ||
      userLogged.firstName == undefined ||
      userLogged.firstName == ''
    ) {

      this.userLoggedName = '';
    } else {
      this.userLoggedName = userLogged.firstName;
    }
  }

  //Log Out - click button 'déconnexion'
  logOut() {
    this._loginService.logOut();
  }

  //clic logo
  tokenVerif(){
  this._loginService.verifyValidationToken();
  console.log("nao passou")
  }
} //closes class
