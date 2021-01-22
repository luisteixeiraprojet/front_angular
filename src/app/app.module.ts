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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalComponent as ModalComponent } from './modal/modal.component';

import { MatDialogRef} from '@angular/material/dialog';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeurComponent,
    AllEmployeesComponent,
    FooterComponent,
    EmployeeByIdComponent,
    FormNewEmployeeComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, //always after BrowserModule
    AppRoutingModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule
  ],

  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },


  ],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]

})
export class AppModule { }
