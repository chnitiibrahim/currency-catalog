import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

import {CoreModule} from '@core/core.module';
import {SharedModule} from '@shared/shared.module';
import {CurrencyListComponent} from './currency-list.component';
import {CurrencyService} from './../../services/currency.service';

describe('CurrencyListComponent', () => {
  let component: CurrencyListComponent;
  let fixture: ComponentFixture<CurrencyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CoreModule,
        SharedModule,
        HttpClientTestingModule
      ],
      declarations: [CurrencyListComponent],
      providers: [CurrencyService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create currency list component', () => {
    expect(component).toBeTruthy();
  });
});
