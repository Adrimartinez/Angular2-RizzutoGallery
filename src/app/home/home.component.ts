import {
    AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, QueryList,
    ViewChildren
} from '@angular/core';
import {HomeService} from '../home.service';

import {Image} from '../object/home';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['../app.component.css']
})

export class HomeComponent implements OnInit, AfterViewInit, AfterViewChecked {

    errorMessage: string;
    images: Image;
    cad: string;
    val: HTMLScriptElement;
    @ViewChildren('swiper') swiper: QueryList<any>;

    constructor(private homeService: HomeService, private _elementRef: ElementRef) {
    }

    ngOnInit() {
        document.getElementsByTagName('body')[0].className = '';
        this.getHome();
    }

    ngAfterViewInit() {
        this.swiper.changes.subscribe(
            t => this.addJs()
        );
    }

    ngAfterViewChecked() {
    }

    addJs() {
        /*
         'mySwiper.on("slideChangeStart",function(){' +
         'document.index = mySwiper.activeIndex;' +
         'path = window.location.pathname;' +
         'mySwiper.activeIndex = path.substring(path.lastIndexOf("/"), path.length);' +
         'mySwiper.slideTo(mySwiper.activeIndex);' +
         '});';*/

        this.val = document.createElement('script');
        this.val.type = 'text/javascript';
        this.val.src = 'assets/js/cbpBGSlideshow.js';
        this._elementRef.nativeElement.appendChild(this.val);
        setTimeout( () => this.addScript(), 300 );
    }

    addScript() {
        this.cad = 'cbpBGSlideshow.init();';

        this.val = document.createElement('script');
        this.val.type = 'text/javascript';
        this.val.text = this.cad;
        this._elementRef.nativeElement.appendChild(this.val);
    }

    getHome() {
        this.homeService.getHome()
            .subscribe(
                site => this.images = site.home.images,
                error => this.errorMessage = <any>error);
    }
}
