import { Movie } from '../../movies.model';
import * as fromMovies from '../actions/movies.actions';

export interface PopularMoviesState {
  entities: { [id: number]: Movie };
  selectedMovie: number;
  loading: boolean;
  loaded: boolean;
}

export const initialState: PopularMoviesState = {
  entities: {},
  selectedMovie: null,
  loading: false,
  loaded: false,
};

export function reducer(state = initialState, action: fromMovies.MovieAction): PopularMoviesState {
  switch (action.type) {
    case fromMovies.LOAD_MOVIES: {
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    }

    case fromMovies.LOAD_MOVIES_SUCCESS: {
      const movies = action.payload;
      const entities = movies.reduce(
        (entities: { [id: number]: Movie }, movie: Movie) => {
          return {
            ...entities,
            [movie.id]: movie,
          };
        },
        {
          ...state.entities,
        }
      );
      return {
        ...state,
        entities,
        loading: false,
        loaded: true,
      };
    }

    case fromMovies.LOAD_MOVIES_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }

    case fromMovies.SELECT_MOVIE: {
      const selectedMovie = action.payload;
      return {
        ...state,
        selectedMovie,
      };
    }
  }

  return state;
}

export const getMoviesEntities = (state: PopularMoviesState) => state.entities;
export const getMoviesLoading = (state: PopularMoviesState) => state.loading;
export const getMoviesLoaded = (state: PopularMoviesState) => state.loaded;
export const getSelectedMovie = (state: PopularMoviesState) => state.selectedMovie;
