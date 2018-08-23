import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

// App imports
import {CurrencyService} from '@modules/currencies/services/currency.service';

@Component({
  selector: 'app-currency-detail',
  templateUrl: './currency-detail.page.html',
  styleUrls: ['./currency-detail.page.scss']
})

export class CurrencyDetailComponent implements OnInit {

  currency: any;

  constructor(private currencyService: CurrencyService,
              private location: Location,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    const currencyId = this.activatedRoute.snapshot.paramMap.get('id');
    this.currencyService.getCurrencyById(currencyId).subscribe((currency: any) => {
      this.currency = currency.data;
    });
  }
}
