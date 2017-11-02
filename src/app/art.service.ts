import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {Artist} from './object/artist';

@Injectable()
export class ArtService {

    private artistsUrl = '';

    constructor(private http: Http) {
    }

    getArtist(id: number, lang: string): Observable<Artist> {
        this.artistsUrl = 'http://oloart.olomedia.com/services/getArtists.php?include_details=1&artist_id=' + id + '&language=' + lang;
        return this.http.get(this.artistsUrl)
            .map(res => res.json())
            .catch(this.handleError);
    }

    getArtists(lang: string): Observable<Artist[]> {
        this.artistsUrl = 'http://oloart.olomedia.com/services/getArtists.php?language=' + lang;
        return this.http.get(this.artistsUrl)
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