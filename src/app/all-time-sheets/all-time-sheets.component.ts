import { BetweenComponentsService } from './../services/between-components.service';
import { Router, ActivatedRoute } from '@angular/router';
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

   //Update TS
   idTS;
   selectedTS;

  constructor(private _activitiesService:ActivitiesService,  private _Activatedroute:ActivatedRoute, private _timesheetService: TimesheetServiceService, private _router:Router, private _betweenComponents:BetweenComponentsService) { }

 async ngOnInit(){


  this.timesheets = await this._timesheetService.getAllTimeSheets();


  }

  updateTS(tsToUpdate){

    this._betweenComponents.receiveObjectToUpdate(tsToUpdate);
    this._router.navigate(['/updateTs/' +tsToUpdate.Id_timeSheet]);

  }

  async deleteTS(tSId){

    let bool;
    bool = confirm("delete?");
    if(bool == true){
     await this._timesheetService.deleteTimeSheet(tSId);
     this.timesheets = await this._timesheetService.getAllTimeSheets();

  }
}


}//closes classe
