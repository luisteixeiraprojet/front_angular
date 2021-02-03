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

  async checkLogIn(payload: any){
    console.log("----- 2. checkLogin LoginService ");
    let result= await this.requestsApiService.postRequest('/login', payload);
    console.log("----- 2.1. checkLogin LoginService ", result);

    return result;
  }

  setDataInLocalStorage(employeeInfos: any, data: any) {
    localStorage.setItem(employeeInfos, data);
   // console.log("++++ setDataLocalStorage em login service ", localStorage);

  }


}//closes class
