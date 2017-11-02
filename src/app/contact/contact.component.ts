import {Component, OnInit} from '@angular/core';
import {Site} from '../object/home';
import {HomeService} from '../home.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['../app.component.css']
})
export class ContactComponent implements OnInit {

    errorMessage: string;
    site: Site;
    lang = this._route.snapshot.data['lang'];

    constructor(private _route: ActivatedRoute, private homeService: HomeService) {
    }

    ngOnInit() {
        document.getElementsByTagName('body')[0].className = 'page-id-6';
        this.getAbout();
    }

    getAbout() {
        this.homeService.getAbout(this.lang)
            .subscribe(
                site => this.site = site,
                error => this.errorMessage = <any>error);
    }
}
