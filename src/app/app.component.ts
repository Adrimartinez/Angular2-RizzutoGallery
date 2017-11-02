import {AfterContentInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Translation} from "./object/translation";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css', 'home-slider/css/component.css'],
})
export class AppComponent implements OnInit, AfterContentInit {

    show: boolean;
    sub: any;
    locale: string;
    lang: string;
    check = true;
    path;
    translation: any;

    constructor(private _router: Router, private _route: ActivatedRoute) {
    }

    ngOnInit() {
        this.lang = this._route.snapshot.data['lang'];
        this.path = window.location.pathname;
    }

    ngAfterContentInit() {

        this.translation = new Translation;

        if (this.check) {
            if (this.path.search('/en') !== -1) {
                this.path = this.path.substring(this.path.search('/en'), this.path.length);
            } else if (this.path.search('/it') !== -1) {
                this.path = this.path.substring(this.path.search('/it'), this.path.length);
            } else {
                this.path = '/';
            }
            this.locale = document['locale'] as string;
            if (this.locale === 'it-IT' || this.locale === 'it') {
                this.lang = 'it';
                if (this.path === '/') {
                    this._router.navigateByUrl('it/home');
                } else {
                    this.path.replace('en', this.lang);
                    this._router.navigateByUrl(this.path);
                }
                window.localStorage.setItem('lang', this.lang);
            } else {
                this.lang = 'en';
                if (this.path === '/') {
                    this._router.navigateByUrl('en/home');
                } else {
                    this.path.replace('it', this.lang);
                    this._router.navigateByUrl(this.path);
                }
                window.localStorage.setItem('lang', this.lang);
            }
            this.check = false;
        }
    }

    redirection() {
        this.path = window.location.pathname;
        if (this.path.search('/en') !== -1) {
            this.path = this.path.substring(this.path.search('/en'), this.path.length);
        } else if (this.path.search('/it') !== -1) {
            this.path = this.path.substring(this.path.search('/it'), this.path.length);
        } else {
            this.path = '/';
        }
        this.locale = document['locale'] as string;
        if (this.locale === 'it-IT' || this.locale === 'it') {
            this.lang = 'it';
            if (this.path === '/') {
                this._router.navigateByUrl('it/home');
            } else {
                const nuevo = this.path.replace('en', this.lang);
                this._router.navigateByUrl(nuevo);
            }
            window.localStorage.setItem('lang', this.lang);
        } else {
            this.lang = 'en';
            if (this.path === '/') {
                this._router.navigateByUrl('en/home');
            } else {
                const nuevo = this.path.replace('it', this.lang);
                this._router.navigateByUrl(nuevo);
            }
            window.localStorage.setItem('lang', this.lang);
        }
    }

    changeLang(lang: string) {
        this.lang = lang;
        document['locale'] = lang;
        window.localStorage.setItem('lang', lang);
        this.redirection();
    }
}
