import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NewsService} from '../news.service';

import {Exhibition} from '../object/exhibition';
import {isUndefined} from 'util';
import {Translation} from '../object/translation';

@Component({
    selector: 'app-new-release',
    templateUrl: './new-release.component.html',
    styleUrls: ['../app.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class NewReleaseComponent implements OnInit {

    errorMessage: string;
    mode = 'Observable';
    route: ActivatedRoute;
    news: Exhibition;
    private id: number;
    private sub: any;
    lang = this._route.snapshot.data['lang'];
    translation: any;


    constructor(private _router: Router, private newsService: NewsService, private _route: ActivatedRoute) {
        this.route = _route;
    }

    ngOnInit() {
        this.getExhibitions();

        this.translation = new Translation;
    }

    getExhibitions() {
        this.sub = this.route
            .params
            .subscribe(params => {
                this.mode = params['id'];
            });

        this.newsService.getExhibition(+this.mode, this.lang)
            .subscribe(
                exhibitions => this.check(exhibitions),
                error => this.errorMessage = <any>error);
    }

    check(exhibitions: Exhibition) {
        if (isUndefined(exhibitions[0])) {
            this._router.navigateByUrl('/home');
        } else {
            this.news = exhibitions;
        }
    }

}
