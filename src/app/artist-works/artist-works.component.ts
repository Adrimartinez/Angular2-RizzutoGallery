import {
    AfterContentInit,
    AfterViewInit, Component, ElementRef, OnInit, QueryList,
    ViewChildren
} from '@angular/core';
import {Meta} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {ArtService} from '../art.service';
import {HomeService} from '../home.service';
import {Artist} from '../object/artist';
import {isUndefined} from 'util';
import {SafeScript} from '@angular/platform-browser';
import {Translation} from "../object/translation";

@Component({
    selector: 'app-artist-works',
    templateUrl: './artist-works.component.html',
    styleUrls: ['../app.component.css']
})
export class ArtistWorksComponent implements OnInit, AfterViewInit {

    errorMessage: string;
    mode = 'Observable';
    artists: Artist;
    private id: number;
    private sub: any;
    script: SafeScript;
    val: HTMLScriptElement;
    cad: string;
    url: HTMLScriptElement;
    lang = this._route.snapshot.data['lang'];
    @ViewChildren('allTheseThings') things: QueryList<any>;
    @ViewChildren('swiper') swiper: QueryList<any>;
    path: string;
    by: string;
    translation: any;


    constructor(private meta: Meta, private _elementRef: ElementRef, private _router: Router, private artService: ArtService, private homeService: HomeService, private _route: ActivatedRoute) {
    }

    ngOnInit() {
        this.getArtists();
        this.path = window.location.pathname;
        this.path = this.path.substring(this.path.search('/en'), this.path.length);

        this.translation = new Translation;
    }

    ngAfterViewInit() {
        this.swiper.changes.subscribe(t => {
            this.addJs();
        });
    }

    addJs() {

        this.cad = 'var mySwiper = new Swiper (".swiper-container", {' +
            'direction: "horizontal",' +
            'loop: true,' +
            'keyboardControl: true,' +
            'pagination: ".swiper-pagination",' +
            'paginationType: "fraction",' +
            'nextButton: ".swiper-button-next",' +
            'prevButton: ".swiper-button-prev",' +
            '});' +
            'initPhotoSwipeFromDOM(".my-gallery");';
        /*
         'mySwiper.on("slideChangeStart",function(){' +
         'document.index = mySwiper.activeIndex;' +
         'path = window.location.pathname;' +
         'mySwiper.activeIndex = path.substring(path.lastIndexOf("/"), path.length);' +
         'mySwiper.slideTo(mySwiper.activeIndex);' +
         '});';*/
        this.val = document.createElement('script');
        this.val.type = 'text/javascript';
        this.val.text = this.cad;
        this._elementRef.nativeElement.appendChild(this.val);
    }

    getArtists() {
        document.getElementsByTagName('body')[0].className = 'page-id-13';
        this.sub = this._route
            .params
            .subscribe(params => {
                this.mode = params['id'];
            });

        this.artService.getArtist(+this.mode, this.lang)
            .subscribe(
                artists => {
                    this.check(artists);
                },
                error => this.errorMessage = <any>error);
    }


    runFacebook(index: number) {
        window.open('https://www.facebook.com/sharer/sharer.php?u=' + (window.location.href) + '/' + (index - 1), '',
            'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
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
