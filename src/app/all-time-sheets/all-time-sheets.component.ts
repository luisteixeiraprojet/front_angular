import { TimesheetServiceService } from './../services/timesheet-service.service';
import { ActivitiesService } from './../services/activities.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-time-sheets',
  templateUrl: './all-time-sheets.component.html',
  styleUrls: ['./all-time-sheets.component.css']
})
export class AllTimeSheetsComponent implements OnInit {

  timesheets: any;

  constructor(private _activitiesService:ActivitiesService, private _timesheetService: TimesheetServiceService) { }

 async ngOnInit(){

    this.timesheets = await this._timesheetService.getAllTimeSheets();


  }

  updateAct(act){
    console.log("updating activity");
  }

  deleteAct(actId){
    console.log("deleting an activity ");

  }

}
