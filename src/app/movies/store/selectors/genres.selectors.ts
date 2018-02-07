import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromGenres from '../reducers/genres.reducers';

const getMoviesState = createSelector(
  fromFeature.getMoviesFeatureState,
  (state: fromFeature.MoviesState) => state.genres
);

export const getGenresEntities = createSelector(getMoviesState, fromGenres.getGenreEntities);
export const getAllGenres = createSelector(getGenresEntities, entities => {
  return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
});
export const getSelectedGenre = createSelector(getMoviesState, fromGenres.getSelectedGenre);
export const getShowAllGenres = createSelector(getMoviesState, fromGenres.getShowAllGenres);
export const getGenresLoaded = createSelector(getMoviesState, fromGenres.getGenreLoaded);
export const getGenresLoading = createSelector(getMoviesState, fromGenres.getGenreLoading);
