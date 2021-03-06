import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterMyTimesheets'
})
export class FilterMyTimesheetsPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {

    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(function (it) {

      if(!it.name){
        it.name = "";
      }
      return it.beginningDate.includes(searchText) || it.finishDate.includes(searchText) || it.name.toLocaleLowerCase().includes(searchText);
    });
  }

}
