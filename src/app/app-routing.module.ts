import { EmployeeByIdComponent } from './employee-by-id/employee-by-id.component';
import { NgModule, Component } from '@angular/core';

//import components to create routes
import { EmployeurComponent } from './employeur/employeur.component';
import { AllEmployeesComponent } from './all-employees/all-employees.component';
import {FormNewEmployeeComponent} from './form-new-employee/form-new-employee.component';
import { Routes, RouterModule } from '@angular/router';
import { FormLogInComponent} from './form-log-in/form-log-in.component';
import {EmployeeViewComponent} from './employee-view/employee-view.component';


const routes: Routes = [
  {path:'', component: EmployeurComponent},
  {path:'login', component: FormLogInComponent},
  {path:'employees', component: AllEmployeesComponent},
  {path:'employees/:id', component: EmployeeByIdComponent},
  {path:'createEmployee', component: FormNewEmployeeComponent},
  {path:'formUpdate/:id', component:FormNewEmployeeComponent },
  {path:'employeeAccount', component: EmployeeViewComponent } //ver se dp n tem de ser com id para cd um dos employees
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
