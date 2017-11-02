import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ExhibitionService} from '../exhibition.service';

import {Exhibition} from '../object/exhibition';
import {isUndefined} from "util";
import {Translation} from "../object/translation";

@Component({
    selector: 'app-exhibition-release',
    templateUrl: './exhibition-release.component.html',
    styleUrls: ['../app.component.css']
})
export class ExhibitionReleaseComponent implements OnInit {

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
        document.getElementsByTagName('body')[0].className = 'page-id-3';
        this.getExhibitions();

        this.translation = new Translation;
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
