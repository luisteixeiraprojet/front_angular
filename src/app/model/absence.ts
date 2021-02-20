export class Absence {
  private _Id_absence: string;
  private _typeOfAbsence: string;
  private _requestDate: string;
  private _startDate: string;
  private _endDate: string;
  private _status: string;
  private _statusDate: string;
  private _Id_employee: string;

  constructor() { }

  fill(Id_absence: string, typeOfAbsence: string, requestDate: string, startDate: string, endDate: string, status: string, statusDate: string, Id_employee: string) {
    this.Id_absence = Id_absence;
    this.typeOfAbsence = typeOfAbsence;
    this.requestDate = requestDate;
    this.startDate = startDate;
    this.endDate = endDate;
    this.status = status;
    this.statusDate = statusDate;
    this.Id_employee = Id_employee;
  }

  fillObj(obj) {
    this.Id_absence = obj.Id_absence || undefined;
    this.typeOfAbsence = obj.typeOfAbsence || undefined;
    this.requestDate = obj.requestDate || undefined;
    this.startDate = obj.startDate || undefined;
    this.endDate = obj.endDate || undefined;
    this.status = obj.status || undefined;
    this.statusDate = obj.statusDate || undefined;
    this.Id_employee = obj.Id_employee || undefined;
  }

//converted to object 'cause we need to pass to api properties without underscore
 toSimpleObject(){
  const absConvertedToObject={
   Id_absence : this._Id_absence,
   typeOfAbsence : this._typeOfAbsence,
   requestDate : this._requestDate,
   startDate : this._startDate,
   endDate : this._endDate,
   status : this._status,
   statusDate : this._statusDate,
   Id_employee : this._Id_employee
  };
  return absConvertedToObject;
 }



  public get Id_absence(): string {
    return this._Id_absence;
  }
  public set Id_absence(value: string) {
    this._Id_absence = value;
  }


  public get typeOfAbsence(): string {
    return this._typeOfAbsence;
  }
  public set typeOfAbsence(value: string) {
    this._typeOfAbsence = value;
  }

  public get requestDate(): string {
    return this._requestDate;
  }
  public set requestDate(value: string) {
    this._requestDate = value;
  }

  public get startDate(): string {
    return this._startDate;
  }
  public set startDate(value: string) {
    this._startDate = value;
  }

  public get endDate(): string {
    return this._endDate;
  }
  public set endDate(value: string) {
    this._endDate = value;
  }

  public get status(): string {
    return this._status;
  }
  public set status(value: string) {
    this._status = value;
  }

  public get statusDate(): string {
    return this._statusDate;
  }
  public set statusDate(value: string) {
    this._statusDate = value;
  }

  public get Id_employee(): string {
    return this._Id_employee;
  }
  public set Id_employee(value: string) {
    this._Id_employee = value;
  }



}//closes classe
