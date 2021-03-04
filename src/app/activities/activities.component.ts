import { LoginService } from './../services/login.service';
import { MaterialsService } from './../services/materials.service';
import { ActivitiesService } from './../services/activities.service';
import { LocalStorageService } from './../services/local-storage.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Activity } from '../model/activity';
import { AbsencesService } from '../services/absences.service';
import { BetweenComponentsService } from '../services/between-components.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})

export class ActivitiesComponent implements OnInit {
  //act and mat relation many to many
  verifyRole

  selectedMaterials: string[];
  prevSelectedMat = [];

  listMaterials = [];
  allMaterials = [];
  options = {
    multiple: true,
    closeOnSelect: false,
    width: '100%',
  };

  isSubmiting = false;

  //to use when updating an absence
  formValues: any;
  updatedAct;
  idAct;

  activity = new Activity();

  constructor(private _router: Router, private _loginService:LoginService  ,private _activitiesService: ActivitiesService, private _matService: MaterialsService, private _localStorageService: LocalStorageService, private _betweenComponents: BetweenComponentsService) { }

  async ngOnInit() {
    //so the employees can not access boss views
   this.verifyRole = this._loginService.isAdmin();
   if(this.verifyRole == false){
     this._router.navigate(['/employeeAccount']);
   }

    //get all materials
    let getAllMaterials = await this._matService.getAllMaterials();

    //get id and name of each activitie
    getAllMaterials.forEach(mat => {
      let matObj = { id: "", text: "" };
      matObj = { id: mat.Id_material, text: mat.name }
      this.listMaterials.push(matObj);
    });

    //pass value to the list from which selection will happen
    this.allMaterials = this.listMaterials;

    //UPdate: pre complete form with infos of the selected activity
    if (this._router.url != '/createactivity') {
      this.activity.fillObjActivity(this._betweenComponents.getObjToUpdate());

      //when updating get the previously selected activities
      let idAct = this.activity.Id_activity;

      let matPreviouslySelected= await this._activitiesService.actPreviouslySelected(idAct);
      for (let index = 0; index < matPreviouslySelected.length; index++) {
        const element = JSON.stringify(matPreviouslySelected[index].Id_activity);
        this.prevSelectedMat.push(element);
      } this.selectedMaterials = this.prevSelectedMat;

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

      this.activity.materials = this.selectedMaterials;

      this.actCreateOrUpdate();

    } else {
      alert('Veuillez remplir les champs obligatoires.');
    }
  }

  //_________________________________________
  async actCreateOrUpdate() {
    try {
      if (this._router.url === '/createactivity') {

        await this._activitiesService.createActivity(this.activity.toSimplifyObject());

      } else {

        //requestDAte doesn't apply here because we can not change that date in the form update.It comes from this.absence by default
        let bool;
        bool = confirm("Cette demande sera changée. Êtes-vous sûr de vouloir continuer? ");

        if (bool == true) {
          console.log("mmmmmmm ----- ver o k tem this.activity ", this.activity.materials);
          this.updatedAct = await this._activitiesService.updateAct(this.activity.toSimplifyObject());
        } else {
          this._router.navigate(['/allactivities/']);
        }
      }
    } catch (error) {
      console.log("Error update Act ", error.message);
    }
    setTimeout(() => {
      this._router.navigate(['/allmaterials/']);
    }, 500);
  };

  //_____________________________________________________________________
  changed(data: string[]) {
    this.selectedMaterials = data;
  }

  //_____________________________________________________


}//closes class
