import { EmployeeByIdComponent } from './employee-by-id/employee-by-id.component';
import { NgModule, Component } from '@angular/core';

//import components to create routes
import { EmployeurComponent } from './employeur/employeur.component';
import { AllEmployeesComponent } from './all-employees/all-employees.component';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {path:'', component: EmployeurComponent},
  {path:'employees', component: AllEmployeesComponent},
  {path:'employees/id', component: EmployeeByIdComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
