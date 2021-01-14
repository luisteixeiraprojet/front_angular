
import { Component, OnInit } from '@angular/core';

//import Service to comunication
import { EmployeesService } from './../employees.service';
import { Employee } from '../employeeInterface';

@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.css']
})
export class AllEmployeesComponent implements OnInit {

  //employees: Employee[]; //com mock
  employees:any;

  constructor(private employeesService : EmployeesService ) { }



  ngOnInit(): void {
     this.employeesService.getAllEmployees().subscribe((e) =>{
       this.employees = e;
       console.log("----------os employees sao: " + this.employees);
     });



  }

}
