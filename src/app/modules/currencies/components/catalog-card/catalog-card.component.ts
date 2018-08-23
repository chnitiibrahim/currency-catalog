import {Component, OnInit, Input} from '@angular/core';

import {Currency} from '@modules/currencies/models/currency.model';

@Component({
  selector: 'app-catalog-card',
  templateUrl: './catalog-card.component.html',
  styleUrls: ['./catalog-card.component.scss']
})
export class CatalogCardComponent implements OnInit {

  @Input() currency: Currency;

  constructor() {
  }

  ngOnInit() {
  }
}
