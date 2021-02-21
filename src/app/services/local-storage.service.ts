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
  }


  refreshToken(newToken){

    //as when making a request a new token is created (authDataFuncions - serveur) we need to register it in the localStorage
    let employeeInfosStored = this.getFromLocalStorage('employeeInfos');

    if(employeeInfosStored  && employeeInfosStored.sessionId != newToken){
      employeeInfosStored.sessionId = newToken;
      this.setDataInLocalStorage('employeeInfos', JSON.stringify(employeeInfosStored));
    }

  }



}//closes class
