
import { Component, OnInit } from '@angular/core';

//import Service to comunication
import { EmployeesService } from './../employees.service';
import { Employee } from '../employeeInterface';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.css']
})
export class AllEmployeesComponent implements OnInit {

  //employees: Employee[]; //com mock
  employees:any;



  constructor(private employeesService : EmployeesService, private _Activatedroute:ActivatedRoute, private _location: Location ) { }



  ngOnInit(): void {
     this.employeesService.getAllEmployees().subscribe((e) =>{
       this.employees = e;
       //console.log("----------os employees sao: " + JSON.stringify(this.employees));
     });



  }

  //________________________________________________
  //button back
  goBack(){
    this._location.back();
  }

};


