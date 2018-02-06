import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { catchError, switchMap, map } from 'rxjs/operators';

import { MoviesService } from '../../movies.service';
import * as moviesActions from '../actions';
import { PopularMoviesResponseSuccess } from '../../movies.model';

@Injectable()
export class MoviesEffects {
  constructor(private actions$: Actions, private moviesService: MoviesService) {}

  @Effect()
  loadMovies$ = this.actions$.ofType(moviesActions.LOAD_MOVIES).pipe(
    switchMap(() => {
      return this.moviesService.getPopularMovies().pipe(
        map((moviesResponse: PopularMoviesResponseSuccess) => {
          return new moviesActions.LoadMoviesSuccess(moviesResponse.results);
        }),
        catchError(error => of(new moviesActions.LoadMoviesFail(error)))
      );
    })
  );
}
