export class TimeSheet {

  private _Id_timeSheet;
  private _beginningDate;
  private _finishDate;
  private _priceHour;
  private _totalHours;
  private _Id_activity;
  private _Id_employee;

   constructor(){}

   fillObj(obj) {
    this.Id_timeSheet = obj.Id_timeSheet || undefined;
    this.beginningDate = obj.beginningDate || undefined;
    this.finishDate = obj.finishDate || undefined;
    this.priceHour = obj.priceHour || undefined;
    this.totalHours = obj.totalHours || undefined;
    this.Id_activity = obj.Id_activity || undefined;
    this.Id_employee = obj.Id_employee || undefined;

  }

//converted to object 'cause we need to pass to api properties without underscore
 toSimpleObject(){
  const absConvertedToObject={
  Id_timeSheet: this._Id_timeSheet,
  beginningDate : this._beginningDate,
  finishDate: this._finishDate,
  priceHour : this._priceHour,
  totalHours : this._totalHours,
  Id_activity : this._Id_activity,
  Id_employee: this._Id_employee,
  };
  return absConvertedToObject;
 }


  public get Id_timeSheet() {
    return this._Id_timeSheet;
  }
  public set Id_timeSheet(value) {
    this._Id_timeSheet = value;
  }

  public get beginningDate() {
    return this._beginningDate;
  }
  public set beginningDate(value) {
    this._beginningDate = value;
  }

  public get finishDate() {
    return this._finishDate;
  }
  public set finishDate(value) {
    this._finishDate = value;
  }

  public get priceHour() {
    return this._priceHour;
  }
  public set priceHour(value) {
    this._priceHour = value;
  }

  public get totalHours() {
    return this._totalHours;
  }
  public set totalHours(value) {
    this._totalHours = value;
  }

  public get Id_activity() {
    return this._Id_activity;
  }
  public set Id_activity(value) {
    this._Id_activity = value;
  }

  public get Id_employee() {
    return this._Id_employee;
  }
  public set Id_employee(value) {
    this._Id_employee = value;
  }
}

