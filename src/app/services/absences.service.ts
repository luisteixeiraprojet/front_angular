import { RequestsApiService } from './requests-api.service';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class AbsencesService {

  absence:{};

  constructor(private _requestsApiService: RequestsApiService) { }

async getMyAbsences(idEmployee){
  try {
    return await this._requestsApiService.getRequest("/absences/myAbsences/" + idEmployee);
  } catch (error) {
    console.log("Error getMyAbsences ", error.message);
  }
}
//___________________________________________________

  async getAllAbsences(){
    try {
      return await this._requestsApiService.getRequest("/absences")
    } catch (error) {
      console.log("Error getAllAbsences, " + error.message);
    }
  }
//______________________________________________________
  async createAbsence(absenceObj){
    try {
       return await this._requestsApiService.postRequest("/absences", absenceObj);

    } catch (error) {
      console.log("error ", error.message);
    }
  }//closes createAbsence

}//closes class
