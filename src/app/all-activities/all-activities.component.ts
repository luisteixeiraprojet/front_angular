import { Router } from '@angular/router';
import { ActivitiesService } from './../services/activities.service';
import { Component, OnInit } from '@angular/core';
import { BetweenComponentsService } from '../services/between-components.service';

@Component({
  selector: 'app-all-activities',
  templateUrl: './all-activities.component.html',
  styleUrls: ['./all-activities.component.css']
})
export class AllActivitiesComponent implements OnInit {

  activities:any;

  constructor(private _router:Router ,  private _activitiesService: ActivitiesService, private _betweenService:BetweenComponentsService) { }

  async ngOnInit() {

    this.activities = await this._activitiesService.getAllActivities();

  }

//_________________________________________________
  updateAct(actToUpdate){
    console.log("dentro de update c actToUpdate ", actToUpdate);
    this._betweenService.receiveObjectToUpdate(actToUpdate);
    this._router.navigate(['/updateactivity/' + actToUpdate.Id_activity]);
  }

//___________________________________________________
async deleteAct(actId){
  console.log("dentro de delete ");
  let bool;
    bool = confirm("delete?");
    if(bool == true){
      await this._activitiesService.deleteAct(actId)
      this.activities = await this._activitiesService.getAllActivities();
  }
}
//______________________________________________________


}//closes class
