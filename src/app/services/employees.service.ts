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
  }

//_______________________________________________________
//id passed from employee-by-id.ts + make request GET

  async getEmployeeById(id){

    try {

      let emplById = await this.requestsApiService.getRequest("/employees/" + id);

       //ClearDb is sending -1 day in the date so temporarally i solved it like this:
       if(emplById.birthdayDate){
        let birthdayDate = new Date(emplById.birthdayDate)
        birthdayDate.setDate(birthdayDate.getDate()+1);
        emplById.birthdayDate = birthdayDate.toISOString();
        }

        if(emplById.joinDate){
        let joinDate = new Date(emplById.joinDate)
        joinDate.setDate(joinDate.getDate()+1);
        emplById.joinDate = joinDate.toISOString();
        }

      return emplById;

    } catch (error) {
      console.log("Error " + error.message);
    }
  }

//_______________________________________________________
//values written on the form-new-employee passed + make request post
async createEmployee(employeeObj){
  try {
    let pedidoPost = await this.requestsApiService.postRequest("/employees", employeeObj);
    console.log("------------------emplservice 65 ----- pedidoPost ", pedidoPost);
    return pedidoPost;
  } catch (error) {
    console.log("Error " + error.message);
  }
}

//_______________________________________________________
//values written on the form-new-employee passed + make request post
async updateEmployee(id, obj){
  try {
    return await this.requestsApiService.putRequests("/employees/updateProfil/" + id, obj );

  } catch (error) {
    console.log("Error " + error.message);
  }
}

//_____________________________________________________
async profileUpdate(id, obj){

  try {

    return await this.requestsApiService.putRequests("/employees/updateProfil/" + id, obj );

  } catch (error) {
    console.log("Error profile update ", error.message);
  }




}

//_______________________________________________________
//id passed from employee-by-id.ts + make reqquest delete
  async deleteEmployee(id){

    try {
      await this.requestsApiService.delete("/employees/" + id);

    } catch (error) {
      console.log("Error " + error.message);
    }
  }

}
