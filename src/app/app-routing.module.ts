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
import {PointageComponent} from './pointage/pointage.component';
import { AllAbsencesComponent } from './all-absences/all-absences.component';


const routes: Routes = [
  {path:'login', component: FormLogInComponent},
  {path:'', component: EmployeurComponent},

  {path:'employees', component: AllEmployeesComponent},
  {path:'employees/:id', component: EmployeeByIdComponent},
  {path:'createEmployee', component: FormNewEmployeeComponent},
  {path:'formUpdate/:id', component:FormNewEmployeeComponent },
  {path:'employeeAccount', component: EmployeeViewComponent }, //ver se dp n tem de ser com id para cd um dos employees
  {path: 'timeSheet', component: PointageComponent},
  {path: 'myAbsences', component: AllMyAbsencesComponent },
  {path: 'allAbsences', component:AllAbsencesComponent },
  {path: 'formAbsence', component:FormNewAbsenceComponent}


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
