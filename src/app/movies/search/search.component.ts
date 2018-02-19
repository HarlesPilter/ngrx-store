import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromStore from '../store';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent implements OnInit {
  searchString$: Observable<string>;

  constructor(private store: Store<fromStore.MoviesState>) {}

  ngOnInit() {
    this.searchString$ = this.store.select(fromStore.getSearchText);
    this.store.dispatch(new fromStore.SearchMovie(''));
  }

  searchUpdated(text: string) {
    this.store.dispatch(new fromStore.SearchMovie(text));
  }
}
