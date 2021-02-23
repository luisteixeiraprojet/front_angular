export class TimeSheet {

  private _Id_timeSheet;
  private _startAt;
  private _finishAt;
  private _priceHour;
  private _Id_activity;
  private _Id_employee;

   constructor(){}

   fillObj(obj) {
    this.Id_timeSheet = obj.Id_timeSheet || undefined;
    this.startAt = obj.startAt || undefined;
    this.finishAt = obj.finishAt || undefined;
    this.priceHour = obj.priceHour || undefined;
    this.Id_activity = obj.Id_activity || undefined;
    this.Id_employee = obj.Id_employee || undefined;

  }

//converted to object 'cause we need to pass to api properties without underscore
 toSimpleObject(){
  const absConvertedToObject={
  Id_timeSheet: this._Id_timeSheet,
  startAt : this._startAt,
  finishAt: this._finishAt,
  priceHour : this._priceHour,
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

  public get startAt() {
    return this._startAt;
  }
  public set startAt(value) {
    this._startAt = value;
  }

  public get finishAt() {
    return this._finishAt;
  }
  public set finishAt(value) {
    this._finishAt = value;
  }

  public get priceHour() {
    return this._priceHour;
  }
  public set priceHour(value) {
    this._priceHour = value;
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

