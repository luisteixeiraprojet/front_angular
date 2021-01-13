import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { EMPLOYEES } from './mock-employees';
import { Employee } from './employeeInterface';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  employees : Employee[];
  constructor(private http:HttpClient) { }

  /* com mock
  getAllEmployees():Observable<Employee[]> {
    this.employees = EMPLOYEES;
    return of(this.employees);
  }*/

  getAllEmployees(){
   return this.http.get("https://jsonplaceholder.typicode.com/users");
  }




}
