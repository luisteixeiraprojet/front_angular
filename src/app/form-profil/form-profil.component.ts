import { LocalStorageService } from './../services/local-storage.service';
import { Router } from '@angular/router';
import { EmployeesService } from './../services/employees.service';
import { Component, OnInit } from '@angular/core';
import {Employee} from '../model/employee';

@Component({
  selector: 'app-form-profil',
  templateUrl: './form-profil.component.html',
  styleUrls: ['./form-profil.component.css']
})
export class FormProfilComponent implements OnInit {

  isSubmiting = false;
  email;
  password;
  formValues={email : "", password:""};
  constructor(private _router: Router,private _employeesService:EmployeesService, private _localStorageService:LocalStorageService) { }

  ngOnInit(): void {
  }

  submitOnClick(form){
    console.log("hello");
    if(form.valid){
      this.profilUpdate();
    }else{
      alert('Veuillez remplir les champs obligatoires.');
    }
  }

  async profilUpdate(){
    console.log("cu")
    let bool;
    let getIdEmployee = this._localStorageService.getFromLocalStorage("employeeInfos");
    let idEmployee = getIdEmployee.Id_employee;

    bool = confirm("changer Êtes-vous sûr de vouloir continuer? ");
    if(bool == true){
      await this._employeesService.profileUpdate(idEmployee,this.formValues);
      this.isSubmiting = true;
      this._router.navigate(['/employeeAccount']);
  }


  }//close function

}//closes class
