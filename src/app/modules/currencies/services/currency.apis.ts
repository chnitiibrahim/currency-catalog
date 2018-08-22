import {InjectionToken} from '@angular/core';
import {AppConfig} from '@core/config/app.config';

const CURRENCY_URL = AppConfig.endpoints.currency;

// Currencies module APIS
export const CurrencyApis = {
  GET_ALL_CURRENCIES: {
    URL: CURRENCY_URL + 'currencies'
  }
};

export let CURRENCY_APIS = new InjectionToken('app.config');


