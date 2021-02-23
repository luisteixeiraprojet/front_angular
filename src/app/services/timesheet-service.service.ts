import { Injectable } from '@angular/core';
import { RequestsApiService } from './requests-api.service';

@Injectable({
  providedIn: 'root'
})
export class TimesheetServiceService {

  constructor(private _requestsApiService: RequestsApiService) { }

//________________________________________________________________________
  async getAllTimeSheets(){
    console.log("dentro de egtAllTs - TSSErvice -13");
    try {
      let allTS = await this._requestsApiService.getRequest("/timesheets");

      for (let eachTS = 0; eachTS < allTS.length; eachTS++){
        console.log("dentro for ", allTS[eachTS].beginningDate);
        //ClearDb is sending -1 day in the date so temporarally i solved it like this:
        let beginningDate = new Date(allTS[eachTS].beginningDate)
        beginningDate.setDate(beginningDate.getDate()+1);
        allTS[eachTS].beginningDate = beginningDate.toISOString();

        let finishDate = new Date(allTS[eachTS].finishDate);
        finishDate.setDate(finishDate.getDate()+1);
        allTS[eachTS].finishDate = finishDate.toISOString();
      }

      return allTS;

    } catch (error) {
      console.log("Error getAllTS, " + error.message);
    }
  }

//___________________________________________________________________
  async createTS(tSObj){

    try {
       return await this._requestsApiService.postRequest("/timesheets", tSObj);
    } catch (error) {
      console.log("error ", error.message);
    }
  }//closes createAbsence

}//closes class
