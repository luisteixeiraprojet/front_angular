import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { RequestsApiService } from './requests-api.service' ;
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private _http: HttpClient, private requestsApiService: RequestsApiService, private _router: Router ) { }

  employeeLogged;
  employeeLoggedFirstName;


  async checkLogIn(payload: any){
   console.log("----- 2. checkLogin LoginService ");
    this.employeeLogged= await this.requestsApiService.postRequest('/login', payload);
    return this.employeeLogged;
  }

  setDataInLocalStorage(employeeInfos: any, data: any) {
    localStorage.setItem(employeeInfos, data);
    console.log("++++2.3 setDataLocalStorage em login service ", localStorage);
  }

  clearStorageLogOut() {
  localStorage.clear();
   console.log("2.4..depois de clear localstorage: limpeza  ", localStorage);
  }

  async userNameIs(){
    let employeeName;
    this.employeeLogged =  await JSON.parse(localStorage.getItem('employeeInfos'));
    console.log("2.5. loginService - this.employeeLogged.firstName ", this.employeeLogged.firstName);
    if(this.employeeLogged.firstName =="" || this.employeeLogged.firstName==null ||  this.employeeLogged.firstName==undefined){
      employeeName ="";
    }else {
      employeeName= this.employeeLogged.firstName;
      console.log("employeeName é: ", employeeName);
    }
    return employeeName;
  }





}//closes class
