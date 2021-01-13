import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { EmployeurComponent } from './employeur/employeur.component';
import { AllEmployeesComponent } from './all-employees/all-employees.component';

const routes: Routes = [
  {path:'', component: EmployeurComponent},
  {path:'employees', component: AllEmployeesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
