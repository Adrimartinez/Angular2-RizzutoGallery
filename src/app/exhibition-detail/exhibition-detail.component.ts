import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ExhibitionService} from '../exhibition.service';

import {Exhibition} from '../object/exhibition';
import {isUndefined} from 'util';
import {Translation} from "../object/translation";

@Component({
    selector: 'app-exhibition-detail',
    templateUrl: './exhibition-detail.component.html',
    styleUrls: ['../app.component.css']
})
export class ExhibitionDetailComponent implements OnInit {

    errorMessage: string;
    mode = 'Observable';
    route: ActivatedRoute;
    exhibitions: Exhibition;
    private id: number;
    private sub: any;
    lang = this._route.snapshot.data['lang'];
    translation: any;


    constructor(private _router: Router, private exhibitionService: ExhibitionService, private _route: ActivatedRoute) {
        this.route = _route;
    }

    ngOnInit() {
        document.getElementsByTagName('body')[0].className = 'page-id-8';
        this.getExhibitions();

        this.translation = new Translation;
    }

    runFacebook() {
        window.open('https://www.facebook.com/sharer/sharer.php?u=' + (window.location.href), '',
            'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
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
