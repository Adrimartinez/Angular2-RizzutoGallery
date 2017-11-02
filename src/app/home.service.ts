import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {Site} from './object/home';

@Injectable()
export class HomeService {
    private homeUrl = '';
    private by = 'Rizzuto Gallery';

    constructor(private http: Http) {
    }

    getHome(): Observable<Site> {
        this.homeUrl = 'http://oloart.olomedia.com/services/getSite.php';
        return this.http.get(this.homeUrl)
            .map(res => res.json())
            .catch(this.handleError);
    }

    getAbout(lang: string): Observable<Site> {
        this.homeUrl = 'http://oloart.olomedia.com/services/getSite.php?language=' + lang;
        return this.http.get(this.homeUrl)
            .map(res => res.json())
            .catch(this.handleError);
    }
    
    getBy() {
        return this.by;
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
