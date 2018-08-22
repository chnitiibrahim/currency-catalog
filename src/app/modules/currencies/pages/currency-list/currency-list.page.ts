import {Component, OnInit, HostListener, OnDestroy} from '@angular/core';
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
export class CurrencyListComponent implements OnInit, OnDestroy {

  currencyFilter: any;
  currencies: any;
  currenciesPage: any;
  currenciesPageMeta: any;
  currenciesPageItems: any[];
  currenciesPageSize: number;
  currenciesPageSizeList: any[];
  currenciesIsLoading: boolean;

  constructor(private currencyService: CurrencyService,
              private router: Router,
              private paginationService: PaginationService) {
    this.currenciesPage = {};
    this.currenciesPageSize = CurrenciesConfig.pagination.pageSize;
    this.currenciesPageSizeList = CurrenciesConfig.pagination.pageSizeList;
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
      .subscribe((res: any) => {
        console.log('==> ', res);
        this.currenciesPageItems = res.data;
        this.currenciesPageMeta = res.meta;
        this.currenciesIsLoading = false;
        this.currenciesPage = this.paginationService.getPage(this.currenciesPageMeta.pages, this.currenciesPageMeta.total,
          pageNumber, this.currenciesPageSize);
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


