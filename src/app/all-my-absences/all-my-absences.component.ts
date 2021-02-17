import { AbsencesService } from './../services/absences.service';
import { LocalStorageService } from './../services/local-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-my-absences',
  templateUrl: './all-my-absences.component.html',
  styleUrls: ['./all-my-absences.component.css']
})
export class AllMyAbsencesComponent implements OnInit {

  idEmployee;
  constructor(private _localStorage: LocalStorageService, private _absenceService:AbsencesService) { }

  myAbsences:any;

  async ngOnInit(){

    let getIdEmployee = await this._localStorage.getFromLocalStorage("employeeInfos");
    this.idEmployee = getIdEmployee.Id_employee;
    this.myAbsences = await this._absenceService.getMyAbsences(this.idEmployee);
  }

//________________________________________________________
  updateAbsence(){
    console.log("dentro de changer absence");


  }
}
