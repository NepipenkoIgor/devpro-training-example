import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {debounceTime, switchMap} from 'rxjs/internal/operators';
import {BASE_URL_TOKEN} from '../config';
import {Inject} from '@angular/core';

export class SearchService {

  constructor(
    private _http: HttpClient,
    @Inject(BASE_URL_TOKEN) private _base: string
  ) {
  }

  public search(source$: Observable<string>, schedule = null): Observable<any> {
    return source$.pipe(
      debounceTime(300, schedule),
      switchMap((searchTerm: string) => {
        return this._http.get(`${this._base}/repositories?q=${searchTerm}`);
      })
    );
  }
}
