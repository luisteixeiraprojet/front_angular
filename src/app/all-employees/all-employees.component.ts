import { BetweenComponentsService } from '../services/between-components.service';
import { Component, OnInit } from '@angular/core';

//import Service to comunication
import { EmployeesService } from '../services/employees.service';
import { Employee } from '../employeeInterface';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { Router } from '@angular/router';
import { LocalStorageService } from './../services/local-storage.service';




@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.css']
})
export class AllEmployeesComponent implements OnInit {

  //employees: Employee[]; //com mock
  employees:any;

  constructor(private _betweenService: BetweenComponentsService, private employeesService : EmployeesService, private _localStorageService: LocalStorageService, private _router: Router, private betweenComponents:BetweenComponentsService, private _Activatedroute:ActivatedRoute, private _location: Location ) { }

  async ngOnInit() {

    this.employees =  await this.employeesService.getAllEmployees();
  }


//_______________________________________________
addButtonClick(){
  this.betweenComponents.removeEmployeeToUpdate();
  //will clean the form, erase the infos from the last updated/created employee
}

}; //closes class


