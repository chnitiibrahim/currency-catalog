import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// App imports
import {CurrenciesConfig} from './config/currencies.config';
import {CurrencyListComponent} from './pages/currency-list/currency-list.page';
import {CurrencyDetailComponent} from './pages/currency-detail/currency-detail.page';

const CURRENCIES_ROUTES = CurrenciesConfig.routes.currencies;

const routes: Routes = [
  {path: CURRENCIES_ROUTES, component: CurrencyListComponent},
  {path: CURRENCIES_ROUTES + '/:id', component: CurrencyDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CurrenciesRoutingModule {
}
