import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromMovies from '../reducers/movies.reducers';
import * as fromGenres from '../selectors/genres.selectors';
import { Genre, Movie } from '../../movies.model';

const getMoviesState = createSelector(
  fromFeature.getMoviesFeatureState,
  (state: fromFeature.MoviesState) => state.movies
);

export const getMoviesEntities = createSelector(getMoviesState, fromMovies.getMoviesEntities);
export const getSearchText = createSelector(getMoviesState, fromMovies.getSearchText);
export const getAllMovies = createSelector(
  getMoviesEntities,
  fromGenres.getSelectedGenre,
  fromGenres.getAllGenres,
  getSearchText,
  (entities: Movie[], selectedGenre: number, allGenres: Genre[], searchText: string) => {
    return Object.keys(entities)
      .map(id => {
        const entity = { ...entities[parseInt(id, 10)] };
        entity.genres = allGenres.filter((genre: Genre) => entity.genre_ids.includes(genre.id));
        return entity;
      })
      .filter((movie: Movie) => {
        return !!selectedGenre ? movie.genre_ids.includes(selectedGenre) : true;
      })
      .filter((movie: Movie) => {
        return searchText ? movie.title.toLowerCase().includes(searchText.toLowerCase()) : true;
      })
      .sort((a: Movie, b: Movie) => b.vote_average - a.vote_average);
  }
);
export const getSelectedMovie = createSelector(getMoviesState, fromMovies.getSelectedMovie);
export const getMoviesLoaded = createSelector(getMoviesState, fromMovies.getMoviesLoaded);
export const getMoviesLoading = createSelector(getMoviesState, fromMovies.getMoviesLoading);
