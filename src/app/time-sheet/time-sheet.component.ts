import { LoginService } from './../services/login.service';
import { BetweenComponentsService } from './../services/between-components.service';
import { Router } from '@angular/router';
import { ActivitiesService } from './../services/activities.service';

import { TimesheetServiceService } from './../services/timesheet-service.service';
import { TimeSheet } from './../model/time-sheet';
import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../services/employees.service';

@Component({
  selector: 'app-time-sheet',
  templateUrl: './time-sheet.component.html',
  styleUrls: ['./time-sheet.component.css']
})

export class TimeSheetComponent implements OnInit {
  verifyRole;

//button submit
isSubmiting = false;

//getEmployees
allEmployees:any;

//getAllActivities
allActivities:any;

//update TS
updatedTimeSheet

//creating a new Pointage
timeSheet = new TimeSheet();

  constructor(
    private _tSService:TimesheetServiceService,
    private _employeeService:EmployeesService,
    private _activitiesService: ActivitiesService,
    private _router:Router,
    private router: Router,
    private _loginService: LoginService,
    private _betweenComponents: BetweenComponentsService) { }

  async ngOnInit(){

      //so the employees can not access boss views
      this.verifyRole = this._loginService.isAdmin();
      if(this.verifyRole == false){
        this._router.navigate(['/employeeAccount']);
      }


    this.allEmployees = await this._employeeService.getAllEmployees();
    this.allActivities = await this._activitiesService.getAllActivities();


     //if not createAbsence
     if(this.router.url != '/timeSheet'){
      this.timeSheet.fillObj(this._betweenComponents.getObjToUpdate());

     //so it will present the date in html format dd/mm/yyyy of the selected absence otherwise it wont happen
    this.timeSheet.beginningDate = this.timeSheet.beginningDate.split('T')[0];
    this.timeSheet.finishDate = this.timeSheet.finishDate.split('T')[0];
    }

  }//closes NgOnInit



//___________________________________________________________________
  submitOnClick(form){
    if (form.valid) {

      this.isSubmiting = true;

      const finishDate = new Date(this.timeSheet.finishDate);
      this.timeSheet.finishDate = finishDate.toISOString();

      const beginningDate = new Date(this.timeSheet.beginningDate);
      this.timeSheet.beginningDate = beginningDate.toISOString();

      this.tsCreateOrUpdate();

  } else{
    alert('Veuillez remplir les champs obligatoires.');
  }
}

//____________________________________________________________________
async tsCreateOrUpdate(){
  console.log("***** 2. dentro de createOrUpdate - TSC - 77");
  try {
    if (this.router.url === '/timeSheet'){
    await this._tSService.createTS(this.timeSheet.toSimpleObject());

    }else{
      let bool;
      bool = confirm("Cette demande sera changée. Êtes-vous sûr de vouloir continuer? ");

      if(bool == true){
        this.updatedTimeSheet = await this._tSService.updateTs(this.timeSheet.toSimpleObject());
        console.log("***** 2.1. Resultado chamada updateTS do Tssrvice  ",  this.updatedTimeSheet );
      }else{
          this.router.navigate(['/allTimeSheets/']);
        }
      }
  } catch (error) {
    console.log("error ", error.message);
    alert("Attention le formulaire n'est pas bien rempli!");
    this.isSubmiting=false;

  } setTimeout(() => {
    this._router.navigate(['/allTimeSheets/']);
  }, 500);
}


}//closes class
