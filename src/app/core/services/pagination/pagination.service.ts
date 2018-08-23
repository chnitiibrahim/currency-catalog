import {Injectable} from '@angular/core';

@Injectable()
export class PaginationService {
  getPage(totalPages: number, totalItems: number, currentPage: number = 1, pageSize: number = 10) {
    if (currentPage < 1) {
      currentPage = 1;
    } else if (currentPage > totalPages) {
      currentPage = totalPages;
    }

    const device = window.screen.width > 768 ? 'laptop' : 'phone';
    const values = device === 'phone' ? 3 : 5 ;
    const startPage = currentPage <= values ? currentPage : currentPage - values ;
    const endPage = currentPage + values ;

    const pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

    return {
      totalItems: totalItems,
      totalPages: totalPages,
      pageSize: pageSize,
      currentPage: currentPage,
      startPage: startPage,
      endPage: endPage,
      pages: pages
    };
  }
}
