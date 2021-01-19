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
async createEmployee(employeeObj){
  console.log("funcao create ja no serviço chamada pelo componente com employeeObj " + JSON.stringify(employeeObj));
  try {
    const objectInfos =  await this.http.post("http://luisteixeiraprojet.herokuapp.com/employees/", employeeObj).toPromise();
    console.log(objectInfos);
    return objectInfos;
  } catch (error) {
    console.log(JSON.stringify(error));
    console.log("error details: \n" + error.message + "\n" + error.error);
  }
}

//_______________________________________________________

  deleteEmployee(id){
    return this.http.delete("http://luisteixeiraprojet.herokuapp.com/employees/" + id);
  }

//http://luisteixeiraprojet.herokuapp.com/employees/" + id
//http://localhost:3000


}
