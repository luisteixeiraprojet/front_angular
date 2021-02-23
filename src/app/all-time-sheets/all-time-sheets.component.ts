import { ActivitiesService } from './../services/activities.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-time-sheets',
  templateUrl: './all-time-sheets.component.html',
  styleUrls: ['./all-time-sheets.component.css']
})
export class AllTimeSheetsComponent implements OnInit {

  activities: any;

  constructor(private _activitiesService:ActivitiesService) { }

 async ngOnInit(){

    this.activities = await this._activitiesService.getAllActivities();
  }

}
