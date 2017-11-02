import {Component, OnInit} from '@angular/core';
import {HomeService} from '../home.service';

import {Site} from '../object/home';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['../app.component.css']
})
export class AboutComponent implements OnInit {

  errorMessage: string;
  site: Site;
  lang = this._route.snapshot.data['lang'];

  constructor(private _route: ActivatedRoute, private homeService: HomeService) {
  }

  ngOnInit() {
    document.getElementsByTagName('body')[0].className = '';
    this.getAbout();
  }

  getAbout() {
    this.homeService.getAbout(this.lang)
        .subscribe(
            site => this.site = site,
            error => this.errorMessage = <any>error);
  }

}
