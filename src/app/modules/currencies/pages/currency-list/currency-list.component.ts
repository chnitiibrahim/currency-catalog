import {Component, OnInit} from '@angular/core';

// App imports
import {Currency} from '@modules/currencies/models/currency.model';
import {CurrencyService} from '@modules/currencies/services/currency.service';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.scss']
})
export class CurrencyListComponent implements OnInit {

  currencies: Currency[];

  constructor(private currencyService: CurrencyService) {
  }

  ngOnInit() {
    this.currencyService.getCurrencies().subscribe((currencies: Array<Currency>) => {
      console.log('>> getCurrencies :: ', currencies);
    });
  }

}
