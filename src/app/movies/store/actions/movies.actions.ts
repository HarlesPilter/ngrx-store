import { Action } from '@ngrx/store';
import { Movie } from '../../movies.model';

// load movies
export const LOAD_MOVIES = '[Movies] Load Movies';
export const LOAD_MOVIES_SUCCESS = '[Movies] Load Movies Success';
export const LOAD_MOVIES_FAIL = '[Movies] Load Movies Fail';

export class LoadMovies implements Action {
  readonly type = LOAD_MOVIES;
}

export class LoadMoviesSuccess implements Action {
  readonly type = LOAD_MOVIES_SUCCESS;
  constructor(public payload: Movie[]) {}
}

export class LoadMoviesFail implements Action {
  readonly type = LOAD_MOVIES_FAIL;
  constructor(public payload: any) {}
}

// select movie
export const SELECT_MOVIE = '[Movies] Select Movie';
export const SEARCH_MOVIE = '[Movies] Search Movie';

export class SelectMovie implements Action {
  readonly type = SELECT_MOVIE;
  constructor(public payload: number) {}
}

export class SearchMovie implements Action {
  readonly type = SEARCH_MOVIE;
  constructor(public payload: string) {}
}

// action types
export type MovieAction =
  | LoadMovies
  | LoadMoviesSuccess
  | LoadMoviesFail
  | SelectMovie
  | SearchMovie;
