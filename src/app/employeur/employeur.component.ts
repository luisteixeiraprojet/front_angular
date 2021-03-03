import { Router } from '@angular/router';


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
  constructor(private _loginService: LoginService, private _router:Router) { }


  ngOnInit(): void {

    //verify if the user is still logged in
    this._loginService.verifyValidationToken();

    //so the employee can't access boss views, verify role (employee VS admin)
    this.verifyRole = this._loginService.isAdmin();
    this.isAdmin = this.verifyRole;
    if(this.isAdmin == false){
      this._router.navigate(['/employeeAccount']);
    }
  }

}//closes class
