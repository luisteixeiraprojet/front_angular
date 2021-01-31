import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BetweenComponentsService {


  employeeToUpdate;

  constructor() { }

  receiveEmployeeToUpdate(employeeObj){
    localStorage.setItem('currentEmployee', JSON.stringify(employeeObj));
   // console.log("service: localstorage esta guardado o employee a editar " +JSON.stringify(employeeObj));
  }

  getEmployeeToUpdate(){
    const employee = localStorage.getItem('currentEmployee');
    console.log("em getEmployee em between services, o employee é : " , employee);
    console.log("em getEmployee em between services, o employee é e em JSON.parse fica: " , JSON.parse(employee));
    return JSON.parse(employee); //transform the string in an object
  }



  removeEmployeeToUpdate(){
    localStorage.removeItem('currentEmployee');
  }
}
