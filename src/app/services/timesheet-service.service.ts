import { Injectable } from '@angular/core';
import { RequestsApiService } from './requests-api.service';
import { TimeSheet } from '../model/time-sheet';

@Injectable({
  providedIn: 'root',
})
export class TimesheetServiceService {
  constructor(private _requestsApiService: RequestsApiService) {}

  //________________________________________________________________________
  async getAllTimeSheets() {

    try {
      let allTS = await this._requestsApiService.getRequest('/timesheets');

      for (let eachTS = 0; eachTS < allTS.length; eachTS++) {
        //ClearDb is sending -1 day in the date so temporarally i solved it like this:
        let beginningDate = new Date(allTS[eachTS].beginningDate);
        beginningDate.setDate(beginningDate.getDate() + 1);
        allTS[eachTS].beginningDate = beginningDate.toISOString();

        let finishDate = new Date(allTS[eachTS].finishDate);
        finishDate.setDate(finishDate.getDate() + 1);
        allTS[eachTS].finishDate = finishDate.toISOString();
      }

      return allTS;
    } catch (error) {
      console.log('Error getAllTS, ' + error.message);
    }
  }

  //______________________________________________________________________
  async getTsById(id) {
    try {
      let tSById = await this._requestsApiService.getRequest(
        '/timesheets/' + id
      );

      //ClearDb is sending -1 day in the date so temporarally i solved it like this:
      if (tSById.beginningDate) {
        let beginningDate = new Date(tSById.beginningDate);
        beginningDate.setDate(beginningDate.getDate() + 1);
        tSById.beginningDate = beginningDate.toISOString();
      }

      if (tSById.finishDate) {
        let finishDate = new Date(tSById.finishDate);
        finishDate.setDate(finishDate.getDate() + 1);
        tSById.finishDate = finishDate.toISOString();
      }

      return tSById;
    } catch (error) {
      console.log('Error ' + error.message);
    }
  }

  //___________________________________________________________________
  async createTS(tSObj) {

    try {
      return await this._requestsApiService.postRequest('/timesheets', tSObj);
    } catch (error) {
      console.log('error ', error.message);
    }
  } //closes createAbsence
  //____________________________________________________________________

  async updateTs(ts) {
    try {
      let tsObject = new TimeSheet();
      tsObject.fillObj(ts);
      let tsObjectNoUnderscore = tsObject.toSimpleObject();
      return await this._requestsApiService.putRequests(
        '/timesheets/tsUpdate',
        tsObjectNoUnderscore
      );
    } catch (error) {
      console.log('Error UpdateTS ' + error.message);
    }
  }

  //_______________________________________________________________________
  //DElete TS
  async deleteTimeSheet(idTS) {

    try {
      await this._requestsApiService.delete('/timesheets/' + idTS);

    } catch (error) {
      console.log('Error - deleteTS - ', error.message);
      return error;
    }
  }
} //closes class
