import { Injectable } from '@angular/core';
import { EMPLOYEES } from '../mock-employees';
import { Employee } from '../employeeInterface';
import { HttpClient, HttpClientModule } from '@angular/common/http';

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
//id passed from employee-by-id.ts + make request GET
  async getEmployeeById(id){
    try {
      return await this.requestsApiService.getRequest("/employees/" + id);
    } catch (error) {
      console.log("Error getAllEmployees " + error.message);
    }
  }

//_______________________________________________________
//values written on the form-new-employee passed + make request post
async createEmployee(employeeObj){

  try {
    let pedidoPost = await this.requestsApiService.postRequest("/employees", employeeObj);
    return pedidoPost;
  } catch (error) {
    console.log("Error " + error.message);
  }
}

//_______________________________________________________
//values written on the form-new-employee passed + make request post
async updateEmployee(id, obj){
  try {
   // console.log("UPDATE: " , id, JSON.stringify(obj));
    return await this.requestsApiService.putRequests("/employees/formUpdate/" + id, obj );

  } catch (error) {
    console.log("Error " + error.message);
  }
}

//_______________________________________________________
//id passed from employee-by-id.ts + make reqquest delete
  async deleteEmployee(id){

    try {
      console.log("¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨1. employeeService chama delete da requestApi");
      let toDelete = await this.requestsApiService.delete("/employees/" + id);
      console.log("¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨2. Resultado da chamada  delete da requestApi ", toDelete);

    } catch (error) {
      console.log("Error " + error.message);
    }
  }

}
