import {InjectionToken} from '@angular/core';
import {CurrenciesConfig} from '@modules/currencies/config/currencies.config';

const CURRENCY_URL = CurrenciesConfig.endpoints.currency;

// Currencies module APIS
export const CurrencyApis = {
  GET_ALL_CURRENCIES: {
    URL: CURRENCY_URL + 'currencies'
  }
};

export let CURRENCY_APIS = new InjectionToken('app.config');


