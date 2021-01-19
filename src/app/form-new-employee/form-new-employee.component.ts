import { Component, OnInit } from '@angular/core';
import { EmployeesService } from './../employees.service';

@Component({
  selector: 'form-new-employee',
  templateUrl: './form-new-employee.component.html',
  styleUrls: ['./form-new-employee.component.css']
})

export class FormNewEmployeeComponent {

  employee = {
    firstName: "",
    lastName:"",
    mobilePhone: ""
  }

  constructor(private employeesService : EmployeesService){}

  createEmployee(){
    console.log("componenete chama servico createEmployee()")
    this.employeesService.createEmployee(this.employee);

  }
  teste(){

    this.employee.firstName="";
    this.employee.lastName="";
    this.employee.mobilePhone="";

  }


}//closes class
