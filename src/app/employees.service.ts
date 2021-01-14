import { Injectable } from '@angular/core';


import { EMPLOYEES } from './mock-employees';
import { Employee } from './employeeInterface';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

 //employees : Employee[];
 employees: any;
  constructor(private http:HttpClient) { }

  /* com mock
  getAllEmployees():Observable<Employee[]> {
    this.employees = EMPLOYEES;
    return of(this.employees);
  }*/

  getAllEmployees(){
    console.log("dentro de getAll em service.ts")
   return this.http.get("http://luisteixeiraprojet.herokuapp.com/employees");
   //
  }

  getEmployeeById(){
    console.log("dentro funçao employeeById");
    return this.http.get("http://luisteixeiraprojet.herokuapp.com/employees");
  }


}
