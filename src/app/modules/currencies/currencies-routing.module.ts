import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {CurrencyListComponent} from './pages/currency-list/currency-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: CurrencyListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CurrenciesRoutingModule {
}
