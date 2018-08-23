import {async, TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {ActivatedRoute, convertToParamMap} from '@angular/router';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

// App imports
import {CoreModule} from '@core/core.module';
import {APP_CONFIG, AppConfig} from '@core/config/app.config';
import {SharedModule} from '@shared/shared.module';
import {CurrencyDetailComponent} from './currency-detail.page';
import {CurrencyService} from './../../services/currency.service';

describe('CurrencyDetailComponent', () => {
  let fixture;
  let component;
  let currencyService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CurrencyService,
        CoreModule,
        SharedModule,
        HttpClientTestingModule
      ],
      providers: [
        {provide: APP_CONFIG, useValue: AppConfig},
        {provide: APP_BASE_HREF, useValue: '/'},
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({
                id: 'EUR'
              })
            }
          }
        },
        CurrencyService
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(CurrencyDetailComponent);
    fixture.detectChanges();
    component = fixture.debugElement.componentInstance;
    currencyService = TestBed.get(CurrencyService);
  }));

});
