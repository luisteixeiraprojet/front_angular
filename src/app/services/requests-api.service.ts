
import { Router } from '@angular/router';
import { LocalStorageService } from './local-storage.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { error } from 'protractor';
import { BetweenComponentsService } from './between-components.service';




@Injectable({providedIn: 'root'})
export class RequestsApiService {

  servBaseAddress = "http://localhost:3000";
  //http://luisteixeiraprojet.herokuapp.com"

  constructor(private _http: HttpClient, private _localStorageService: LocalStorageService, private _betweenService:BetweenComponentsService ) { }


//_____________________________________________________________________
async getRequest(url:any){
/*all get requests will verify if the token is still valide before sending the request to the serveur
so we can send headers:authorisation  solicited in the serveur and so we 're redirected to page login if token not valide
*/
  try {
    //verify if infos about user are still in the localstorage (example,when someone tries to access directily writting the url without loggin in )
    let allInfos = JSON.parse(this._localStorageService.getFromLocalStorage("employeeInfos"));
    console.log("1. GET: request-api all infos ", allInfos);

    if(allInfos == null || allInfos == undefined){
      this._betweenService.logOut();
      return
    }

    //if the allInfos are still in the storage, get the token add it to the http header's request
    let token = allInfos.sessionId;
    const headers = new HttpHeaders({'authorization':'Bearer '+token});
    console.log("2. GET-requetstapi token ", token);
    console.log("2. GET-requetstapi token ", headers);

    let resultRequest; //initialized here as undefined (almost as type 'any') so it doesnt return a syntaxe erreur from loginService(function verifyValidationToken());

    //send the get request(getAllEmployees, for example) where header's property authorization = token (solicited in app.js(serveur))
    resultRequest = await this._http.get(this.servBaseAddress+url, {headers}).toPromise();
    return resultRequest;

  } catch (error) {
    console.log("Error ", error);
    //if the token is no longer valide the middleWare(app.js) will be returned an erreur (401 to 403) and we will be redirect to the page login
    if(error.status >= 401 && error.status <= 403 ){
      this._betweenService.logOut();
      return
    }
  }
}

//_______________________________________________________________________

/*this request Post without Headers authorisation is exclusive forcases where nothing is yet stored in
the localstorage as when we are loggin in for instance*/
async postRequestNoHeaders(url: any, requestBody: any) {
  //all post requests will verify if the token is still valide before sending the request to the serveur
 try {
   console.log("postRequest: ", this.servBaseAddress + url + JSON.stringify(requestBody));
   const requestResult =  await this._http.post(this.servBaseAddress + url, requestBody).toPromise();
   return requestResult;

 } catch (error) {
   console.log(JSON.stringify(error));
   console.log("Error details postRequest : \n" + error.message + "\n" + error.error);
 };
 }

//to all post request when we're already logged in
 async postRequest(url: any, requestBody: any) {
   //all post requests will verify if the token is still valide before sending the request to the serveur
  try {

    //verify if infos about user are still in the localstorage (example,when someone tries to access directily writting the url without loggin in)
    let allInfos = JSON.parse(this._localStorageService.getFromLocalStorage("employeeInfos"));
    console.log("request-api all infos ", allInfos);

    if(allInfos == null || allInfos == undefined){
      this._betweenService.logOut();
      return
    }

    //if the allInfos are still in the storage, get the token add it to the http header's request(solicited in app.js(serveur))
    let token = allInfos.sessionId;
    console.log("o token ", token);
    const headers = new HttpHeaders({'authorization':'Bearer '+token});
    console.log("em headers postRequest, api ", headers);
    let requestResult;

    //send the get request(getAllEmployees, for example) where header's property authorization = token
    console.log("postRequest: ", this.servBaseAddress + url + JSON.stringify(requestBody));
    requestResult =  await this._http.post(this.servBaseAddress + url,requestBody,{headers}).toPromise();

    return requestResult;

  } catch (error) {
    console.log(JSON.stringify(error));
    console.log("Error details postRequest : \n" + error.message + "\n" + error.error);

    // //if the token is no longer valide the middleWare(app.js) will be returned an erreur (401 to 403) and we will be redirect to the page login
    if(error.status >= 401 && error.status <= 403 ){
      this._betweenService.logOut();
      return
    }
  };
  }

 //_________________________________________________________________________
 async putRequests(url: any, requestBody: any){
  try {
    //verify if infos about user are still in the localstorage (example,when someone tries to access directily writting the url without loggin in)
    let allInfos = JSON.parse(this._localStorageService.getFromLocalStorage("employeeInfos"));
    console.log("request-api all infos ", allInfos);

    if(allInfos == null || allInfos == undefined){
      this._betweenService.logOut();
      return
    }

    //if the allInfos are still in the storage, get the token add it to the http header's request(solicited in app.js(serveur))
    let token = allInfos.sessionId;
    const headers = new HttpHeaders({'authorization':'Bearer '+token});


    //send the get request(getAllEmployees, for example) where header's property authorization = token
      console.log("PUT: id and obj "+ url, JSON.stringify(requestBody));
      this._http.put(this.servBaseAddress + url, requestBody, {headers}).subscribe((info) =>{
        return info ;
      });
    } catch (error) {
      console.log(JSON.stringify(error));
      console.log("Error details: \n" + error.message + "\n" + error.error);
      // //if the token is no longer valide the middleWare(app.js) will be returned an erreur (401 to 403) and we will be redirect to the page login
      if(error.status >= 401 && error.status <= 403 ){
        this._betweenService.logOut();
      return
    }
    }
}

//___________________________________________________________________________
async delete(url:any){
  try {

    //verify if infos about user are still in the localstorage (example,when someone tries to access directily writting the url without loggin in)
    let allInfos = JSON.parse(this._localStorageService.getFromLocalStorage("employeeInfos"));
    console.log("request-api all infos ", allInfos);

    if(allInfos == null || allInfos == undefined){
      this._betweenService.logOut();
      return
    }

    //if the allInfos are still in the storage, get the token add it to the http header's request(solicited in app.js(serveur))
    let token = allInfos.sessionId;
    console.log("o token ", token);
    const headers = new HttpHeaders({'authorization':'Bearer '+token});
    console.log("em headers postRequest, api ", headers);
    let resultRequest;

    //send the get request(getAllEmployees, for example) where header's property authorization = token
    console.log("DELETE: " + this.servBaseAddress + url )
    resultRequest = await this._http.delete(this.servBaseAddress + url,{headers} ).toPromise();
    return resultRequest;

  } catch (error) {
    console.log("Error " + error.message);
     //if the token is no longer valide the middleWare(app.js) will be returned an erreur (401 to 403) and we will be redirect to the page login
     if(error.status >= 401 && error.status <= 403 ){
      this._betweenService.logOut();
      return
  }
}
}
}//closes class
