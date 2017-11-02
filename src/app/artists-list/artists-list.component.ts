import {Component, OnInit} from '@angular/core';
import {ArtService} from '../art.service';
import {ActivatedRoute, Router} from '@angular/router';

import {Artist} from '../object/artist';
import {Translation} from "../object/translation";

@Component({
    selector: 'app-artists-list',
    templateUrl: './artists-list.component.html',
    styleUrls: ['../app.component.css']
})
export class ArtistsListComponent implements OnInit {

    errorMessage: string;
    artists: Artist[];
    sub: any;
    showRep: boolean;
    showEx: boolean;
    lang = this._route.snapshot.data['lang'];
    translation: any;

    constructor(private artService: ArtService, private _router: Router, private _route: ActivatedRoute) {
    }

    ngOnInit() {
        document.getElementsByTagName('body')[0].className = 'page-id-2';
        this.sub = this._route
            .params
            .forEach(params => {
                const vari = params['hidde'];
                this.getArtists(vari);
            });

        this.translation = new Translation;
    }
    getArtists(vari: any): any {
        switch (+vari) {
            case 1: {
                this.showRep = true;
                this.showEx = false;
                break;
            }
            case 2: {
                this.showRep = false;
                this.showEx = true;
                break;
            }
            default: {
                this._router.navigateByUrl('/' + this.lang + '/artists/0');
                this.showRep = true;
                this.showEx = true;
                break;
            }
        }
        this.artService.getArtists(this.lang)
            .subscribe(
                artists => this.artists = artists,
                error => this.errorMessage = <any>error);
        return vari;
    }

    setName(first: string, last: string) {
        return first + ' ' + last;
    }
}
