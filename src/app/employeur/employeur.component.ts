import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-employeur',
  templateUrl: './employeur.component.html',
  styleUrls: ['./employeur.component.css']
})
export class EmployeurComponent implements OnInit {

  isLogin = false;
  constructor(private _loginService: LoginService) { }


  ngOnInit(): void {


  }

}//closes class
