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

  constructor(private _absencesService:AbsencesService, private _localStroage:LocalStorageService) { }

  async ngOnInit(){
    this.absences = await this._absencesService.getAllAbsences();
    console.log("allAbsences.ts - ngOnInit ", this.absences);

  }

//________________________________________________
  acceptAbs(){
    console.log("dentro de accepter");
  }

//________________________________________________
  denyAbs(){
    console.log("dentro de deny absence");
  }
//________________________________________________
deleteAbs(){
  console.log("dentro de eleteAbs");
}

}
