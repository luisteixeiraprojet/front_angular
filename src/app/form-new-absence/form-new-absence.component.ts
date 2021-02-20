import { BetweenComponentsService } from './../services/between-components.service';
import { LocalStorageService } from './../services/local-storage.service';
import { AbsencesService } from './../services/absences.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {Absence} from "../model/absence";


@Component({
  selector: 'app-form-new-absence',
  templateUrl: './form-new-absence.component.html',
  styleUrls: ['./form-new-absence.component.css']
})
export class FormNewAbsenceComponent implements OnInit {
  isSubmiting = false;

  //to use when updating an absence
  formValues:any;
  updatedAbsence;
  idAbsence;

  absence = new Absence();

  constructor(private router: Router,private _absenceService: AbsencesService, private _localStorageService: LocalStorageService, private _betweenComponents : BetweenComponentsService) { }

  ngOnInit(): void {

    //if not createAbsence
    if(this.router.url != '/formAbsence'){
      this.absence.fillObj(this._betweenComponents.getObjToUpdate());
      //so it will present the date in html format dd/mm/yyyy of the selected absence otherwise it wont happen
    this.absence.startDate = this.absence.startDate.split('T')[0];
     this.absence.endDate = this.absence.endDate.split('T')[0];
     this.absence.requestDate = this.absence.requestDate.split('T')[0]

    }else{
      var local = new Date();
      local.setMinutes(local.getMinutes() - local.getTimezoneOffset());
      this.absence.requestDate = local.toJSON().slice(0,10);
    }
  }

  //when submitting the form
  submitOnClick(form) {
    if (form.valid) {

    this.isSubmiting = true;

    const requestDate = new Date(this.absence.requestDate);
    this.absence.requestDate = requestDate.toISOString();

    const startDate = new Date(this.absence.startDate);
    this.absence.startDate = startDate.toISOString();

    const endDate = new Date(this.absence.endDate);
    this.absence.endDate = endDate.toISOString();

    let getIdEmployee = this._localStorageService.getFromLocalStorage("employeeInfos");
    this.absence.Id_employee = getIdEmployee.Id_employee;

  //  console.log("/////// 2. FNA.ts - 64-, ", this.absence )

    this.absCreateOrUpdate();

    } else {
      alert('Veuillez remplir les champs obligatoires.');
    }
  }

  async absCreateOrUpdate(){


    try {
      if (this.router.url === '/formAbsence'){
      await this._absenceService.createAbsence(this.absence.toSimpleObject());

      }else{
        //requestDAte doesn't apply here because we can not change that date in the form update.It comes from this.absence by default
        let bool;
        bool = confirm("Cette demande sera changée. Êtes-vous sûr de vouloir continuer? ");
        if(bool == true){
        this.updatedAbsence = await this._absenceService.updateAbsence(this.absence.toSimpleObject());
        }else{
          this.router.navigate(['/myAbsences/']);
        }
      }
    } catch (error) {
      console.log("error ", error.message);
      alert("Attention le formulaire n'est pas bien rempli!");
      this.isSubmiting=false;

    } setTimeout(() => {
      this.router.navigate(['/myAbsences/']);
    }, 500);
  }







}//closes class
