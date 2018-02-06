import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromMovies from './movies.reducers';

export interface MoviesState {
  movies: fromMovies.PopularMoviesState;
}

export const reducers: ActionReducerMap<MoviesState> = {
  movies: fromMovies.reducer,
};

export const getMoviesFeatureState = createFeatureSelector<MoviesState>('movies');
