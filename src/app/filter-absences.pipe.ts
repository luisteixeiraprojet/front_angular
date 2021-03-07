import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterAbsences'
})
export class FilterAbsencesPipe implements PipeTransform {

  transform(items: any[], search: string, status?:string, typeAbs?:string): any[] {
      if (!items) {
        return [];
      }
      if (!search) {
        search="";
      }
      search = search.toLocaleLowerCase();

      return items.filter(function (it) {
        let conditionNameAndDate =it.firstName.toLocaleLowerCase().includes(search) || it.lastName.toLocaleLowerCase().includes(search) || it.startDate.includes(search) || it.endDate.includes(search);
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
        return conditionNameAndDate && conditionStatus && conditionType;
    });
  }

}//closes class
