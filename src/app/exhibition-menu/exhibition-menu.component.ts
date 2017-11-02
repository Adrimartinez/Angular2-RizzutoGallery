import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ExhibitionService} from '../exhibition.service';

import {Exhibition} from '../object/exhibition';
import {isUndefined} from 'util';
@Component({
    selector: 'app-exhibition-menu',
    templateUrl: './exhibition-menu.component.html',
    styleUrls: ['../app.component.css']
})
export class ExhibitionMenuComponent implements OnInit {

    errorMessage: string;
    mode = 'Observable';
    route: ActivatedRoute;
    exhibitions: Exhibition;
    private id: number;
    private sub: any;
    lang = this._route.snapshot.data['lang'];
    translation: any;


    constructor(private _router: Router, private exhibitionService: ExhibitionService,private _route: ActivatedRoute) {
        this.route = _route;
    }

    ngOnInit() {
        this.getExhibitions();

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
                }
            }
        };
    }

    getExhibitions() {
        this.sub = this.route
            .params
            .subscribe(params => {
                this.mode = params['id'];
            });

        this.exhibitionService.getExhibition(+this.mode, this.lang)
            .subscribe(
                exhibitions => this.check(exhibitions),
                error => this.errorMessage = <any>error);
    }

    check(exhibitions: Exhibition) {
        if (isUndefined(exhibitions[0])) {
            this._router.navigateByUrl('/home');
        } else {
            this.exhibitions = exhibitions;
        }
    }
}
