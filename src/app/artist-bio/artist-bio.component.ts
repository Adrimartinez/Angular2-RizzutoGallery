import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ArtService} from '../art.service';

import {Artist} from '../object/artist';
import {isUndefined} from 'util';
import {Translation} from "../object/translation";

@Component({
    selector: 'app-artist-bio',
    templateUrl: './artist-bio.component.html',
    styleUrls: ['../app.component.css']
})
export class ArtistBioComponent implements OnInit {
    errorMessage: string;
    mode = 'Observable';
    artists: Artist;
    private id: number;
    private sub: any;
    lang = this._route.snapshot.data['lang'];
    translation: any;

    constructor(private artService: ArtService, private _router: Router, private _route: ActivatedRoute) {
    }

    ngOnInit() {
        document.getElementsByTagName('body')[0].className = 'page-id-3';
        this.getArtists();

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
