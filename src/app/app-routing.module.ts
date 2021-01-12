import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllEmployeesComponent } from './all-employees/all-employees.component';
import { EmployeurComponent } from './employeur/employeur.component';

const routes: Routes = [
  {path:'', component: EmployeurComponent},
  {path:'/allEmployees', component: AllEmployeesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
