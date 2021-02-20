import { LocalStorageService } from './../services/local-storage.service';
import { Component, OnInit } from '@angular/core';

import { AbsencesService } from '../services/absences.service';
import { RequestsApiService } from '../services/requests-api.service' ;

@Component({
  selector: 'app-all-absences',
  templateUrl: './all-absences.component.html',
  styleUrls: ['./all-absences.component.css']
})
export class AllAbsencesComponent implements OnInit {

  absences:any;
  employeeName;



  constructor(private _absenceService:AbsencesService, private _localStroage:LocalStorageService) { }

  async ngOnInit(){
    this.absences = await this._absenceService.getAllAbsences();




  }

//_______________________________________________
isDecided(absence){
  console.log("is decided ", absence);
  if(absence.status != "" && absence.status != null && absence.status != undefined && Number(absence.status) !=0){
    console.log("absence.status ", absence.status );
    return true
  }else{ return false }

}

//________________________________________________
  async acceptAbs(selectedAbs){
    let bool;
        bool = confirm("Cette demande sera REFUSEE. Vous n'aurez pas la possibilité de changer votre décision. Êtes-vous sûr de vouloir continuer? ");
        if(bool == true){
    selectedAbs.status = "accepted";
    selectedAbs.statusDate = new Date().toISOString();
    let x = await this._absenceService.updateAbsence(selectedAbs);
    }
  }

//________________________________________________
  async denyAbs(selectedAbs){
    let bool;
        bool = confirm("Cette demande sera REFUSEE. Vous n'aurez pas la possibilité de changer votre décision. Êtes-vous sûr de vouloir continuer? ");
        if(bool == true){
    selectedAbs.status = "refused";
    selectedAbs.statusDate = new Date().toISOString();
    await this._absenceService.updateAbsence(selectedAbs);
    }
  }

//________________________________________________
async deleteAbs(idAbs){
      let bool;
        bool = confirm("delete?");
        if(bool == true){
         await this._absenceService.deleteAbs(idAbs);
         this.absences = await this._absenceService.getAllAbsences();
      }
}

}//closes class
