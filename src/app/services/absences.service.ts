import { RequestsApiService } from './requests-api.service';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class AbsencesService {

  absence:{};

  constructor(private _requestsApiService: RequestsApiService) { }

  async getAllAbsences(){
    console.log("++++++2.dentro de getAllAbsences");
    try {
      return await this._requestsApiService.getRequest("/absences")
    } catch (error) {
      console.log("Error getAllAbsences, " + error.message);
    }
  }
}
