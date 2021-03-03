import { LocalStorageService } from './../services/local-storage.service';
import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeur',
  templateUrl: './employeur.component.html',
  styleUrls: ['./employeur.component.css']
})
export class EmployeurComponent implements OnInit {

  isLogin = false;

  isAdmin = false ;
  verifyRole;
  constructor(private _loginService: LoginService, ) { }


  ngOnInit(): void {

    //verify if the user is still logged in
    this._loginService.verifyValidationToken();

    //to seprate views, verify role (employee VS admin)
    this.verifyRole = this._loginService.isAdmin();
    this.isAdmin = this.verifyRole;

  }

}//closes class
