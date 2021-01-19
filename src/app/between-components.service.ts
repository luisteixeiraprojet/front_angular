import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BetweenComponentsService {


  employeeToUpdate;

  constructor() { }

  receiveEmployeeToUpdate(employeeObj){
    localStorage.setItem('currentEmployee', JSON.stringify(employeeObj));
    console.log("dentro de receiveEmployee em between service");
  }

  getEmployeeToUpdate(){
    const employee = localStorage.getItem('currentEmployee');
    console.log("localstorage employee is" , JSON.parse(employee));
    return JSON.parse(employee); //transform the string in an object

  }

  removeEmployeeToUpdate(){
    localStorage.removeItem('currentEmployee');
  }
}
