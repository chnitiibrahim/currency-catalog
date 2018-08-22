import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCurrencyComponent } from './search-currency.component';

describe('SearchCurrencyComponent', () => {
  let component: SearchCurrencyComponent;
  let fixture: ComponentFixture<SearchCurrencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [SearchCurrencyComponent]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
