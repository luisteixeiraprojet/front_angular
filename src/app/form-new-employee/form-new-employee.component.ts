import { Router } from '@angular/router';
import { BetweenComponentsService } from '../services/between-components.service';
import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../services/employees.service';
import { ActivatedRoute } from '@angular/router';
import {Employee} from '../model/employee'

@Component({
  selector: 'form-new-employee',
  templateUrl: './form-new-employee.component.html',
  styleUrls: ['./form-new-employee.component.css'],
})
export class FormNewEmployeeComponent implements OnInit {
  //button submit
  isSubmiting = false;

  //UPDATE: Employee BY id
  employeeObject;

  //when creating an employee
  employee=new Employee();

  constructor(
    private employeesService: EmployeesService,
    private router: Router,
    private _activatedroute: ActivatedRoute,
    private betweenComponents: BetweenComponentsService
  ) {}

  ngOnInit() {
    //so it runs only when its the route to update
    if (this.router.url != '/createEmployee') {
      this.employeeObject = this.betweenComponents.getEmployeeToUpdate();

      //form will be completed with infos from the selected employee
      this.employee.fillObjEmployee(this.employeeObject);

      //split dates from T so they'll appear in html form
      this.employee.birthdayDate = this.employee.birthdayDate.split('T')[0];
      this.employee.joinDate =  this.employee.joinDate.split('T')[0];

    }
  } //closes ngOnInit

//when submitting the form
  submitOnClick(form) {
    if (form.valid) {
      this.isSubmiting = true;

      if (this.router.url != '/createEmployee'){
      if(this.employeeObject.birthdayDate){
        const birthdayDate = new Date(this.employeeObject.birthdayDate);
        this.employeeObject.birthdayDate = birthdayDate.toISOString();
        }

        if(this.employeeObject.joinDate){
        const joinDate = new Date(this.employeeObject.joinDate);
        this.employeeObject.joinDate = joinDate.toISOString();
        }
      }

      this.createOrUpdate();
      form.reset();
    } else {
      alert('Veuillez remplir les champs obligatoires.');
    }
  }
//____________________________________________________________
//when submitting the form verify the route so we can distinguish if it is to x=create a new employee or to update an existant one
  async createOrUpdate() {
    let id;
    try {
      console.log("****** 1. dentro de createOrUpdate");
      if (this.router.url === '/createEmployee') {
        console.log("****** 2. dentro do if se  url === '/createEmployee'");
        let createdEmployee: any; //'cause of typology. typesript requires type of variable (and object doesnt always have the id. with any it doesn't matter). To not have erreurs of compilation before obtaining the id
        let simpleEmplObj= this.employee.toSimplifyObject();
        console.log("******* 3.simpleEmplObj= this.employee.toSimplifyObject() ", simpleEmplObj );
        createdEmployee = await this.employeesService.createEmployee(
          simpleEmplObj
        );
        id = createdEmployee.Id_employee;

      } else {
        let bool;
        bool = confirm("Les coordonées de ce salarié seront changées. Êtes-vous sûr de vouloir continuer? ");
        if(bool == true){
          let simpleEmplObj= this.employee.toSimplifyObject();
          await this.employeesService.updateEmployee(
          this.employeeObject.Id_employee,
          simpleEmplObj)

      }else{
        id = this.employeeObject.Id_employee;

        this.router.navigate(['/employees/' + id]);
      }
        id = this.employeeObject.Id_employee;
      }
      setTimeout(() => {
        this.router.navigate(['/employees/' + id]);
      }, 500);

    } catch (error) {
      console.log(error);
      alert("Attention: le formulaire n'est pas bien rempli!");
      this.isSubmiting=false;
    }
  } } //closes class
