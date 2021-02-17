import { LocalStorageService } from './../services/local-storage.service';
import { AbsencesService } from './../services/absences.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-new-absence',
  templateUrl: './form-new-absence.component.html',
  styleUrls: ['./form-new-absence.component.css']
})
export class FormNewAbsenceComponent implements OnInit {
  isSubmiting = false;

  //to create an absence
  absence = {
    typeOfAbsence:'',
    requestDate:'',
    startDate:'',
    endDate:'',
    status:'',
    statusDate:'',
    Id_employee:''
  }


  constructor(private router: Router,private _absenceService: AbsencesService, private _localStorageService: LocalStorageService) { }

  ngOnInit(): void {
  }
  //when submitting the form
  submitOnClick(form) {

    const requestDate = new Date(this.absence.requestDate);
    this.absence.requestDate = requestDate.toISOString();

    const startDate = new Date(this.absence.startDate);
    this.absence.startDate = startDate.toISOString();

    const endDate = new Date(this.absence.endDate);
    this.absence.endDate = requestDate.toISOString();

    let getIdEmployee = this._localStorageService.getFromLocalStorage("employeeInfos");
    this.absence.Id_employee = getIdEmployee.Id_employee;

    if (form.valid) {
      this.isSubmiting = true;
      this.createAbsence();
      form.reset();
    } else {
      alert('Veuillez remplir les champs obligatoires.');
    }
  }

  async createAbsence(){

    let createdAbsence:any;
    try {

      createdAbsence = await this._absenceService.createAbsence(this.absence);
      setTimeout(() => {
        this.router.navigate(['/myAbsences/']);
      }, 500);
    } catch (error) {
      console.log("error ", error.message);
      alert("Attention le formulaire n'est pas bien rempli!");
      this.isSubmiting=false;
    }
  }


}//closes class
