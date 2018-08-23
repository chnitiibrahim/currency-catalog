import {InjectionToken} from '@angular/core';
import {ICurrenciesConfig} from './icurrencies.config';

export const CurrenciesConfig: ICurrenciesConfig = {
  search: {
    searchCriteria: [
      {name: 'Id', value: 'id'},
      {name: 'Code', value: 'code'},
      {name: 'Name', value: 'name'},
      {name: 'Type', value: 'currency_type'}
    ],
    defaultCriteria: 'searchText'
  },
  pagination: {
    pageSize: 10,
    pageSizeList: [10, 50, 100]
  },
  routes: {
    currencies: 'currency',
  },
  endpoints: {
    currency: 'https://api.openfintech.io/v1/'
  }
};

export let CURRENCIES_CONFIG = new InjectionToken('currencies.config');
