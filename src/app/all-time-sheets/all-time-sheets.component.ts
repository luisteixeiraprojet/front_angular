import { LoginService } from './../services/login.service';
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

   //verify Roles to separate views
   verifyRole;

  constructor(private _activitiesService:ActivitiesService, private _loginService:LoginService,  private _Activatedroute:ActivatedRoute, private _timesheetService: TimesheetServiceService, private _router:Router, private _betweenComponents:BetweenComponentsService) { }

 async ngOnInit(){

    //so the employees can not access boss views
    this.verifyRole = this._loginService.isAdmin();
    if(this.verifyRole == false){
      this._router.navigate(['/employeeAccount']);
    }

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
