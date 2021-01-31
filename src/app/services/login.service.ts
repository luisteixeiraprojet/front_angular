import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  servAddress = "http://localhost:4200/"
  //"http://luisteixeiraprojet.herokuapp.com/"

  constructor(private _http: HttpClient) { }

  postTypeRequest(url: any, payload: any){
    return this._http.post("http://luisteixeiraprojet.herokuapp.com/", payload).pipe(
      map((res) => {
        console.log("--------- map o res dentro da funçao post do login service ", res);
        return res;
      })
    );
  }



}
