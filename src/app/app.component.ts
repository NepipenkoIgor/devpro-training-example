import {Component, OnInit} from '@angular/core';
import {SearchService} from './header/search.service';
import {Observable, Subject} from 'rxjs';
import {async} from 'rxjs/internal/scheduler/async';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TS course';
  public logo = 'assets/images/Angular_logo.svg.png';
  public width = '50';
  public results$: Observable<any>;

  private _searchSource$$: Subject<string> = new Subject();

  public constructor(
    private _searchService: SearchService
  ) {

  }

  public ngOnInit() {
   this.results$ =  this._searchService.search(
      this._searchSource$$.asObservable(),
      async
    );
  }

  public search(searchTerm) {
    this._searchSource$$.next(searchTerm);
  }

}
