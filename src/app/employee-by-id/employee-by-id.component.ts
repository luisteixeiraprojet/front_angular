import { Component, OnInit } from '@angular/core';

//import Service
import { EmployeesService } from './../employees.service';
import { ActivatedRoute } from '@angular/router';
import { promise } from 'protractor';
import {Location} from '@angular/common';

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



  constructor(private employeesService : EmployeesService, private _Activatedroute:ActivatedRoute, private _location: Location) { }

  async ngOnInit(): Promise<void> {

    //EBI: get and pass the id
    this._Activatedroute.paramMap.subscribe(params => {
      this.idEmployee = params.get('id');
     // console.log("The id of the clicked employee is: " + this.idEmployee);
  });

    //EBI: get the employee with that id
    //this.selectedEmployee = await this.employeesService.getEmployeeById(this.idEmployee).toPromise();
    this.employeesService.getEmployeeById(this.idEmployee).subscribe( resultGetEmplById=>{
      this.selectedEmployee = resultGetEmplById;
    })




  }//closes ngOnInit

//_______________________________________
   toDelete(){
   this.employeesService.deleteEmployee(this.idEmployee).subscribe(result =>{
    console.log("todelete: " + JSON.stringify(result))
   });

  }

//________________________________________________
//button back
  goBack(){
    this._location.back();
  }

}//closes classe
