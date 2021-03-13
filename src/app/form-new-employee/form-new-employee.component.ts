import { LoginService } from './../services/login.service';
import { error } from 'protractor';
import { Router } from '@angular/router';
import { BetweenComponentsService } from '../services/between-components.service';
import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../services/employees.service';
import { ActivatedRoute } from '@angular/router';
import {Employee} from '../model/employee';
import { isConstructorDeclaration } from 'typescript';

@Component({
  selector: 'form-new-employee',
  templateUrl: './form-new-employee.component.html',
  styleUrls: ['./form-new-employee.component.css'],
})
export class FormNewEmployeeComponent implements OnInit {
  verifyRole;

  //button submit
  isSubmiting = false;

  //
  emailExists = false;
  //UPDATE: Employee BY id
  employeeObject;

  //when creating an employee
  employee=new Employee();

  constructor(
    private employeesService: EmployeesService,
    private router: Router,
    private _activatedroute: ActivatedRoute,
    private betweenComponents: BetweenComponentsService,
    private _loginService:LoginService
  ) {}

  ngOnInit() {

      //so the employees can not access boss views
      this.verifyRole = this._loginService.isAdmin();
      if(this.verifyRole == false){
        this.router.navigate(['/employeeAccount']);
      }


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

    } else {
      alert('Veuillez remplir les champs obligatoires.');
    }
  }
//____________________________________________________________
//when submitting the form verify the route so we can distinguish if it is to x=create a new employee or to update an existant one
  async createOrUpdate() {
    let id;
    try {

      if (this.router.url === '/createEmployee') {

        let createdEmployee: any; //'cause of typology. typesript requires type of variable (and object doesnt always have the id. with any it doesn't matter). To not have erreurs of compilation before obtaining the id
        let simpleEmplObj= this.employee.toSimplifyObject();

        createdEmployee = await this.employeesService.createEmployee(simpleEmplObj);
        //if email already exists
        if(createdEmployee.error == "ko"){
          this.emailExists = true;
          this.isSubmiting = false;
        }else{
          id = createdEmployee.Id_employee;
        }

      } else {
        let bool;
        bool = confirm("Les coordonées de ce salarié seront changées. Êtes-vous sûr de vouloir continuer? ");
        if(bool == true){
          let simpleEmplObj= this.employee.toSimplifyObject();
         let x = await this.employeesService.updateEmployee(
          this.employeeObject.Id_employee,
          simpleEmplObj)
          console.log("let x ", x);

      }else{
        id = this.employeeObject.Id_employee;

        this.router.navigate(['/employees/' + id]);
      }
        id = this.employeeObject.Id_employee;
      }

      if(this.emailExists == false) {
      setTimeout(() => {
        this.router.navigate(['/employees/' + id]);
      }, 500);
    }
    } catch (error) {
      console.log(error);
      alert("Attention: le formulaire n'est pas bien rempli!");
      this.isSubmiting=false;
    }
  } } //closes class
