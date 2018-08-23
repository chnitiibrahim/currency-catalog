import {async, TestBed} from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';

// App imports
import {APP_CONFIG, AppConfig} from '@core/config/app.config';
import {CurrencyService} from './currency.service';

describe('CurrencyService', () => {
  let currencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        {provide: APP_CONFIG, useValue: AppConfig},
        CurrencyService
      ]
    });

    currencyService = TestBed.get(CurrencyService);
  });

  it('should have currencies', async(() => {
    currencyService.getCurrencies().subscribe((res: any) => {
      expect(res.data.length).toBeGreaterThan(0);
    });
  }));

  it('should get currency by id ACCEUR', async(() => {
    currencyService.getCurrencyById('ACCEUR').subscribe((res: any) => {
      expect(res.data.id).toEqual('ACCEUR');
    });
  }));

});
