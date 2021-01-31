import { EmployeeByIdComponent } from './employee-by-id/employee-by-id.component';
import { NgModule, Component } from '@angular/core';

//import components to create routes
import { EmployeurComponent } from './employeur/employeur.component';
import { AllEmployeesComponent } from './all-employees/all-employees.component';
import {FormNewEmployeeComponent} from './form-new-employee/form-new-employee.component';
import { Routes, RouterModule } from '@angular/router';
import { FormLogInComponent} from './form-log-in/form-log-in.component' ;




const routes: Routes = [
 // {path:'', component: FormLogInComponent},
  {path:'', component: EmployeurComponent},
  {path:'employees', component: AllEmployeesComponent},
  {path:'employees/:id', component: EmployeeByIdComponent},
  {path:'createEmployee', component: FormNewEmployeeComponent},
  {path:'formUpdate/:id', component:FormNewEmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
