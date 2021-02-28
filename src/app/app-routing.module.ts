import { FormProfilComponent } from './form-profil/form-profil.component';
import { AllMyTimesheetsComponent } from './all-my-timesheets/all-my-timesheets.component';
import { FormMaterialComponent } from './form-material/form-material.component';
import { AllMaterialsComponent } from './all-materials/all-materials.component';
import { AllActivitiesComponent } from './all-activities/all-activities.component';
import { ActivitiesComponent } from './activities/activities.component';
import { AllTimeSheetsComponent } from './all-time-sheets/all-time-sheets.component';
import { TimeSheetComponent } from './time-sheet/time-sheet.component';

import { FormNewAbsenceComponent } from './form-new-absence/form-new-absence.component';
import { AllMyAbsencesComponent } from './all-my-absences/all-my-absences.component';
import { EmployeeByIdComponent } from './employee-by-id/employee-by-id.component';
import { NgModule, Component } from '@angular/core';

//import components to create routes
import { EmployeurComponent } from './employeur/employeur.component';
import { AllEmployeesComponent } from './all-employees/all-employees.component';
import {FormNewEmployeeComponent} from './form-new-employee/form-new-employee.component';
import { Routes, RouterModule } from '@angular/router';
import { FormLogInComponent} from './form-log-in/form-log-in.component';
import {EmployeeViewComponent} from './employee-view/employee-view.component';


import { AllAbsencesComponent } from './all-absences/all-absences.component';


const routes: Routes = [
  {path:'login', component: FormLogInComponent},
  {path:'', component: EmployeurComponent},
  {path:'employees', component: AllEmployeesComponent},
  {path:'employees/:id', component: EmployeeByIdComponent},
  {path:'createEmployee', component: FormNewEmployeeComponent},
  {path:'formUpdate/:id', component:FormNewEmployeeComponent },
  {path:'employeeAccount', component: EmployeeViewComponent }, //ver se dp n tem de ser com id para cd um dos employees
  {path: 'timeSheet', component: TimeSheetComponent},
  {path: 'updateTs/:id', component: TimeSheetComponent},
  {path: 'allTimeSheets', component: AllTimeSheetsComponent},
  {path: 'myAbsences', component: AllMyAbsencesComponent },
  {path: 'allAbsences', component:AllAbsencesComponent },
  {path: 'formAbsence', component:FormNewAbsenceComponent},
  {path: 'updateAbsence/:id', component:FormNewAbsenceComponent},
  {path: 'profil', component:FormProfilComponent},
  {path:'createactivity', component:ActivitiesComponent},
  {path:'updateactivity/:id', component:ActivitiesComponent},
  {path:'allactivities', component:AllActivitiesComponent},
  {path:'allmaterials', component:AllMaterialsComponent},
  {path:'creatematerial', component: FormMaterialComponent},
  {path:'updatematerial/:id', component: FormMaterialComponent},
  {path:'myTimesheets', component: AllMyTimesheetsComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
