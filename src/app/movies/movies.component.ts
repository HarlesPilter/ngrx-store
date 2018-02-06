import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Movie } from './movies.model';
import * as fromStore from './store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoviesComponent implements OnInit {
  @HostBinding('class.app__route') app__route = true;
  @HostBinding('class.app__movies') app__movies = true;

  movies$: Observable<Movie[]>;
  selectedMovie$: Observable<number>;

  constructor(private store: Store<fromStore.MoviesState>) {}

  ngOnInit() {
    this.movies$ = this.store.select(fromStore.getAllMovies);
    this.selectedMovie$ = this.store.select(fromStore.getSelectedMovie);
  }

  private onMovieSelect(id: number): void {
    this.store.dispatch(new fromStore.SelectMovie(id));
  }
}
