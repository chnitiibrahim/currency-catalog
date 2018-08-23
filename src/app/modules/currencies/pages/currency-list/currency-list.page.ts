import {Component, OnInit, HostListener} from '@angular/core';
import {Router} from '@angular/router';

// App imports
import {CurrenciesConfig} from '@modules/currencies/config/currencies.config';
import {CurrencyService} from '@modules/currencies/services/currency.service';
import {PaginationService} from '@core/services/pagination/pagination.service';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.page.html',
  styleUrls: ['./currency-list.page.scss']
})
export class CurrencyListComponent implements OnInit {

  currencyFilter: any;
  currencies: any;
  currenciesPage: any;
  currenciesPageMeta: any;
  currenciesPageItems: any[];
  currenciesPageSize: number;
  currenciesPageSizeList: any[];
  currenciesIsLoading: boolean;
  errorMsg: boolean;

  constructor(private currencyService: CurrencyService,
              private router: Router,
              private paginationService: PaginationService) {
    this.currenciesPage = {};
    this.currenciesPageSize = CurrenciesConfig.pagination.pageSize;
    this.currenciesPageSizeList = CurrenciesConfig.pagination.pageSizeList;
    this.errorMsg = false;
  }

  ngOnInit() {
    this.currenciesIsLoading = true;
    this.onChangePage(1);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.ngOnInit();
  }

  /**
   * Load currencies by page size and page number
   * @param pageSize : number
   * @param pageNumber : number
   */
  loadCurrencies(pageSize: number, pageNumber: number): void {
    this.currenciesIsLoading = true;
    this.currencyService.getCurrenciesByPageAndSize(pageSize, pageNumber)
      .subscribe(
        (res: any) => {
          if (res) {
            console.log('==> ', res);
            this.currenciesPageItems = res.data;
            this.currenciesPageMeta = res.meta;
            this.currenciesPage = this.paginationService.getPage(this.currenciesPageMeta.pages, this.currenciesPageMeta.total,
              pageNumber, this.currenciesPageSize);
          }
          this.currenciesIsLoading = false;
        },
        (error: any) => {
          // TODO : to be improved by implement a generic error-handler
          this.currenciesIsLoading = false;
          this.errorMsg = true;
        });
  }

  /**
   * Redirect to currency details
   * @param currency
   */
  currencyDetails(currency): void {
    if (currency) {
      this.router.navigate([CurrenciesConfig.routes.currencies + '/' + currency.id]);
    }
  }

  /**
   * Filters currency by textSearch and criteriaSearch
   * @param searchFilter
   */
  onFilter(searchFilter): void {
    this.currencyFilter = {[searchFilter.criteria]: searchFilter.text};
  }

  /**
   * Change pagination page
   * @param page
   */
  onChangePage(page): void {
    this.loadCurrencies(this.currenciesPageSize, page);
  }

  /**
   * Change number of items to be displayed
   * @param pageSize
   */
  onChangePageSize(pageSize): void {
    this.currenciesPageSize = pageSize;
    this.onChangePage(this.currenciesPage.currentPage);
  }
}


