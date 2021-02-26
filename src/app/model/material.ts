export class Material {
  private _Id_material;
  private _purchaseDate;
  private _name;
  private _quantity;
  private _unitaryPrice;
  private _supplier;

//_______________________________________________________
  fillMatObj(obj){
    this.Id_material = obj.Id_material || undefined;
    this.purchaseDate = obj.purchaseDate || undefined;
    this.name= obj.name || undefined;
    this.quantity= obj.quantity || undefined;
    this.unitaryPrice= obj.unitaryPrice || undefined;
    this.supplier = obj.supplier || undefined;
  }


//converted to object 'cause we need to pass to api properties without underscore
toSimplifyObject(){
  const emplConvToSimpleObject={
  Id_material  : this._Id_material,
 purchaseDate : this._purchaseDate,
  name : this._name,
  quantity : this._quantity,
  unitaryPrice : this._unitaryPrice,
  supplier : this._supplier
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





}//closes class
