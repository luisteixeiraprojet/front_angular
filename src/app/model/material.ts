export class Material {
  private _Id_material;
  private _purchaseDate;
  private _name;
  private _quantity;
  private _unitaryPrice;
  private _supplier;
  private _activities;

//_______________________________________________________
  fillMatObj(obj){
    this.Id_material = obj.Id_material || undefined;
    this.purchaseDate = obj.purchaseDate || undefined;
    this.name= obj.name || undefined;
    this.quantity= obj.quantity || undefined;
    this.unitaryPrice= obj.unitaryPrice || undefined;
    this.supplier = obj.supplier || undefined;
    this.activities = obj.activities || undefined;
  }

//____________________________________________________________
//converted to object 'cause we need to pass to api properties without underscore
toSimplifyObject(){
  const emplConvToSimpleObject={
  Id_material  : this._Id_material,
 purchaseDate : this._purchaseDate,
  name : this._name,
  quantity : this._quantity,
  unitaryPrice : this._unitaryPrice,
  supplier : this._supplier,
  activities : this._activities
};
  return emplConvToSimpleObject;
}

//______________________________________________________________
  public get Id_material() {
    return this._Id_material;
  }
  public set Id_material(value) {
    this._Id_material= value;
  }

  public get purchaseDate() {
    return this._purchaseDate;
  }
  public set purchaseDate(value) {
    this._purchaseDate= value;
  }

  public get name() {
    return this._name;
  }
  public set name(value) {
    this._name = value;
  }

  public get quantity() {
    return this._quantity;
  }
  public set quantity(value) {
    this._quantity = value;
  }

  public get unitaryPrice() {
    return this._unitaryPrice;
  }
  public set unitaryPrice(value) {
    this._unitaryPrice = value;
  }

  public get supplier() {
    return this._supplier;
  }
  public set supplier(value) {
    this._supplier= value;
  }

  public get activities() {
    return this._activities;
  }
  public set activities(value) {
    this._activities = value;
  }

}//closes class
