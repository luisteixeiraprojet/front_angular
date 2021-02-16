import { RequestsApiService } from './requests-api.service';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class AbsencesService {

  absence:{};

  constructor(private _requestsApiService: RequestsApiService) { }

  async getAllAbsences(){
    try {
      return await this._requestsApiService.getRequest("/absences")
    } catch (error) {
      console.log("Error getAllAbsences, " + error.message);
    }
  }

  async createAbsence(absenceObj){
    try {
      console.log(" ///////////////// 2.1.2. vai chamar postRequest do apiservice ", absenceObj);
      let pedidoPost = await this._requestsApiService.postRequest("/absences", absenceObj);
      console.log(" ////// 2.1.3. resultado dessa chamada - pedidopost ", pedidoPost);
    } catch (error) {
      console.log("error ", error.message);
    }
  }//closes createAbsence

}//closes class
