import {InjectionToken} from '@angular/core';
import {IAppConfig} from './iapp.config';

// Add app config in this file
export const AppConfig: IAppConfig = {
  endpoints: {
    'currency': 'https://api.openfintech.io/v1/'
  }
};

export let APP_CONFIG = new InjectionToken('app.config');
