import { Injectable } from '@angular/core';
import { EMPLOYEES } from '../mock-employees';
import { Employee } from '../employeeInterface';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Router } from '@angular/router';
import { RequestsApiService } from './requests-api.service' ;

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

 //employees : Employee[];
 employee:{};
  constructor(private http:HttpClient, private router: Router, private requestsApiService: RequestsApiService ) { }

//______________________________________________________
  async getAllEmployees(){
    try {
      return await this.requestsApiService.getRequest("/employees");
    } catch (error) {
      console.log("Error getAllEmployees " + error.message);
    }
   //return this.http.get("http://luisteixeiraprojet.herokuapp.com/employees");
  }

//_______________________________________________________
  async getEmployeeById(id){
    try {
      console.log("dentro funçao employeeById em employees.service com id passado: " + id);
      return await this.requestsApiService.getRequest("/employees/" + id);
    } catch (error) {
      console.log("Error getAllEmployees " + error.message);
    }
    //return this.http.get("http://luisteixeiraprojet.herokuapp.com/employees/" + id);
  }

//_______________________________________________________
async createEmployee(employeeObj){
  try {
    return await this.requestsApiService.postRequest("/employees", employeeObj);
  } catch (error) {
    console.log("Error " + error.message);
  }
}

//_______________________________________________________
async updateEmployee(id, obj){
  try {
   // console.log("----------1. UPDATE: Employee.service dentro da funçao updateEmployee : id e obj", id, JSON.stringify(obj));
    return await this.requestsApiService.putRequests("/employees/formUpdate/" + id, obj );
  } catch (error) {
    console.log("Error " + error.message);
  }
}

//_______________________________________________________
  async deleteEmployee(id){

    try {
      console.log("------1. deleteEmployee employeeSErvice")
      await this.requestsApiService.delete("/employees/" + id);
    } catch (error) {
      console.log("Error " + error.message);
    }

  }


  /*
    return await this.http.delete("http://luisteixeiraprojet.herokuapp.com/employees/" + id);
  }
 */

}
