import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';

//imports
import { EmployeesService } from '../services/employees.service';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { Router } from '@angular/router';
import {BetweenComponentsService} from '../services/between-components.service';

/*modal
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';*/

@Component({
  selector: 'app-employee-by-id',
  templateUrl: './employee-by-id.component.html',
  styleUrls: ['./employee-by-id.component.css']
})

export class EmployeeByIdComponent implements OnInit {
  verifyRole;

  //to the nav
  active =1;

  //EBI: Employee BY id
  idEmployee;
  selectedEmployee;

  constructor(private employeesService : EmployeesService, private _loginService:LoginService ,private betweenComponents: BetweenComponentsService, private _Activatedroute:ActivatedRoute,private router: Router, private _location: Location) { }

  async ngOnInit(): Promise<void> {

    //so the employees can not access boss views
    this.verifyRole = this._loginService.isAdmin();
    if(this.verifyRole == false){
      this.router.navigate(['/employeeAccount']);
    }

    //EBI: get and pass the id
    this._Activatedroute.paramMap.subscribe(params => {
      this.idEmployee = params.get('id');
  });

    //EBI: get the employee with that id
    this.selectedEmployee = await this.employeesService.getEmployeeById(this.idEmployee);

    //split dates so they can be shown in html
    if(this.selectedEmployee.birthdayDate){
    this.selectedEmployee.birthdayDate= this.selectedEmployee.birthdayDate.split('T')[0];
    }
    if( this.selectedEmployee.birthdayDate){
    this.selectedEmployee.birthdayDate= this.selectedEmployee.birthdayDate.split('T')[0];
    }


  }//closes ngOnInit

//_______________________________________

async toDelete(){

  let bool;
    bool = confirm("delete?");
    if(bool == true){
      await this.employeesService.deleteEmployee(this.idEmployee);
      setTimeout(() => {
      this.router.navigate(['/employees']);
      },1000);
  }
}

//_______________________________________
  toUpdate(): void {
    this.router.navigate(['/formUpdate/'+ this.idEmployee]);
    this.betweenComponents.receiveEmployeeToUpdate(this.selectedEmployee);
    }



}//closes classe
