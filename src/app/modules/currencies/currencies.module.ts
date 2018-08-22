import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// App imports
import {SharedModule} from '@shared/shared.module';
import {CurrenciesRoutingModule} from './currencies-routing.module';
import {CurrencyService} from './services/currency.service';
import {CURRENCY_APIS, CurrencyApis} from './services/currency.apis';
import {CurrencyListComponent} from './pages/currency-list/currency-list.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CurrenciesRoutingModule
  ],
  declarations: [
    CurrencyListComponent
  ],
  providers: [
    CurrencyService,
    {provide: CURRENCY_APIS, useValue: CurrencyApis},
  ]
})
export class CurrenciesModule {
}
