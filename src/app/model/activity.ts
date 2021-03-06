export class Activity {
  private _Id_activity;
  private _name;
  private _startDate;
  private _endDate;
  private _materials;

  constructor(){}

  fillObjActivity(obj){
    this.Id_activity = obj.Id_activity || undefined;
    this.name= obj.name || undefined;
    this.startDate= obj.startDate || undefined;
    this.endDate= obj.endDate || undefined;
    this.materials=obj.materials || undefined;
  }

//converted to object 'cause we need to pass to api properties without underscore
  toSimplifyObject(){
    const emplConvToSimpleObject={
    Id_activity  : this._Id_activity,
    name : this._name,
    startDate : this._startDate,
    endDate : this._endDate,
    materials : this._materials
  };
    return emplConvToSimpleObject;
  }

//_________________Getters & Setters

  public get Id_activity() {
    return this._Id_activity;
  }
  public set Id_activity(value) {
    this._Id_activity = value;
  }

  public get name() {
    return this._name;
  }
  public set name(value) {
    this._name = value;
  }

  public get startDate() {
    return this._startDate;
  }
  public set startDate(value) {
    this._startDate = value;
  }

  public get endDate() {
    return this._endDate;
  }
  public set endDate(value) {
    this._endDate = value;
  }

  public get materials() {
    return this._materials;
  }
  public set materials(value) {
    this._materials = value;
  }


}//closes class

