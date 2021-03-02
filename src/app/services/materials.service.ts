import { Injectable } from '@angular/core';
import { RequestsApiService } from './requests-api.service';
import {Material} from '../model/material';

@Injectable({
  providedIn: 'root'
})
export class MaterialsService {

  constructor(private _requestsApiService: RequestsApiService,  ) {}

//_________________________________
async createMaterial(matObj){
  console.log("uuuuuu 1.dentro de updateMAterial: matobj tem: ", matObj)

  try {
    return await this._requestsApiService.postRequest("/materials", matObj);
  } catch (error) {
    console.log("Error - create Material", error.message);
  }
}

//____________________________
async updateMat(mat){
  console.log("uuuuuu 1.dentro de updateMAterial antes do if: matobj tem: ", mat)
  try {
    console.log("uuuuuu 1.1.dentro de updateMAterial depois do: matobj tem: ", mat)
    let matObject= new Material();

    matObject.fillMatObj(mat);
    let actObjectNoUndersocre = matObject.toSimplifyObject();
    console.log("uuuuuu 1.2.chamar putRequest c actObjectNoUndersocre: ", actObjectNoUndersocre)
    return await this._requestsApiService.putRequests("/materials/materialUpdate/",  actObjectNoUndersocre);

  } catch (error) {
    console.log("Error " + error.message);
  }
}
//___________________________________
async getAllMaterials(){

  try {
    let allMats = await this._requestsApiService.getRequest("/materials");

  //tranform date into france zone
for (let eachMat = 0; eachMat < allMats.length; eachMat++){

  //ClearDb is sending -1 day in the date so temporarally i solved it like this:
  let purchaseDate = new Date(allMats[eachMat].purchaseDate)
  purchaseDate.setDate(purchaseDate.getDate()+1);
  allMats[eachMat].purchaseDate = purchaseDate.toISOString();

} return allMats;

  } catch (error) {
    console.log("Error getAllMaterials ", error.message);
  }
}

//______________________________________________

async deleteMat(idMat){
  try {
    await this._requestsApiService.delete("/materials/" + idMat);
  } catch (error) {
    console.log("Error - deleteAbs ", error.message);
    return error.message;
  }
}
//_________________________________________________

async actPreviouslySelected(matId){
  console.log("aaaaa 1. matServ-73-dentro previouslySelectedAct ");
  try {
    console.log("aaaaaaaa matServ - 75 - vai chmara getrEquest c id ", matId);
    return  await this._requestsApiService.getRequest("/materials/previouslySelectedAct/" + matId);

  } catch (error) {
    console.log("Error - getActByMatId ", error.message);
    return error.message;
  }
}
//__________________________________________________
}//closes class
