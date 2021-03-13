import { LoginService } from './../services/login.service';
import { ActivitiesService } from './../services/activities.service';
import { BetweenComponentsService } from './../services/between-components.service';
import { MaterialsService } from './../services/materials.service';
import { Router } from '@angular/router';
import {Material} from '../model/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-material',
  templateUrl: './form-material.component.html',
  styleUrls: ['./form-material.component.css']
})

export class FormMaterialComponent implements OnInit {
  verifyRole;

  //used when updating (assumes the previously idAct of the mat to update) and when creating (saves the idAct to send to update)
  selectedActivities:string[];
  previouslyChosenAct=[];

  listActivities = [];
  allActivities=[];
  options = {
    multiple: true,
    closeOnSelect: false,
    width:"100%"



  };

  isSubmiting = false;

  //to use when updating a material
  formValues:any;
  updatedMat;
  idMat;

 material = new Material();

  constructor(private _loginService:LoginService  ,private _router:Router, private _matService:MaterialsService, private _betweenService: BetweenComponentsService, private _activitiesService:ActivitiesService) { }

  async ngOnInit() {

      //so the employees can not access boss views
      this.verifyRole = this._loginService.isAdmin();
      if(this.verifyRole == false){
        this._router.navigate(['/employeeAccount']);
      }

  //get all activities to be chosen
   let getAllActivities = await this._activitiesService.getAllActivities();

   //get id and name of each activitie
   getAllActivities.forEach(act => {
    let actObj={id:"", text:""};
    actObj = {id : act.Id_activity, text: act.name}
    this.listActivities.push(actObj);
   });

   //pass value to the list from which selection will happen
   this.allActivities = this.listActivities;
   console.log("this.allActivities", this.allActivities);

//Form Update Material
    if(this._router.url != '/creatematerial'){

      //when updating fill the form with infos from the id Material
      this.material.fillMatObj(this._betweenService.getObjToUpdate());

      //when updating get the previously selected activities
      let idMaterial = this.material.Id_material;
      let actPreviouslySelected= await this._matService.actPreviouslySelected(idMaterial);
      for (let index = 0; index < actPreviouslySelected.length; index++) {
        const element = JSON.stringify(actPreviouslySelected[index].Id_activity);
        this.previouslyChosenAct.push(element);
      } this.selectedActivities = this.previouslyChosenAct;


      //so it will present the date in html format dd/mm/yyyy of the selected absence otherwise it wont happen
      this.material.purchaseDate = this.material.purchaseDate.split('T')[0];
    }

  }//closes ngOnINit
//__________________________________

//submitting the form
submitOnClick(form) {
  if (form.valid) {

  this.isSubmiting = true;
  //to conv dates
  const purchaseDate = new Date(this.material.purchaseDate);
  this.material.purchaseDate = purchaseDate.toISOString();

  //so the list show the activities
  this.material.activities = this.selectedActivities;

  this.matCreateOrUpdate();
  } else {
    alert('Veuillez remplir les champs obligatoires.');
  }

}

//_____________________________________
async matCreateOrUpdate(){

  try {
    if (this._router.url === '/creatematerial'){

  await this._matService.createMaterial(this.material.toSimplifyObject());

  }else{

  let bool;
  bool = confirm("Êtes-vous sûr de vouloir continuer? ");
  if(bool == true){
    console.log("mmmmmmm -----1. ver o k tem this.activity ", this.material.activities);
    console.log("mmmmmmm -----2. ver o k tem this.activity ", this.material.toSimplifyObject());
  this.updatedMat = await this._matService.updateMat(this.material.toSimplifyObject());
  }else{
    this._router.navigate(['/allmaterials/']);
  }
}
  } catch (error) {
    console.log("Error update Act ", error.message);

  } setTimeout(() => {
    this._router.navigate(['/allmaterials/']);
  }, 500);
};


//_____________________________________________________________________
changed(data: string[]) {
  this.selectedActivities = data;
}


}//closes class
