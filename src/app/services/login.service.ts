import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { RequestsApiService } from './requests-api.service' ;
import { Router } from '@angular/router';
import {LocalStorageService} from './local-storage.service';
import { BetweenComponentsService } from './between-components.service';



@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private _router:Router ,private _betweenService: BetweenComponentsService, private _http: HttpClient, private _requestsApiService: RequestsApiService, private _localStorageService: LocalStorageService ) { }

  //to save the user who logged
  isLogged;

  //get the user who logged - pass it to form-log-in.ts
  async checkLogIn(payload: any){
    this.isLogged= await this._requestsApiService.postRequestNoHeaders('/login', payload);
    return this.isLogged;
  }

  //from form-log-in.ts - pass the infos of the user who logged to the localstorage
  registerInLocalStorage(variableName,requestResult){
   let inLocalStorage = this._localStorageService.setDataInLocalStorage('employeeInfos',JSON.stringify(requestResult));
  return inLocalStorage;
  }

  //get from the localStorage the user who logged - pass it to  header.ts so we can access his firstName
  async whoIsLogged(){
    let itemReturnedFromLocalStorage =  await this._localStorageService.getFromLocalStorage('employeeInfos');
    this.isLogged = JSON.parse(itemReturnedFromLocalStorage);
    //console.log("0.Type this.employeeLogged é ", typeof this.employeeLogged);
   // console.log("0.1. key ", Object.keys(this.employeeLogged));
    return this.isLogged;
  }

  //From header - verifiy at each request if token is valide(not expxired and if the user is relaly logged in and not just trying through postman ou directily from the url)
  async verifyValidationToken(){
    let isStillLogged= await this._requestsApiService.getRequest('/tokenVerify');

    if(isStillLogged && isStillLogged.result == "OK"){
      this._betweenService.isLoggedIn.next(true);
    }else{
      this._betweenService.isLoggedIn.next(false);
    }
    console.log("resultado do verifyToken Login ser ", isStillLogged);
  }

  logOut() {
    this._betweenService.logOut();
  }



}//closes class
