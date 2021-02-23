import { Injectable } from '@angular/core';
import { RequestsApiService } from './requests-api.service';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  constructor(private _requestsApiService: RequestsApiService ) { }

  async getAllActivities(){
    try {

      return await this._requestsApiService.getRequest("/activities");

      } catch (error) {
      console.log("Error getAllActivities" + error.message);
    }
  }
}
