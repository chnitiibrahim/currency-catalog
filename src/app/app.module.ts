import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

// App imports
import {CoreModule} from './core/core.module';
import {APP_CONFIG, AppConfig} from './core/config/app.config';
import {TimingInterceptor} from './shared/interceptors/timing.interceptor';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {CurrenciesModule} from './modules/currencies/currencies.module';

@NgModule({
  imports: [
    CurrenciesModule,
    CoreModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    {provide: APP_CONFIG, useValue: AppConfig},
    {provide: HTTP_INTERCEPTORS, useClass: TimingInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
