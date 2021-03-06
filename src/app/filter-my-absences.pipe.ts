import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterMyAbsences'
})
export class FilterMyAbsencesPipe implements PipeTransform {

  transform(items: any[], search: string, status?:string, typeAbs?:string): any[] {
    if (!items) {
      return [];
    }
    if (!search) {
      search="";
    }
    search = search.toLocaleLowerCase();

    return items.filter(function (it) {
      let conditionDate =it.startDate.includes(search) || it.endDate.includes(search);
      let conditionStatus;
      let conditionType = it.typeOfAbsence.includes(typeAbs);

      if(it.status != undefined){
      conditionStatus = it.status.includes(status);
     }
     if(status=="en attente"){
       conditionStatus = it.status== undefined;
     }
     if(status == ""){
      conditionStatus= true;
     }
     //only returns items wehre condition is true
      return conditionDate && conditionStatus && conditionType;
  });
  }
}
