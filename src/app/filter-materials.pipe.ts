import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterMaterials'
})
export class FilterMaterialsPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
      console.log("searchText ", items);

    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }

    searchText = searchText.toLocaleLowerCase();

    return items.filter(function (it) {

      if(!it.supplier){
        it.supplier = "";
      }

      return it.name.toLocaleLowerCase().includes(searchText)  || it.supplier.toLocaleLowerCase().includes(searchText);
    });
  }

}
