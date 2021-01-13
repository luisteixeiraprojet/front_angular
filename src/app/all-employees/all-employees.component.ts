import { EmployeesService } from './../employees.service';
import { Component, OnInit } from '@angular/core';



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

  getAllEmployees(): void {
   // this.employeesService.getAllEmployees().subscribe(employees => this.employees = employees)
  }

  ngOnInit(): void {
    this.employeesService.getAllEmployees().subscribe((data)=>{
      this.employees = data;
    });

  }

}
