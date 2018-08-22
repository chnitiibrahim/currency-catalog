import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() pagination: {};
  @Input() pageSizeList: {};
  @Output() changePage: EventEmitter<number> = new EventEmitter<number>();
  @Output() changePageSize: EventEmitter<number> = new EventEmitter<number>();
  pageSize: number;

  constructor() {
    this.pageSize = 10;
  }

  ngOnInit() {
  }

  onChangePage(page: number): void {
    this.changePage.emit(page);
  }

  onChangePageSize(): void {
    this.changePageSize.emit(this.pageSize);
  }
}
