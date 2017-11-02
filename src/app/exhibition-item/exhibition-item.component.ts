import {Component, OnInit} from '@angular/core';
import {ExhibitionService} from '../exhibition.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Exhibition} from '../object/exhibition';
import {Translation} from "../object/translation";

@Component({
    selector: 'app-exhibition-item',
    templateUrl: './exhibition-item.component.html',
    styleUrls: ['../app.component.css']
})
export class ExhibitionItemComponent implements OnInit {

    errorMessage: string;
    exhibitions: Exhibition[];
    sub: any;
    lang = this._route.snapshot.data['lang'];
    translation: any;

    constructor(private exhibitionService: ExhibitionService, private _router: Router, private _route: ActivatedRoute) {
    }

    ngOnInit() {
        document.getElementsByTagName('body')[0].className = 'page-id-9';
        this.sub = this._route
            .params
            .forEach(params => {
                const vari = params['time'];
                this.getExhibitions(vari || 'all');
            });

        this.translation = new Translation;
    }

    getExhibitions(vari: any) {
        if (vari === 'all') {
            this._router.navigateByUrl('/' + this.lang + '/exhibitions/all');
        }
        this.exhibitionService.getExhibitions(vari, this.lang)
            .subscribe(
                exhibitions => this.exhibitions = exhibitions,
                error => this.errorMessage = <any>error);
    }
}
