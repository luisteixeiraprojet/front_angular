import { Injectable } from '@angular/core';
import { isTemplateExpression } from 'typescript';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setDataInLocalStorage(employeeInfos: any, data: any) {
    localStorage.setItem(employeeInfos, data);
   // console.log("++++2.3 setDataLocalStorage em localStorage Service ", localStorage);
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
 console.log("2.5. localStorage Service clear localstorage: limpeza  ", localStorage);
  }



}
