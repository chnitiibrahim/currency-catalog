import {Component, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private title: Title,
              private meta: Meta,
              private router: Router) {
  }

  ngOnInit() {
    this.title.setTitle('Currency catalog');
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.meta.updateTag({
          name: 'description',
          content: 'Currency catalog application'
        });
      }
    });
  }

}
