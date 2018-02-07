import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromMovies from './movies.reducers';
import * as fromGenres from './genres.reducers';

export interface MoviesState {
  movies: fromMovies.PopularMoviesState;
  genres: fromGenres.GenresState;
}

export const reducers: ActionReducerMap<MoviesState> = {
  movies: fromMovies.reducer,
  genres: fromGenres.reducer,
};

export const getMoviesFeatureState = createFeatureSelector<MoviesState>('movies');
