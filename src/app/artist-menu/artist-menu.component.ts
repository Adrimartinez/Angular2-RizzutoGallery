import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ArtService} from '../art.service';

import {Artist} from '../object/artist';
import {isUndefined} from 'util';

@Component({
    selector: 'app-artist-menu',
    templateUrl: './artist-menu.component.html',
    styleUrls: ['../app.component.css']

})
export class ArtistMenuComponent implements OnInit {
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
        this.getArtists();

        this.translation = {
            'en': {
                'mainMenu': {
                    'exhibitions': 'Exhibitions',
                    'artists': 'Artists',
                    'news': 'News',
                    'aboutus': 'About us',
                    'contact': 'Contact',
                    'current': 'Current',
                    'upcomming': 'Up comming',
                    'past': 'Past',
                    'all': 'All',
                    'represented': 'represented',
                    'exhibited': 'exhibited',
                },
                'exhibitionMenu': {
                    "exhibitionscover": "Exhibition's cover",
                    'installationviews': 'Installation views',
                    'exhibitedworks': 'Exhibited works',
                    'files': 'Files',
                    'artists': 'Artists',
                    'artistpage': 'Artist page',
                },
                'artistMenu': {
                    "artistscover": "Artis's cover",
                    'selectedworks': 'Selected works',
                    'exhibition': 'Exhibition',
                    'biography': 'Biography',
                    'news': 'News',
                },
                'artistMobMenu': {
                    'artistcover': 'Cover',
                    'selectedWorks': 'Works',
                    'exhibition': 'Exhibition',
                    'biography': 'Biography',
                    'news': 'News'
                }
            },
            'it': {
                'mainMenu': {
                    'exhibitions': 'Mostre',
                    'artists': 'Artisti',
                    'news': 'Notizie',
                    'aboutus': 'Su di noi',
                    'contact': 'Contatti',
                    'current': 'In corso',
                    'upcomming': 'In arrivo',
                    'past': 'Passato',
                    'all': 'Tutto',
                    'represented': 'Rappresentata',
                    'exhibited': 'Esposto',
                },
                'exhibitionMenu': {
                    "exhibitionscover": "Copertina della mostra",
                    'installationviews': 'Immagini di installazione',
                    'exhibitedworks': 'Opere esposte',
                    'files': 'File',
                    'artists': 'Artisti',
                    'artistpage': "Pagina dell'artista",
                },
                'artistMenu': {
                    "artistscover": "Immagine dell'artista",
                    'selectedworks': 'Opere selezionate',
                    'exhibition': 'Mostra',
                    'biography': 'Biografia',
                    'news': 'Notizie',
                },
                'artistMobMenu': {
                    'artistcover': 'Immagine',
                    'selectedWorks': 'Opere',
                    'exhibition': 'Mostra',
                    'biography': 'Biografia',
                    'news': 'Notizie'
                }
            }
        };
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
