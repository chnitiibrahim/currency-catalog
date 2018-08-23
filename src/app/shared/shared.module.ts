import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {PaginationComponent} from './components/pagination/pagination.component';
import {LoaderComponent} from './components/loader/loader.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule
  ],
  declarations: [
    PaginationComponent,
    LoaderComponent
  ],
  exports: [
    PaginationComponent,
    LoaderComponent
  ],
  providers: []
})

export class SharedModule {
}
