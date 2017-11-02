import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {Exhibition} from './object/exhibition';

@Injectable()
export class ExhibitionService {
    private exhibitionUrl = '';

    constructor(private http: Http) {
    }

    getExhibition(id: number, lang: string): Observable<Exhibition> {
        this.exhibitionUrl = 'http://oloart.olomedia.com/services/getEvents.php?include_details=1&event_id=' + id + '&language=' + lang;
        return this.http.get(this.exhibitionUrl)
            .map(res => res.json())
            .catch(this.handleError);
    }

    getExhibitions(vari: any | 'all', lang: string): Observable<Exhibition[]> {
        this.exhibitionUrl = 'http://oloart.olomedia.com/services/getEvents.php?event_types=1&date=' + vari + '&language=' + lang;
        return this.http.get(this.exhibitionUrl)
            .map(res => res.json())
            .catch(this.handleError);
    }

    private handleError(error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
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
