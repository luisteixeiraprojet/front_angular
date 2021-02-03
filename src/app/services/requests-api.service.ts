import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RequestsApiService {

  servBaseAddress = "http://localhost:3000";
  //http://luisteixeiraprojet.herokuapp.com"

  constructor(private _http: HttpClient, ) { }


//_____________________________________________________________________
async getRequest(url:any){
  try {
    console.log("----2.getRequest");
    return await this._http.get(this.servBaseAddress+url).toPromise();
  } catch (error) {
    console.log("Error " + error.messsage);
  }
}

//_______________________________________________________________________
 async postRequest(url: any, requestBody: any) {
  try {
    console.log("------------3. dentro de postRequest em requests api com url ", this.servBaseAddress + url);
    const requestResult =  await this._http.post(this.servBaseAddress + url, requestBody).toPromise();
    console.log("------3.1. o requestResult é : ", requestResult);
    return requestResult;
  } catch (error) {
    console.log(JSON.stringify(error));
    console.log("3.1.1 error details postRequest : \n" + error.message + "\n" + error.error);
  };
  }

 //_________________________________________________________________________
 async putRequests(url: any, requestBody: any){
  try {
    //console.log("-------2.UPDATE: requestsapi put request com id e obj "+ url, JSON.stringify(obj));
      this._http.put(this.servBaseAddress + url, requestBody).subscribe((info) =>{
        return info ;
      });
    } catch (error) {
      console.log(JSON.stringify(error));
      console.log("error details: \n" + error.message + "\n" + error.error);
    }
}

//___________________________________________________________________________
async delete(url:any){
  try {
    console.log("-------2.delete employee api service url " + url);
    console.log("-----url e endpoint " + this.servBaseAddress + url )
    return await this._http.delete(this.servBaseAddress + url).toPromise();

  } catch (error) {
    console.log("Error " + error.message);
  }

}




}//closes class
