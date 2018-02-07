import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { catchError, switchMap, map } from 'rxjs/operators';

import { MoviesService } from '../../movies.service';
import * as genresActions from '../actions';
import { GenresListSuccess } from '../../movies.model';

@Injectable()
export class GenresEffects {
  constructor(private actions$: Actions, private moviesService: MoviesService) {}

  @Effect()
  loadGenres$ = this.actions$.ofType(genresActions.LOAD_GENRES).pipe(
    switchMap(() => {
      return this.moviesService.getGenresList().pipe(
        map((genresResponse: GenresListSuccess) => {
          return new genresActions.LoadGenresSuccess(genresResponse.genres);
        }),
        catchError(error => of(new genresActions.LoadGenresFail(error)))
      );
    })
  );
}
