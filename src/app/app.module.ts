import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

// App imports
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {APP_CONFIG, AppConfig} from './core/config/app.config';
import {TimingInterceptor} from './core/services/interceptors/timing.interceptor';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {CurrenciesModule} from './modules/currencies/currencies.module';

@NgModule({
  imports: [
    CurrenciesModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    FormsModule,
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
