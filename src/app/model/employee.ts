export class Employee {
  private _Id_employee;
  private _firstName;
  private _lastName;
  private _mobilePhone;
  private _homePhone;
  private _email;
  private _address;
  private _addressComplement;
  private _zipCode;
  private _nationality;
  private _identityNumber;
  private _socialNumber;
  private _birthdayDate;
  private _iban;
  private _typeContract;
  private _joinDate;
  private _hourlyPrice;
  private _role;


  constructor(){}

  fillObjEmployee(obj){
    this.Id_employee = obj.Id_employee || undefined;
    this.firstName= obj.firstName || undefined;
    this.lastName= obj.lastName || undefined;
    this.mobilePhone= obj.mobilePhone || undefined;
    this.homePhone= obj.homePhone || undefined;
    this.email= obj.email || undefined;
    this.address= obj.address || undefined;
    this.addressComplement= obj.addressComplement || undefined;
    this.zipCode= obj.zipCode || undefined;
    this.nationality= obj.nationality || undefined;
    this.identityNumber= obj.identityNumber || undefined;
    this.socialNumber= obj.socialNumber || undefined;
    this.birthdayDate= obj.birthdayDate || undefined;
    this.iban= obj.iban || undefined;
    this.typeContract= obj.typeContract|| undefined;
    this.joinDate= obj.joinDate || undefined;
    this.hourlyPrice= obj.hourlyPrice || undefined;
    this.role=obj.role || undefined;
  }

//converted to object 'cause we need to pass to api properties without underscore
  toSimplifyObject(){
    const emplConvToSimpleObject={
    Id_employee  : this._Id_employee,
    firstName : this._firstName,
    lastName : this._lastName,
    mobilePhone : this._mobilePhone,
    homePhone : this._homePhone,
    email : this._email,
    address : this._address,
    addressComplement : this._addressComplement,
    zipCode : this._zipCode,
    nationality : this._nationality,
    identityNumber : this._identityNumber,
    socialNumber : this._socialNumber,
    birthdayDate : this._birthdayDate,
    iban : this._iban,
    typeContract : this._typeContract,
    joinDate : this._joinDate,
    hourlyPrice : this._hourlyPrice,
    role : this._role
  };
    return emplConvToSimpleObject;
  }

  public get identityNumber() {
    return this._identityNumber;
  }
  public set identityNumber(value) {
    this._identityNumber = value;
  }

  public get socialNumber() {
    return this._socialNumber;
  }
  public set socialNumber(value) {
    this._socialNumber = value;
  }

  public get birthdayDate() {
    return this._birthdayDate;
  }
  public set birthdayDate(value) {
    this._birthdayDate = value;
  }

  public get iban() {
    return this._iban;
  }
  public set iban(value) {
    this._iban = value;
  }

  public get typeContract() {
    return this._typeContract;
  }
  public set typeContract(value) {
    this._typeContract = value;
  }

  public get joinDate() {
    return this._joinDate;
  }
  public set joinDate(value) {
    this._joinDate = value;
  }

  public get hourlyPrice() {
    return this._hourlyPrice;
  }
  public set hourlyPrice(value) {
    this._hourlyPrice = value;
  }

  public get Id_employee() {
    return this._Id_employee;
  }
  public set Id_employee(value) {
    this._Id_employee = value;
  }

  public get firstName() {
    return this._firstName;
  }
  public set firstName(value) {
    this._firstName = value;
  }

  public get lastName() {
    return this._lastName;
  }
  public set lastName(value) {
    this._lastName = value;
  }

  public get mobilePhone() {
    return this._mobilePhone;
  }
  public set mobilePhone(value) {
    this._mobilePhone = value;
  }

  public get homePhone() {
    return this._homePhone;
  }
  public set homePhone(value) {
    this._homePhone = value;
  }

  public get email() {
    return this._email;
  }
  public set email(value) {
    this._email = value;
  }

  public get address() {
    return this._address;
  }
  public set address(value) {
    this._address = value;
  }

  public get addressComplement() {
    return this._addressComplement;
  }
  public set addressComplement(value) {
    this._addressComplement = value;
  }

  public get zipCode() {
    return this._zipCode;
  }
  public set zipCode(value) {
    this._zipCode = value;
  }

  public get nationality() {
    return this._nationality;
  }
  public set nationality(value) {
    this._nationality = value;
  }

  public get role() {
    return this._role;
  }
  public set role(value) {
    this._role = value;
  }

}//closes class

