import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTimeSheets'
})
export class FilterTimeSheetsPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {

    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(function (it) {
      return it.firstName.toLocaleLowerCase().includes(searchText) || it.lastName.toLocaleLowerCase().includes(searchText) || it.beginningDate.toLocaleLowerCase().includes(searchText) || it.finishDate.toLocaleLowerCase().includes(searchText) || it.name.toLocaleLowerCase().includes(searchText) ;
    });
  }


}
