import {Component, OnInit, Output, EventEmitter} from '@angular/core';

import {CurrenciesConfig} from '@modules/currencies/config/currencies.config';

@Component({
  selector: 'app-search-currency',
  templateUrl: './search-currency.component.html',
  styleUrls: ['./search-currency.component.scss']
})
export class SearchCurrencyComponent implements OnInit {

  @Output() filter: EventEmitter<string> = new EventEmitter<string>();

  searchCriteria: any;
  searchFilter: any;

  constructor() {
    this.searchCriteria = CurrenciesConfig.search.searchCriteria;
    this.searchFilter = {
      text: '',
      criteria: CurrenciesConfig.search.defaultCriteria
    };

  }

  ngOnInit() {
  }

  onFilter(): void {
    console.log('==> filter ', this.searchFilter);
    this.filter.emit(this.searchFilter);
  }

}
