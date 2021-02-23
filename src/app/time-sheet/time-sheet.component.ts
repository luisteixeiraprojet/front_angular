import { Router } from '@angular/router';
import { ActivitiesService } from './../services/activities.service';

import { TimesheetServiceService } from './../services/timesheet-service.service';
import { TimeSheet } from './../model/time-sheet';
import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../services/employees.service';

@Component({
  selector: 'app-time-sheet',
  templateUrl: './time-sheet.component.html',
  styleUrls: ['./time-sheet.component.css']
})

export class TimeSheetComponent implements OnInit {
//button submit
isSubmiting = false;

//getEmployees
allEmployees:any;

allActivities:any;

//creating a new Pointage
timeSheet = new TimeSheet();

  constructor(private _tSService:TimesheetServiceService,
    private _employeeService:EmployeesService,
    private _activitiesService: ActivitiesService, private _router:Router) { }

  async ngOnInit(){
    this.allEmployees = await this._employeeService.getAllEmployees();
    this.allActivities = await this._activitiesService.getAllActivities();
  }


  submitOnClick(form){
    if (form.valid) {

      this.isSubmiting = true;

      const startAt = new Date(this.timeSheet.startAt);
      this.timeSheet.startAt = startAt.toISOString();

      const finishAt = new Date(this.timeSheet.finishAt);
      this.timeSheet.finishAt = finishAt.toISOString();

      this.tsCreateOrUpdate();

  } else{
    alert('Veuillez remplir les champs obligatoires.');
  }
}


async tsCreateOrUpdate(){
  try {
    await this._tSService.createTS(this.timeSheet.toSimpleObject());

  } catch (error) {
    console.log("error ", error.message);
    alert("Attention le formulaire n'est pas bien rempli!");
    this.isSubmiting=false;

  } setTimeout(() => {
    this._router.navigate(['/myAbsences/']);
  }, 500);


}


}//closes class
