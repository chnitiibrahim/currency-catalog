import {InjectionToken} from '@angular/core';
import {IAppConfig} from './iapp.config';

export const AppConfig: IAppConfig = {
  routes: []
};

export let APP_CONFIG  = new InjectionToken('app.config');
