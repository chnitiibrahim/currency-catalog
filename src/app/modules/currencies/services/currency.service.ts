import {Observable, of, throwError as observableThrowError} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';

// App imports
import {LoggerService} from '@core/services/logger/logger.service';
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

  getCurrencies(): Observable<any[]> {
    return this.http.get<any[]>(CurrencyApis.GET_ALL_CURRENCIES.URL)
      .pipe(
        tap(() => LoggerService.log(`fetched currencies`)),
        catchError(CurrencyService.handleError('getCurrencies', []))
      );
  }

  getCurrencyById(id: string): Observable<any> {
    const url = `${CurrencyApis.GET_ALL_CURRENCIES.URL}/${id}`;
    return this.http.get<any>(url)
      .pipe(
        tap(() => LoggerService.log(`fetched currency id=${id}`)),
        catchError(CurrencyService.handleError<any>(`getCurrency id=${id}`))
      );
  }

  getCurrenciesByPageAndSize(pageSize: number, pageNumber: number): Observable<any> {
    const url = `${CurrencyApis.GET_ALL_CURRENCIES.URL}?page[size]=${pageSize}&page[number]=${pageNumber}`;
    return this.http.get<any>(url)
      .pipe(
        tap(() => LoggerService.log(`fetched currency page[size]=${pageSize} page[number]=${pageNumber}`)),
        catchError(
          CurrencyService.handleError<any>(`getCurrenciesByPageAndSize page[size]=${pageSize} page[number]=${pageNumber}`)
        )
      );
  }
}
