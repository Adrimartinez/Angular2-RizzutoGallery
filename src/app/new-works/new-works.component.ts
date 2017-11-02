import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ExhibitionService} from '../exhibition.service';

import {Exhibition} from '../object/exhibition';
import {isUndefined} from 'util';
import {SafeScript} from '@angular/platform-browser';
import {Translation} from "../object/translation";

@Component({
    selector: 'app-new-works',
    templateUrl: './new-works.component.html',
    styleUrls: ['../app.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class NewWorksComponent implements OnInit, AfterViewInit {

    errorMessage: string;
    mode = 'Observable';
    route: ActivatedRoute;
    exhibitions: Exhibition;
    private id: number;
    private sub: any;
    script: SafeScript;
    val: HTMLScriptElement;
    cad: string;
    url: HTMLScriptElement;
    lang = this._route.snapshot.data['lang'];
    translation: any;

    constructor(private _elementRef: ElementRef, private _router: Router, private exhibitionService: ExhibitionService, private _route: ActivatedRoute) {
        this.route = _route;
    }

    ngOnInit() {
        this.getExhibitions();

        this.translation = new Translation;
    }

    ngAfterViewInit() {
        this.cad = '$(document).ready(function () {' +
            'initPhotoSwipeFromDOM(".my-gallery");' +
            '})';

        this.val = document.createElement('script');
        this.val.type = 'text/javascript';
        this.val.text = this.cad;
        this._elementRef.nativeElement.appendChild(this.val);
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
