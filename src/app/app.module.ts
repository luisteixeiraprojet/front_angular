import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EmployeurComponent } from './employeur/employeur.component';
import { AllEmployeesComponent } from './all-employees/all-employees.component';
import { FooterComponent } from './footer/footer.component';
import { EmployeeByIdComponent } from './employee-by-id/employee-by-id.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormNewEmployeeComponent } from './form-new-employee/form-new-employee.component';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeurComponent,
    AllEmployeesComponent,
    FooterComponent,
    EmployeeByIdComponent,
    FormNewEmployeeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, //always after BrowserModule
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
