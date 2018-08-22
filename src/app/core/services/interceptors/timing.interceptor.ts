import {tap} from 'rxjs/operators';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

// App imports
import {LoggerService} from '@core/services/logger/logger.service';

export class TimingInterceptor implements HttpInterceptor {
  constructor() {
  }

  /**
   * Intercept any HTTP request for logging the response time
   * @param req : HttpRequest
   * @param next : HttpHandler
   * @returns {Observable<A>}
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const started = Date.now();
    return next
      .handle(req).pipe(
        tap(event => {
          if (event instanceof HttpResponse) {
            const elapsed = Date.now() - started;
            LoggerService.logWithStyle(`Request for ${req.urlWithParams} took ${elapsed} ms.`, 'color: #0e960e');
          }
        }));
  }
}
