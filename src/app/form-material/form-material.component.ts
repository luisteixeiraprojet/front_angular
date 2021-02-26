import { BetweenComponentsService } from './../services/between-components.service';
import { MaterialsService } from './../services/materials.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {Material} from '../model/material';
import { Select2OptionData } from 'ng-select2';
import { Options } from 'select2';

@Component({
  selector: 'app-form-material',
  templateUrl: './form-material.component.html',
  styleUrls: ['./form-material.component.css']
})
export class FormMaterialComponent implements OnInit {

  public activityList: Array<Select2OptionData>;
  public options: Select2Options;
  public value: string[];
  public current: string;

  isSubmiting = false;

  //to use when updating an absence
  formValues:any;
  updatedMat;
  idMat;

 material = new Material();
 allActivities:any;

  constructor(private _router:Router, private _matService:MaterialsService, private _betweenService: BetweenComponentsService) { }

  async ngOnInit() {

    if(this._router.url != '/creatematerial'){
      this.material.fillMatObj(this._betweenService.getObjToUpdate());

      //so it will present the date in html format dd/mm/yyyy of the selected absence otherwise it wont happen
      this.material.purchaseDate = this.material.purchaseDate.split('T')[0];
    }


    this.activityList = [
      {
        id: '1',
        text: 'poda'
      },
      {
        id: '2',
        text: 'siceaux'
      },
      {
        id: '3',
        text: 'gants'
      },
      {
        id: '4',
        text: 'escabo'
      }
    ];

    this.value = [];

    this.options = {
      multiple: true,
      minimumResultsForSearch:2
    }

    this.current = this.value.join(' | ');
    }
    changed(data:string[]) {
      this.current = data.join(' | ');
    }
//__________________________________
//submitting the form
submitOnClick(form) {
  if (form.valid) {



  this.isSubmiting = true;

  const purchaseDate = new Date(this.material.purchaseDate);
  this.material.purchaseDate = purchaseDate.toISOString();

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

  //requestDAte doesn't apply here because we can not change that date in the form update.It comes from this.absence by default
  let bool;
  bool = confirm("Êtes-vous sûr de vouloir continuer? ");
  if(bool == true){
  this.updatedMat = await this._matService.updateMat(this.material.toSimplifyObject());
  }else{
    this._router.navigate(['/allactivities/']);
  }
}
  } catch (error) {
    console.log("Error update Act ", error.message);

  } setTimeout(() => {
    this._router.navigate(['/allmaterials/']);
  }, 500);
};

//_____________________________________________________________________




}//closes class
