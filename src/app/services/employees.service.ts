import { Injectable } from '@angular/core';
import { EMPLOYEES } from '../mock-employees';
import { Employee } from '../employeeInterface';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

 //employees : Employee[];
 employee:{};
  constructor(private http:HttpClient, private router: Router) { }

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

  try {
    const objectInfos =  await this.http.post("http://luisteixeiraprojet.herokuapp.com/employees/", employeeObj).toPromise();
    return objectInfos;
  } catch (error) {
    console.log(JSON.stringify(error));
    console.log("error details: \n" + error.message + "\n" + error.error);
  }
}

//_______________________________________________________
updateEmployee(id, obj){
  try {
  //  console.log("UPDATE: Employee.service dentro da funçao updateEmployee com o id e o obj a passar ao heroku", id, JSON.stringify(obj));
    this.http.put("http://luisteixeiraprojet.herokuapp.com/employees/formUpdate/" + id, obj).subscribe((info) =>{
     // console.log("UPDATE: employees.service - var que tem a chamada update do heroku antes do seu retorno: " + JSON.stringify(chamadaHeroku));
      return info ;
    });

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
