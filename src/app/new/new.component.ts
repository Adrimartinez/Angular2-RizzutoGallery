import {Component, OnInit} from '@angular/core';
import {NewsService} from '../news.service';
import {Exhibition} from '../object/exhibition';
import {ActivatedRoute} from '@angular/router';
import {Translation} from "../object/translation";

@Component({
    selector: 'app-new',
    templateUrl: './new.component.html',
    styleUrls: ['../app.component.css']
})
export class NewComponent implements OnInit {
    errorMessage: string;
    news: Exhibition[];
    lang = this._route.snapshot.data['lang'];
    translation: any;

    constructor(private _route: ActivatedRoute, private newsService: NewsService) {
    }

    ngOnInit() {
        document.getElementsByTagName('body')[0].className = 'page-id-12';
        this.getExhibitions();

        this.translation = new Translation;
    }

    getExhibitions() {
        this.newsService.getExhibitions(this.lang)
            .subscribe(
                exhibitions => this.news = exhibitions,
                error => this.errorMessage = <any>error);
    }
}
