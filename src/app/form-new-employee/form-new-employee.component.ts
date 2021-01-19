import { Router } from '@angular/router';
import { BetweenComponentsService } from './../between-components.service';
import { Component, OnInit } from '@angular/core';
import { EmployeesService } from './../employees.service';



@Component({
  selector: 'form-new-employee',
  templateUrl: './form-new-employee.component.html',
  styleUrls: ['./form-new-employee.component.css']
})

export class FormNewEmployeeComponent implements OnInit {

//________Pour CREER EMPLOYEE
  employee = {
    firstName:"",
    lastName:"",
    mobilePhone: "",
    homePhone:"",
    email:"",
    address:"",
    addressComplement:"",
    zipCode:"",
    nationality:"",
    identityNumber:"",
    socialNumber:"",
    birthdayDate:"",
    age:"",
    iban:"",
    typeContract:"",
    joinDate:"",
    hourlyPrice:""
  }


  constructor(private employeesService : EmployeesService, private router: Router, private betweenComponents:BetweenComponentsService){}

  ngOnInit(){
    if(this.router.url != '/createEmployee'){
    let employeeobject = this.betweenComponents.getEmployeeToUpdate();
    this.employee = employeeobject;
    console.log("the form has : " + JSON.stringify(this.employee));
  }
  }//closes ng

  createEmployee(){
    console.log("componenete chama servico createEmployee()")
    this.employeesService.createEmployee(this.employee);
  }

/*/
  updateEmployee(){
    console.log("Em update de form new employee");
    this.betweenComponents.getEmployeeToUpdate();
  }*/


}//closes class
