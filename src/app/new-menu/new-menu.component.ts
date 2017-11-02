import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NewsService} from '../news.service';

import {Exhibition} from '../object/exhibition';

@Component({
  selector: 'app-new-menu',
  templateUrl: './new-menu.component.html',
  styleUrls: ['../app.component.css']
})
export class NewMenuComponent implements OnInit {

  errorMessage: string;
  mode = 'Observable';
  route: ActivatedRoute;
  news: Exhibition;
  private id: number;
  private sub: any;
  lang = this._route.snapshot.data['lang'];


  constructor(private newsService: NewsService,private _route: ActivatedRoute) {
    this.route = _route;
  }

  ngOnInit() {
    this.getExhibitions();
  }

  getExhibitions() {
    this.sub = this.route
        .params
        .subscribe(params => {
          this.mode = params['id'];
        });

    this.newsService.getExhibition(+this.mode, this.lang)
        .subscribe(
            exhibitions => this.news = exhibitions,
            error => this.errorMessage = <any>error);
  }

}
