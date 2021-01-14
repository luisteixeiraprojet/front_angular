import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EmployeurComponent } from './employeur/employeur.component';
import { AllEmployeesComponent } from './all-employees/all-employees.component';
import { FooterComponent } from './footer/footer.component';
import { EmployeeByIdComponent } from './employee-by-id/employee-by-id.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeurComponent,
    AllEmployeesComponent,
    FooterComponent,
    EmployeeByIdComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, //always after BrowserModule
    AppRoutingModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
