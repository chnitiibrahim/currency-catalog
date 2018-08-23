import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'currencyFilter'
})
export class CurrencyFilterPipe implements PipeTransform {
  transform(items: Array<any>, filter: { [key: string]: any }): Array<any> {
    if (items && filter) {
      return items.filter(item => {
        return !Object.keys(filter)
          .find(key => {
            item.attributes.id = item.id;
            if (key === 'searchText') {
              return !Object.keys(item.attributes)
                .find(keyItem => {
                  return isMatch(item.attributes[keyItem], filter[key]);
                });
            } else if (filter[key]) {
              return !isMatch(item.attributes[key], filter[key]);
            }
          });
      });
    } else {
      return items;
    }
  }
}

const isMatch = (item, value) => {
  return item ? item.toString().includes(value) : false;
};
