import { Injectable } from '@angular/core';
import { isTemplateExpression } from 'typescript';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setDataInLocalStorage(employeeInfos: any, data: any) {
    let localS= localStorage.setItem(employeeInfos, data);
  }

 getFromLocalStorage(variableName){
  let theItem = localStorage.getItem(variableName);
  return JSON.parse(theItem);
 }

/* PARA USAR O TOKEN
    getToken() {
    return localStorage.getItem('token');
    }
*/

  clearStorageLogOut() {
  localStorage.clear();
 //console.log("2.5. localStorage Service clear localstorage: limpeza  ", localStorage);
  }


  refreshToken(newToken){
  //  console.log(" ////// 12. dentro de refresh token");
    //as when making a request a new token is created (authDataFuncions - serveur) we need to register it in the localStorage
    let employeeInfosStored = this.getFromLocalStorage('employeeInfos');
  //  console.log(" ////// 12.1 resultado de employeeInfosStored - localstorage ", employeeInfosStored);
    if(employeeInfosStored  && employeeInfosStored.sessionId != newToken){
      employeeInfosStored.sessionId = newToken;
      this.setDataInLocalStorage('employeeInfos', JSON.stringify(employeeInfosStored));
    }
   // console.log(" ////// 12.2. fim de refreshToken - localstorage");
  }



}//closes class
