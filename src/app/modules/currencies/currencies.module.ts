import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

// App imports
import {SharedModule} from '@shared/shared.module';
import {PaginationService} from '@core/services/pagination/pagination.service';
import {CurrenciesRoutingModule} from './currencies-routing.module';
// Services
import {CurrencyService} from './services/currency.service';
import {CURRENCY_APIS, CurrencyApis} from './services/currency.apis';
// Pages
import {CurrencyListComponent} from './pages/currency-list/currency-list.page';
import {CurrencyDetailComponent} from './pages/currency-detail/currency-detail.page';
// Pipes
import {CurrencyFilterPipe} from './pipes/currency-filter.pipe';
// Components
import {CatalogCardComponent} from './components/catalog-card/catalog-card.component';
import {SearchCurrencyComponent} from './components/search/search-currency.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    CurrenciesRoutingModule
  ],
  declarations: [
    CatalogCardComponent,
    SearchCurrencyComponent,
    CurrencyDetailComponent,
    CurrencyListComponent,
    CurrencyFilterPipe
  ],
  providers: [
    PaginationService,
    CurrencyService,
    {provide: CURRENCY_APIS, useValue: CurrencyApis},
  ]
})
export class CurrenciesModule {
}
