import { BetweenComponentsService } from './../services/between-components.service';
import { Router } from '@angular/router';
import { TimesheetServiceService } from './../services/timesheet-service.service';
import { LocalStorageService } from './../services/local-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-my-timesheets',
  templateUrl: './all-my-timesheets.component.html',
  styleUrls: ['./all-my-timesheets.component.css']
})
export class AllMyTimesheetsComponent implements OnInit {

  idEmployee;

  constructor(private _localStorage: LocalStorageService, private _timeSService:TimesheetServiceService, private _router:Router, private _betweenService: BetweenComponentsService) { }

  myTimesheets:any;

  async ngOnInit() {
    let getIdEmployee = await this._localStorage.getFromLocalStorage("employeeInfos");
    this.idEmployee = getIdEmployee.Id_employee;

    this.myTimesheets = await this._timeSService.getMyTS(this.idEmployee);

  }

}
