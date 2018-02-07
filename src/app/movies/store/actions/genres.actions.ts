import { Action } from '@ngrx/store';
import { Genre } from '../../movies.model';

// load genres
export const LOAD_GENRES = '[Movies] Load Genres';
export const LOAD_GENRES_SUCCESS = '[Movies] Load Genres Success';
export const LOAD_GENRES_FAIL = '[Movies] Load Genres Fail';

export class LoadGenres implements Action {
  readonly type = LOAD_GENRES;
}

export class LoadGenresSuccess implements Action {
  readonly type = LOAD_GENRES_SUCCESS;
  constructor(public payload: Genre[]) {}
}

export class LoadGenresFail implements Action {
  readonly type = LOAD_GENRES_FAIL;
  constructor(public payload: any) {}
}

// select genre
export const SELECT_GENRE = '[Movies] Select Genre';
export const TOGGLE_GENRES = '[Movies] Toggle Genres';

export class SelectGenre implements Action {
  readonly type = SELECT_GENRE;
  constructor(public payload: number) {}
}

export class ToggleGenres implements Action {
  readonly type = TOGGLE_GENRES;
  constructor(public payload?: boolean) {}
}

// action types
export type GenreAction =
  | LoadGenres
  | LoadGenresSuccess
  | LoadGenresFail
  | SelectGenre
  | ToggleGenres;
