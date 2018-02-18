import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Genre } from '../movies.model';
import { Store } from '@ngrx/store';
import * as fromStore from '../store';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  limitGenres: number;
  genres$: Observable<Genre[]>;
  selectedGenre$: Observable<number>;
  showAllGenres$: Observable<boolean>;

  constructor(private store: Store<fromStore.MoviesState>) {
    this.limitGenres = 5;
  }

  ngOnInit() {
    this.genres$ = this.store.select(fromStore.getAllGenres);
    this.selectedGenre$ = this.store.select(fromStore.getSelectedGenre);
    this.showAllGenres$ = this.store.select(fromStore.getShowAllGenres);
    this.store.dispatch(new fromStore.SelectGenre(null));
    this.store.dispatch(new fromStore.ToggleGenres(null));
  }

  public onGenreSelect(id: number): void {
    this.store.dispatch(new fromStore.SelectGenre(id));
    this.store.dispatch(new fromStore.SelectMovie(null));
  }

  public toggleGenres(): void {
    this.store.dispatch(new fromStore.ToggleGenres());
  }
}
