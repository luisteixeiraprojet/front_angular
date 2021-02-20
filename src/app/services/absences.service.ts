import { RequestsApiService } from './requests-api.service';
import { Injectable } from '@angular/core';
import {Absence} from '../model/absence';



@Injectable({
  providedIn: 'root'
})
export class AbsencesService {

  absence:{};

constructor(private _requestsApiService: RequestsApiService) { }

async getMyAbsences(idEmployee){
  try {
      let allMyABs = await this._requestsApiService.getRequest("/absences/myAbsences/" + idEmployee);

     //tranform date into france zone

     for (let eachAbs = 0; eachAbs < allMyABs.length; eachAbs++){

      //ClearDb is sending -1 day in the date so temporarally i solved it like this:
      let startDate = new Date(allMyABs[eachAbs].startDate)
      startDate.setDate(startDate.getDate()+1);
      allMyABs[eachAbs].startDate = startDate.toISOString();

      let requestDate = new Date(allMyABs[eachAbs].requestDate);
      requestDate.setDate(requestDate.getDate()+1);
      allMyABs[eachAbs].requestDate = requestDate.toISOString();

      let endDate = new Date(allMyABs[eachAbs].endDate);
      endDate.setDate(endDate.getDate()+1);
      allMyABs[eachAbs].endDate = endDate.toISOString();
     }
    return allMyABs;

  } catch (error) {
    console.log("Error getMyAbsences ", error.message);
  }
}
//___________________________________________________

  async getAllAbsences(){
    try {

      let allABs = await this._requestsApiService.getRequest("/absences") ;

      //tranform date into france zone

      for (let eachAbs = 0; eachAbs < allABs.length; eachAbs++){

       //ClearDb is sending -1 day in the date so temporarally i solved it like this:
       let startDate = new Date(allABs[eachAbs].startDate)
       startDate.setDate(startDate.getDate()+1);
       allABs[eachAbs].startDate = startDate.toISOString();

       let requestDate = new Date(allABs[eachAbs].requestDate);
       requestDate.setDate(requestDate.getDate()+1);
       allABs[eachAbs].requestDate = requestDate.toISOString();

       let endDate = new Date(allABs[eachAbs].endDate);
       endDate.setDate(endDate.getDate()+1);
       allABs[eachAbs].endDate = endDate.toISOString();

      //so it doesnt return an error when startDate is not yet available
       if( allABs[eachAbs].statusDate){
        let statusDate = new Date(allABs[eachAbs].statusDate);
        statusDate.setDate(statusDate.getDate()+1);
        allABs[eachAbs].statusDate = statusDate.toISOString();
      }
      }
      return allABs


    } catch (error) {
      console.log("Error getAllAbsences, " + error.message);
    }
  }
//______________________________________________________
  async createAbsence(absenceObj){

    try {
     // console.log("////1.absenceObj  ", absenceObj);
       return await this._requestsApiService.postRequest("/absences", absenceObj);

    } catch (error) {
      console.log("error ", error.message);
    }
  }//closes createAbsence

//________________________________________________________
async updateAbsence(abs){
  try {

    let absObject= new Absence();

    absObject.fillObj(abs);
    let absObjectNoUndersocre = absObject.toSimpleObject();
    let resultadoPutRequest = await this._requestsApiService.putRequests("/absences/absenceUpdate/",  absObjectNoUndersocre);
    console.log("uodateabs - absence service ",resultadoPutRequest )
    return resultadoPutRequest;

  } catch (error) {
    console.log("Error " + error.message);
  }

} //closes update

//____________________________________________________________

async deleteAbs(idAbs){
  console.log("dentro absSErv delete")
  try {
    await this._requestsApiService.delete("/absences/" + idAbs);
  } catch (error) {

  }
}

}//closes class
