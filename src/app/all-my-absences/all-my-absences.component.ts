import { BetweenComponentsService } from './../services/between-components.service';
import { Router } from '@angular/router';
import { AbsencesService } from './../services/absences.service';
import { LocalStorageService } from './../services/local-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-my-absences',
  templateUrl: './all-my-absences.component.html',
  styleUrls: ['./all-my-absences.component.css']
})
export class AllMyAbsencesComponent implements OnInit {
  search;
  status="" ;
  typeAbs="";

  idEmployee;

  constructor(private _localStorage: LocalStorageService, private _absenceService:AbsencesService, private router: Router, private _betweenService:BetweenComponentsService ) { }

  myAbsences:any;

  async ngOnInit(){
    let getIdEmployee = await this._localStorage.getFromLocalStorage("employeeInfos");
    this.idEmployee = getIdEmployee.Id_employee;
    this.myAbsences = await this._absenceService.getMyAbsences(this.idEmployee);
    console.log(" this.myAbsences ",  this.myAbsences)
  }

//_______________________________________________
isDecided(absence){
  if(absence.status != "" && absence.status != null && absence.status != undefined && Number(absence.status) !=0){
    return true
  }else{
     return false }
}


//________________________________________________________
  updateAbsence(absToUpdate){
    this._betweenService.receiveObjectToUpdate(absToUpdate);
    this.router.navigate(['/updateAbsence/' + absToUpdate.Id_absence]);
  }

//________________________________________________________
  async deleteAbsence(idAbsence){
      let bool;
        bool = confirm("delete?");
        if(bool == true){
         await this._absenceService.deleteAbs(idAbsence);
         this.myAbsences = await this._absenceService.getMyAbsences(this.idEmployee);
      }
    }



}//closes class
