import {Observable, of, throwError as observableThrowError} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';

// App imports
import {LoggerService} from '@core/services/logger/logger.service';
import {Currency} from './../models/currency.model';
import {CurrencyApis} from './currency.apis';

@Injectable()
export class CurrencyService {

  constructor(private http: HttpClient) {
  }

  private static handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      LoggerService.log(`${operation} failed: ${error.message}`);
      console.error(error);
      if (error.status >= 500) {
        throw error;
      }
      return of(result as T);
    };
  }

  getCurrencies(): Observable<Currency[]> {
    return this.http.get<Currency[]>(CurrencyApis.GET_ALL_CURRENCIES.URL)
      .pipe(
        tap(() => LoggerService.log(`fetched currencies`)),
        catchError(CurrencyService.handleError('getCurrencies', []))
      );
  }
}
