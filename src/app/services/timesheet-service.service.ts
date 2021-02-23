import { Injectable } from '@angular/core';
import { RequestsApiService } from './requests-api.service';

@Injectable({
  providedIn: 'root'
})
export class TimesheetServiceService {

  constructor(private _requestsApiService: RequestsApiService) { }

  async createTS(tSObj){

    try {
       return await this._requestsApiService.postRequest("/timesheets", tSObj);
    } catch (error) {
      console.log("error ", error.message);
    }
  }//closes createAbsence

}//closes class
