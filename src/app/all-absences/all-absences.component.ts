import { LoginService } from './../services/login.service';
import { Router } from '@angular/router';
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
  searchText;
  status="en attente" ;
  typeAbs="";


  verifyRole;
  absences:any;
  employeeName;

  constructor(private _absenceService:AbsencesService, private _loginService:LoginService ,private _router:Router, private _localStroage:LocalStorageService) { }

  async ngOnInit(){



   //so the employees can not access boss views
   this.verifyRole = this._loginService.isAdmin();
   if(this.verifyRole == false){
     this._router.navigate(['/employeeAccount']);
   }
    this.absences = await this._absenceService.getAllAbsences();
  }

//_______________________________________________
isDecided(absence){
  if(absence.status != "" && absence.status != null && absence.status != undefined && Number(absence.status) !=0){
    return true
  }else{
     return false }
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
