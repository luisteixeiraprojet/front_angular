import { ConfirmationDialogComponent } from './../confirmation-dialog/confirmation-dialog.component';

import { Component, OnInit } from '@angular/core';

//import Service
import { EmployeesService } from './../employees.service';
import { ActivatedRoute } from '@angular/router';

import {Location} from '@angular/common';

import { Router } from '@angular/router';
import {BetweenComponentsService} from './../between-components.service';


@Component({
  selector: 'app-employee-by-id',
  templateUrl: './employee-by-id.component.html',
  styleUrls: ['./employee-by-id.component.css']
})

export class EmployeeByIdComponent implements OnInit {

  //to the nav
  active =1;

  //EBI: Employee BY id
  idEmployee;
  selectedEmployee;

  constructor(private employeesService : EmployeesService, private betweenComponents: BetweenComponentsService, private _Activatedroute:ActivatedRoute,private router: Router, private _location: Location) { }

  async ngOnInit(): Promise<void> {

    //EBI: get and pass the id
    this._Activatedroute.paramMap.subscribe(params => {
      this.idEmployee = params.get('id');
     // console.log("The id of the clicked employee is: " + this.idEmployee);
  });

    //EBI: get the employee with that id
    this.employeesService.getEmployeeById(this.idEmployee).subscribe(resultGetEmplById=>{
      this.selectedEmployee = resultGetEmplById;
      console.log("no back esta o selectedEmmployee ", this.selectedEmployee);
    })
  }//closes ngOnInit

//_______________________________________

toDelete(){
   this.employeesService.deleteEmployee(this.idEmployee).subscribe(result =>{
    console.log("todelete: " + JSON.stringify(result))
   });
   setTimeout(() => {
    this.router.navigate(['/employees']);
}, 500);
  }

//_______________________________________
  toUpdate(): void {
   console.log("UPDATE: do componente para o servico,/formUpdate/ " + this.idEmployee);
    this.router.navigate(['/formUpdate/'+ this.idEmployee]);
    this.betweenComponents.receiveEmployeeToUpdate(this.selectedEmployee);
    console.log("Do componente chama-se receiveEmployeeToUpdate do servico : " + this.selectedEmployee + " em string fica: " + JSON.stringify(this.selectedEmployee));
    }

//________________________________________________
//button back
  goBack(){
    this._location.back();
  }

}//closes classe
