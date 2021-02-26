import { ActivitiesService } from './../services/activities.service';
import { LocalStorageService } from './../services/local-storage.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {Activity} from '../model/activity';
import { AbsencesService } from '../services/absences.service';
import { BetweenComponentsService } from '../services/between-components.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
  isSubmiting = false;

  //to use when updating an absence
  formValues:any;
  updatedAct;
  idAct;

  activity = new Activity();

  constructor(private _router: Router ,private _activitiesService: ActivitiesService , private _localStorageService: LocalStorageService , private _betweenComponents : BetweenComponentsService ) { }

  ngOnInit(): void {


     if(this._router.url != '/createactivity'){
      this.activity.fillObjActivity(this._betweenComponents.getObjToUpdate());
     console.log("-------depois de fill ", this.activity);

      //so it will present the date in html format dd/mm/yyyy of the selected absence otherwise it wont happen
      this.activity.startDate = this.activity.startDate.split('T')[0];
     this.activity.endDate = this.activity.endDate.split('T')[0];
     }
  }

  //____________________________________________________________
  //when submitting the form
  submitOnClick(form) {
    if (form.valid) {

    this.isSubmiting = true;

    const startDate = new Date(this.activity.startDate);
    this.activity.startDate = startDate.toISOString();

    const endDate = new Date(this.activity.endDate);
    this.activity.endDate = endDate.toISOString();

    this.actCreateOrUpdate();

    } else {
      alert('Veuillez remplir les champs obligatoires.');
    }
  }

  //_________________________________________
  async actCreateOrUpdate(){

    try {
      if (this._router.url === '/createactivity'){
      console.log("createOrUpdate act");
      await this._activitiesService.createActivity(this.activity.toSimplifyObject());
    }else{
      console.log("-------- dentro de update act ");
    //requestDAte doesn't apply here because we can not change that date in the form update.It comes from this.absence by default
    let bool;
    bool = confirm("Cette demande sera changée. Êtes-vous sûr de vouloir continuer? ");
    if(bool == true){
    this.updatedAct = await this._activitiesService.updateAct(this.activity.toSimplifyObject());
    }else{
      this._router.navigate(['/allactivities/']);
    }
  }
    } catch (error) {
      console.log("Error update Act ", error.message);

    } setTimeout(() => {
      this._router.navigate(['/allactivities/']);
    }, 500);
  };

//_____________________________________________________


}//closes class
