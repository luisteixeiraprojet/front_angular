import { Injectable } from '@angular/core';
import { RequestsApiService } from './requests-api.service';
import { Activity } from '../model/activity';


@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  constructor(private _requestsApiService: RequestsApiService ) { }

//________________________________
async createActivity(actObj){

try {
    return await this._requestsApiService.postRequest("/activities", actObj)
  } catch (error) {
    console.log("Error - create Activity ", error.message);
  }
}

//________________________________________
async updateAct(act){
  try {

    console.log("updateAct tem dentro de act ", act );
    let actObject= new Activity();

    actObject.fillObjActivity(act);
    let actObjectNoUndersocre = actObject.toSimplifyObject();
    return await this._requestsApiService.putRequests("/activities/activityUpdate/",  actObjectNoUndersocre);

  } catch (error) {
    console.log("Error " + error.message);
  }
}

//_________________________________
  async getAllActivities(){
    try {
      let allActs = await this._requestsApiService.getRequest("/activities");

//tranform date into france zone
for (let eachAct = 0; eachAct < allActs.length; eachAct++){

  //ClearDb is sending -1 day in the date so temporarally i solved it like this:
  let startDate = new Date(allActs[eachAct].startDate)
  startDate.setDate(startDate.getDate()+1);
  allActs[eachAct].startDate = startDate.toISOString();

  let endDate = new Date(allActs[eachAct].endDate);
  endDate.setDate(endDate.getDate()+1);
  allActs[eachAct].endDate = endDate.toISOString();

}  return allActs;
      } catch (error) {
      console.log("Error getAllActivities" + error.message);
    }
  }
//_____________________________________________
async actPreviouslySelected(idAct){
  console.log("mmmmmmmmmmmmmmmmmmmm --- idact ", idAct)

  try {
    console.log("aaaaaaaa matServ - 75 - vai chmara getrEquest c id ", idAct);
    return  await this._requestsApiService.getRequest("/activities/previouslySelectedMat/" + idAct);

  } catch (error) {
    console.log("Error - getMatByActId ", error.message);
    return error.message;
  }

}
//____________________________________________
async deleteAct(idAct){
  console.log("dentro absSErv delete");
  try {
    await this._requestsApiService.delete("/activities/" + idAct);
  } catch (error) {
    console.log("Error - deleteAbs ", error.message);
    return error.message;
  }
}
}
//_______________________________________________
