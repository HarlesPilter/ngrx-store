import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromMovies from '../reducers/movies.reducers';
import * as fromGenres from '../selectors/genres.selectors';

const getMoviesState = createSelector(
  fromFeature.getMoviesFeatureState,
  (state: fromFeature.MoviesState) => state.movies
);

export const getMoviesEntities = createSelector(getMoviesState, fromMovies.getMoviesEntities);
export const getAllMovies = createSelector(
  getMoviesEntities,
  fromGenres.getSelectedGenre,
  (entities, selectedGenre) => {
    return Object.keys(entities)
      .map(id => entities[parseInt(id, 10)])
      .filter(movie => {
        return !!selectedGenre ? movie.genre_ids.includes(selectedGenre) : true;
      });
  }
);
export const getSelectedMovie = createSelector(getMoviesState, fromMovies.getSelectedMovie);
export const getMoviesLoaded = createSelector(getMoviesState, fromMovies.getMoviesLoaded);
export const getMoviesLoading = createSelector(getMoviesState, fromMovies.getMoviesLoading);
