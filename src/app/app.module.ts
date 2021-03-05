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
import { FormsModule, NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalComponent as ModalComponent } from './modal/modal.component';

import { MatDialogRef} from '@angular/material/dialog';
import { FormLogInComponent } from './form-log-in/form-log-in.component';
import { EmployeeViewComponent } from './employee-view/employee-view.component';

import { AllMyAbsencesComponent } from './all-my-absences/all-my-absences.component';
import { AllAbsencesComponent } from './all-absences/all-absences.component';
import { FormNewAbsenceComponent } from './form-new-absence/form-new-absence.component';

import {TimeSheetComponent} from './time-sheet/time-sheet.component';
import { AllTimeSheetsComponent } from './all-time-sheets/all-time-sheets.component';
import { ActivitiesComponent } from './activities/activities.component';
import { AllActivitiesComponent } from './all-activities/all-activities.component';
import { FormMaterialComponent } from './form-material/form-material.component';
import { AllMaterialsComponent } from './all-materials/all-materials.component';

import { NgSelect2Module } from 'ng-select2';
import { AllMyTimesheetsComponent } from './all-my-timesheets/all-my-timesheets.component';
import { FormProfilComponent } from './form-profil/form-profil.component';
import { FilterPipe } from './filter.pipe';
import { FilterAbsencesPipe } from './filter-absences.pipe';
import { FilterMaterialsPipe } from './filter-materials.pipe';
import { FilterActivitiesPipe } from './filter-activities.pipe';
import { FilterTimeSheetsPipe } from './filter-time-sheets.pipe';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeurComponent,
    AllEmployeesComponent,
    FooterComponent,
    EmployeeByIdComponent,
    FormNewEmployeeComponent,
    ModalComponent,
    FormLogInComponent,
    EmployeeViewComponent,
    AllMyAbsencesComponent,
    AllAbsencesComponent,
    FormNewAbsenceComponent,

    TimeSheetComponent,
    AllTimeSheetsComponent,
    ActivitiesComponent,
    AllActivitiesComponent,
    FormMaterialComponent,
    AllMaterialsComponent,
    AllMyTimesheetsComponent,
    FormProfilComponent,
    FilterPipe,
    FilterAbsencesPipe,
    FilterMaterialsPipe,
    FilterActivitiesPipe,
    FilterTimeSheetsPipe,

  ],
  imports: [
    BrowserModule,
    HttpClientModule, //always after BrowserModule
    AppRoutingModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    NgSelect2Module
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
