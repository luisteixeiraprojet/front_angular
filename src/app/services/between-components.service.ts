import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

//the point of this service is to available tha communication between services, allow them to exchange variables between them

export class BetweenComponentsService {

  //Update the value 'isLoggedIn' everytime user loggsIn/out: form-log-in (logIn), header (logOut and userLoggedName)
  //that value will be subscribed by the variable 'loggedIn' in header.ts
  //that will dictate if the header shows/hides the div (buttons and userName) and will update the value of userLohggedName
  public isLoggedIn : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  private objToUpdate:any;

  constructor(private _router:Router) { }

  //from employee-by-id + stringify 'cause localStorage works with strings
  receiveEmployeeToUpdate(employeeObj){
    localStorage.setItem('currentEmployee', JSON.stringify(employeeObj));
  }

  //asked from form-new-employee : get from the localStorage the user saved in the function above ans return it in the format object(parse)
  getEmployeeToUpdate(){
    const employee = localStorage.getItem('currentEmployee');
    return JSON.parse(employee); //transform the string in an object
  }

  //asked from all-employees.ts -click button 'add new employee' - to clean the infos in the form from the last updated employee so we can create another one in a clean form
  removeEmployeeToUpdate(){
    localStorage.removeItem('currentEmployee');
  }

  logOut() {
    localStorage.clear();
    this.isLoggedIn.next(false);
    this._router.navigate(['login']);
  }

  //receive abs to update and pass it to others components
  receiveObjectToUpdate(objToUpdate){
    //console.log("***** 1.BTWC-47 - dentro de receiveObjToUpdate ");
     this.objToUpdate = objToUpdate;
    console.log("***** 1. BTWC-47 - receiveObjToUpdate ",   this.objToUpdate);
  }

  getObjToUpdate(){
    return this.objToUpdate;
  }


}
