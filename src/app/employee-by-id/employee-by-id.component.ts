import { Component, OnInit } from '@angular/core';

//import Service
import { EmployeesService } from './../employees.service';

@Component({
  selector: 'app-employee-by-id',
  templateUrl: './employee-by-id.component.html',
  styleUrls: ['./employee-by-id.component.css']
})
export class EmployeeByIdComponent implements OnInit {

  employeeByid:any;

  constructor(private employeesService : EmployeesService) { }



  ngOnInit(): void {
    this.employeesService.getEmployeeById().subscribe((e) =>{
    this.employeeByid = e;
    console.log("dentro de employeeById " + this.employeeByid);
  });
  }

}
