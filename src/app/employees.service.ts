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
 employee:{};
  constructor(private http:HttpClient) { }

  /* com mock
  getAllEmployees():Observable<Employee[]> {
    this.employees = EMPLOYEES;
    return of(this.employees);
  }*/

//______________________________________________________
  getAllEmployees(){
   return this.http.get("http://luisteixeiraprojet.herokuapp.com/employees");
  }

//_______________________________________________________
  getEmployeeById(id){
    //console.log("dentro funçao employeeById em employees.service com id passado: " + id);
    return this.http.get("http://luisteixeiraprojet.herokuapp.com/employees/" + id);
  }

//_______________________________________________________

  deleteEmployee(id){
    return this.http.delete("http://luisteixeiraprojet.herokuapp.com/employees/" + id);
  }
//http://luisteixeiraprojet.herokuapp.com/employees/" + id
//http://localhost:3000





}
