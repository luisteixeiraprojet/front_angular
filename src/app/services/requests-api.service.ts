
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
console.log("+++++++ 3. dentro de getRequest api service")
  try {
    //verify if infos user are still in the localstorage (example,when someone tries to access directily writting the url without loggin in)

    let allInfos = this._localStorageService.getFromLocalStorage("employeeInfos");
    console.log("++++++3.1. verifcacao de allInfos em GetRequest, " , allInfos);

    if(allInfos == null || allInfos == undefined){
      this._betweenService.logOut();
      return
    }

    //if the allInfos are still in the storage, get the token and add it to the http header's request
    let token = allInfos.sessionId;
    const headers = new HttpHeaders({'authorization':'Bearer '+token});
    let resultRequest; //initialized here as undefined (almost as type 'any') so it doesnt return a syntaxe erreur from loginService(function verifyValidationToken());

    //send the get request(getAllEmployees, for example) where header's property authorization = token (solicited in app.js(serveur))
    resultRequest = await this._http.get(this.servBaseAddress+url, {headers}).toPromise();
    this._localStorageService.refreshToken(resultRequest.newToken); //resultRequest.newToken sent as response from the serveur (example, routes employees)
    return resultRequest.content;

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
/*this request Post without Headers authorisation is exclusive for cases where nothing is yet stored in the localstorage as when we are loggin in for instance*/
async postRequestNoHeaders(url: any, requestBody: any) {
  console.log(">>>>>>>>>.3.request-api dentro de postRequestNoHeaders ");
  //all post requests will verify if the token is still valide before sending the request to the serveur
 try {
   //console.log("postRequest: ", this.servBaseAddress + url + JSON.stringify(requestBody));
   console.log(">>>>>>>>>3.1.request-api - http.post ao url  ", this.servBaseAddress + url + "com o objecto", requestBody);

   const requestResult =  await this._http.post(this.servBaseAddress + url, requestBody).toPromise();
   console.log(">>>>>>>>>3.2.request-api - Resultado do http.post de cima e que vai ser retornado ", requestResult);

   return requestResult;

 } catch (error) {
   console.log(JSON.stringify(error));
   console.log("Error details postRequest : \n" + error.message + "\n" + error.error);
 };
 }

 //____________________________________________________________________________________________________
//to all post request when we're already logged in
 async postRequest(url: any, requestBody: any) {
   //all post requests will verify if the token is still valide before sending the request to the serveur and register the new token in the LocalStorage
  try {
    console.log(" ::::::::::::::::5.requests-api linha 86 dentro de postRequest()" );
    //verify if infos about user are still in the localstorage (example,when someone tries to access directily writting the url without loggin in)
    let allInfos = this._localStorageService.getFromLocalStorage("employeeInfos");
    console.log(" ::::::::::::::::6.requests-api linha 89 - allInfos ", allInfos );

    if(allInfos == null || allInfos == undefined){
      this._betweenService.logOut();
      console.log(" ::::::::::::::::6.1.requests-api linha 93 - se erro no allInfos ");
      return
    }

    //if the allInfos are still in the storage, get the token add it to the http header's request(solicited in app.js(serveur))
    let token = allInfos.sessionId;
    console.log(" ::::::::::::::::7.requestApi - linha 99- o token é ", token  );
    const headers = new HttpHeaders({'authorization':'Bearer '+token});
    console.log(" ::::::::::::::::8.requestApi - linha 101- headers sao ", headers  );
    let requestResult;

    //send the get request(getAllEmployees, for example) where header's property authorization = token
    requestResult =  await this._http.post(this.servBaseAddress + url,requestBody,{headers}).toPromise();
    console.log(" ::::::::::::::::9.requestApi - linha 106- pedido post ao serveur na morada ",this.servBaseAddress + url,requestBody,{headers} );
    this._localStorageService.refreshToken(requestResult.newToken);
    console.log(" ::::::::::::::::9.1.requestApi - linha 108- request.content é ", requestResult.content );
    return requestResult.content;

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
    let allInfos = this._localStorageService.getFromLocalStorage("employeeInfos");
    console.log("request-api all infos ", allInfos);

    if(allInfos == null || allInfos == undefined){
      this._betweenService.logOut();
      return
    }

    //if the allInfos are still in the storage, get the token add it to the http header's request(solicited in app.js(serveur))
    let token = allInfos.sessionId;
    const headers = new HttpHeaders({'authorization':'Bearer '+token});


    //send the get request(getAllEmployees, for example) where header's property authorization = token
      this._http.put(this.servBaseAddress + url, requestBody, {headers}).subscribe((info:any) =>{
        this._localStorageService.refreshToken(info.newToken);
        return info.content ;
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
    console.log("¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨3. Dentro de delete em apiRequests");
    //verify if infos about user are still in the localstorage (example,when someone tries to access directily writting the url without loggin in)
    let allInfos = this._localStorageService.getFromLocalStorage("employeeInfos");
    console.log("¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨3.1 Resultado da chamada  delete da requestApi ", allInfos);

    if(allInfos == null || allInfos == undefined){
      this._betweenService.logOut();
      return
    }

    //if the allInfos are still in the storage, get the token add it to the http header's request(solicited in app.js(serveur))
    let token = allInfos.sessionId;
    console.log("¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨3.2. Token no LS ", token);
    const headers = new HttpHeaders({'authorization':'Bearer '+token});
    console.log("¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨3.3.headers enviados no pedido delete ao servidor ", headers);
    console.log("em headers postRequest, api ", headers);
    let resultRequest;

    //send the get request(getAllEmployees, for example) where header's property authorization = token
    console.log("¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨3.4.url+headers para a morada do servidor",this.servBaseAddress + url,{headers} );
    resultRequest = await this._http.delete(this.servBaseAddress + url,{headers} ).toPromise();
    console.log("¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨3.5.resultado do pedido a morada do servidor ",resultRequest);
    this._localStorageService.refreshToken(resultRequest.newToken);
    console.log("¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨3.6.requestResult.content retornado do servidor é  ",resultRequest.content);
    return resultRequest.content;

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
