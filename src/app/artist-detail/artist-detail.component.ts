import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ArtService} from '../art.service';

import {Artist} from '../object/artist';
import {isUndefined} from 'util';
import {Translation} from "../object/translation";

@Component({
    selector: 'app-artist-detail',
    templateUrl: './artist-detail.component.html',
    styleUrls: ['../app.component.css']

})
export class ArtistDetailComponent implements OnInit {
    errorMessage: string;
    mode = 'Observable';
    artists: Artist;
    private id: number;
    private sub: any;
    lang = this._route.snapshot.data['lang'];
    translation: any;

    constructor(private _router: Router, private artService: ArtService, private _route: ActivatedRoute) {
    }

    ngOnInit() {
        document.getElementsByTagName('body')[0].className = 'page-id-1';
        this.getArtists();

        this.translation = new Translation;
    }

    runFacebook() {
        window.open('https://www.facebook.com/sharer/sharer.php?u=' + (window.location.href), '',
            'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
    }

    getArtists() {
        this.sub = this._route
            .params
            .subscribe(params => {
                this.mode = params['id'];
            });

        this.artService.getArtist(+this.mode, this.lang)
            .subscribe(
                artists => this.check(artists),
                error => this.errorMessage = <any>error);
    }

    check(artists: Artist) {
        if (isUndefined(artists[0])) {
            this._router.navigateByUrl('/home');
        } else {
            this.artists = artists;
        }
    }

    setName(first: string, last: string) {
        return first + ' ' + last;
    }
}
