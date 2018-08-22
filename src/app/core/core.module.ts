import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

// App imports
import {LoggerService} from './services/logger/logger.service';

@NgModule({
  imports: [
    RouterModule,
  ],
  declarations: [
  ],
  exports: [
  ],
  providers: [
    LoggerService,
  ]
})

export class CoreModule {
}
