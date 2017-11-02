import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ArtService} from '../art.service';

import {Artist} from '../object/artist';
import {isUndefined} from 'util';
import {NewsService} from '../news.service';
import {Exhibition} from '../object/exhibition';
import {Translation} from "../object/translation";

@Component({
    selector: 'app-artist-news',
    templateUrl: './artist-news.component.html',
    styleUrls: ['../app.component.css']
})
export class ArtistNewsComponent implements OnInit {

    errorMessage: string;
    mode = 'Observable';
    artists: Artist;
    news: Exhibition[];
    private id: number;
    private sub: any;
    lang = this._route.snapshot.data['lang'];
    translation: any;

    constructor(private artService: ArtService, private newService: NewsService, private _router: Router, private _route: ActivatedRoute) {
    }

    ngOnInit() {
        document.getElementsByTagName('body')[0].className = 'page-id-5';
        this.getArtists();
        this.getExhibitions();

        this.translation = new Translation;
    }

    getArtists() {
        this.sub = this._route
            .params
            .subscribe(params => {
                this.mode = params['id'];
            });

        this.artService.getArtist(+this.mode, this.lang)
            .subscribe(
                artists => this.artists = artists,
                error => this.errorMessage = <any>error);
    }

    getExhibitions() {

        this.newService.getExhibitions(this.lang)
            .subscribe(
                exhibitions => this.check(exhibitions),
                error => this.errorMessage = <any>error);
    }

    check(news: Exhibition[]) {
        if (isUndefined(news[0])) {
            this._router.navigateByUrl('/home');
        } else {
            this.news = news;
        }
    }

    setName(first: string, last: string) {
        return first + ' ' + last;
    }

}
