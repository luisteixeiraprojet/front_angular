import { Router } from '@angular/router';
import { BetweenComponentsService } from './../between-components.service';
import { Component, OnInit } from '@angular/core';
import { EmployeesService } from './../employees.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'form-new-employee',
  templateUrl: './form-new-employee.component.html',
  styleUrls: ['./form-new-employee.component.css']
})

export class FormNewEmployeeComponent implements OnInit {

  //UPDATE: Employee BY id

  employeeObject;

//________Pour CREER EMPLOYEE
  employee = {

    firstName:"",
    lastName:"",
    mobilePhone: "",
    homePhone:"",
    email:"",
    address:"",
    addressComplement:"",
    zipCode:"",
    nationality:"",
    identityNumber:"",
    socialNumber:"",
    birthdayDate:"",
    age:"",
    iban:"",
    typeContract:"",
    joinDate:"",
    hourlyPrice:""
  }

  constructor(private employeesService : EmployeesService, private router: Router, private _Activatedroute:ActivatedRoute, private betweenComponents:BetweenComponentsService){}

  ngOnInit(){
    //so it runs only when its the route to update
    if(this.router.url != '/createEmployee'){
    this.employeeObject = this.betweenComponents.getEmployeeToUpdate();
   // this.employee = this.employeeObject;

    this.employee.firstName = this.employeeObject.firstName;
    console.log("FORM NEW EMPLOYEE LINHA 52: ficando igual ao getEmployee to update " + this.employee.firstName + " e o do get e " + this.employeeObject.firstName);
    this.employee.lastName = this.employeeObject.lastName
    this.employee.mobilePhone = this.employeeObject.mobilePhone;
    this.employee.homePhone = this.employeeObject.homePhone;
    this.employee.email = this.employeeObject.email;
    this.employee.address = this.employeeObject.address;
    this.employee.addressComplement = this.employeeObject.addressComplement;
    this.employee.zipCode = this.employeeObject.zipCode;
    this.employee.nationality = this.employeeObject.nationality;
    this.employee.identityNumber = this.employeeObject.identityNumber;
    this.employee.socialNumber = this.employeeObject.socialNumber;
    this.employee.birthdayDate = this.employeeObject.birthdayDate;
    this.employee.age = this.employeeObject.age;
    this.employee.iban = this.employeeObject.iban;
    this.employee.typeContract = this.employeeObject.typeContract;
    this.employee.joinDate = this.employeeObject.joinDate;
    this.employee.hourlyPrice = this.employeeObject.hourlyPrice;

   console.log("FORM NEW EMPLOYEE LINHA 52: ficando igual ao getEmployee to update " + this.employee.firstName + " e o do get e " + this.employeeObject.firstName);
  }
  }//closes ng



  async createOrUpdate(){
    let id;
    if(this.router.url === '/createEmployee'){
    let createdEmployee : any; //'cause of typology. typesript requires type of variable (and object doesnt always have the id. with any it doesn't matter). To not have erreurs of compilation before obtaining the id
    createdEmployee = await this.employeesService.createEmployee(this.employee);
    id = createdEmployee.Id_employee;
  }
  else{
    let updatedEmployee=  await this.employeesService.updateEmployee(this.employeeObject.Id_employee, this.employee);
    id = this.employeeObject.Id_employee;
  }
  setTimeout(() => {
    this.router.navigate(['/employees/'+ id]);
}, 500);

}


}//closes class
