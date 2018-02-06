import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromMovies from '../reducers/movies.reducers';

export const getMoviesState = createSelector(
  fromFeature.getMoviesFeatureState,
  (state: fromFeature.MoviesState) => state.movies
);

export const getMoviesEntities = createSelector(getMoviesState, fromMovies.getMoviesEntities);
export const getAllMovies = createSelector(getMoviesEntities, entities => {
  return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
});
export const getSelectedMovie = createSelector(getMoviesState, fromMovies.getSelectedMovie);
export const getMoviesLoaded = createSelector(getMoviesState, fromMovies.getMoviesLoaded);
export const getMoviesLoading = createSelector(getMoviesState, fromMovies.getMoviesLoading);
