import { LoginService } from './../services/login.service';
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
  verifyRole;
  activities:any;
  searchText:string;
  constructor(private _router:Router, private _loginService:LoginService,  private _activitiesService: ActivitiesService, private _betweenService:BetweenComponentsService) { }

  async ngOnInit() {
     //so the employees can not access boss views
     this.verifyRole = this._loginService.isAdmin();
     if(this.verifyRole == false){
       this._router.navigate(['/employeeAccount']);
     }

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
