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

  //To create a user
  /*
  employee = {
    firstName: '',
    lastName: '',
    mobilePhone: '',
    homePhone: '',
    email: '',
    address: '',
    addressComplement: '',
    zipCode: '',
    nationality: '',
    identityNumber: '',
    socialNumber: '',
    birthdayDate: '',
    iban: '',
    typeContract: '',
    joinDate: '',
    hourlyPrice: '',
  };*/

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
      console.log("------------- 1. this.employeeObject = this.betweenComponents.getEmployeeToUpdate(); ", this.employeeObject );

      //form will be completed with infos from the selected employee
      this.employee.fillObjEmployee(this.employeeObject);
      this.employee.birthdayDate = this.employee.birthdayDate.split('T')[0];
      this.employee.joinDate =  this.employee.joinDate.split('T')[0];


      // this.employee = this.employeeObject;
      /*
      this.employee.firstName = this.employeeObject.firstName;

      this.employee.lastName = this.employeeObject.lastName;
      this.employee.mobilePhone = this.employeeObject.mobilePhone;
      this.employee.homePhone = this.employeeObject.homePhone;
      this.employee.email = this.employeeObject.email;
      this.employee.address = this.employeeObject.address;
      this.employee.addressComplement = this.employeeObject.addressComplement;
      this.employee.zipCode = this.employeeObject.zipCode;
      this.employee.nationality = this.employeeObject.nationality;
      this.employee.identityNumber = this.employeeObject.identityNumber;
      this.employee.socialNumber = this.employeeObject.socialNumber;
      this.employee.birthdayDate = this.employeeObject.birthdayDate.split('T')[0];
      this.employee.iban = this.employeeObject.iban;
      this.employee.typeContract = this.employeeObject.typeContract;
      this.employee.joinDate = this.employeeObject.joinDate.split('T')[0];
      this.employee.hourlyPrice = this.employeeObject.hourlyPrice;*/
    }
  } //closes ngOnInit

//when submitting the form
  submitOnClick(form) {
    if (form.valid) {
      this.isSubmiting = true;

      if(this.employeeObject.birthdayDate){
        const birthdayDate = new Date(this.employeeObject.birthdayDate);
        this.employeeObject.birthdayDate = birthdayDate.toISOString();
        }

        if(this.employeeObject.joinDate){
        const joinDate = new Date(this.employeeObject.joinDate);
        this.employeeObject.joinDate = joinDate.toISOString();
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

      if (this.router.url === '/createEmployee') {
        let createdEmployee: any; //'cause of typology. typesript requires type of variable (and object doesnt always have the id. with any it doesn't matter). To not have erreurs of compilation before obtaining the id
        let simpleEmplObj= this.employee.toSimplifyObject();
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
      alert("Attention le formulaire n'est pas bien rempli!");
      this.isSubmiting=false;
    }
  }
} //closes class
