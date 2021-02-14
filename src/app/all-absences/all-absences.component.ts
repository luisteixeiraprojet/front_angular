import { Component, OnInit } from '@angular/core';

import { AbsencesService } from '../services/absences.service';
import { RequestsApiService } from './requests-api.service' ;

@Component({
  selector: 'app-all-absences',
  templateUrl: './all-absences.component.html',
  styleUrls: ['./all-absences.component.css']
})
export class AllAbsencesComponent implements OnInit {

  absences:any;

  constructor(private _absencesService:AbsencesService) { }

  async ngOnInit(){
    console.log("++++++++ 1.dentro de ngOnInit all-absences");
    this.absences = await this._absencesService.getAllAbsences();


  }

}
