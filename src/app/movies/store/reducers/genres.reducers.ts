import { Genre } from '../../movies.model';
import * as fromGenres from '../actions/genres.actions';

export interface GenresState {
  entities: { [id: number]: Genre };
  selectedGenre: number;
  showAllGenres: boolean;
  loading: boolean;
  loaded: boolean;
}

export const initialState: GenresState = {
  entities: {},
  selectedGenre: null,
  showAllGenres: false,
  loading: false,
  loaded: false,
};

export function reducer(state = initialState, action: fromGenres.GenreAction): GenresState {
  switch (action.type) {
    case fromGenres.LOAD_GENRES: {
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    }

    case fromGenres.LOAD_GENRES_SUCCESS: {
      const genres = action.payload;
      const entities = genres.reduce(
        (entities: { [id: number]: Genre }, genre: Genre) => {
          return {
            ...entities,
            [genre.id]: genre,
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

    case fromGenres.LOAD_GENRES_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }

    case fromGenres.SELECT_GENRE: {
      const selectedGenre = action.payload !== state.selectedGenre ? action.payload : null;
      return {
        ...state,
        selectedGenre,
      };
    }

    case fromGenres.TOGGLE_GENRES: {
      const showAllGenres = action.payload !== undefined ? action.payload : !state.showAllGenres;
      return {
        ...state,
        showAllGenres,
      };
    }
  }

  return state;
}

export const getGenreEntities = (state: GenresState) => state.entities;
export const getGenreLoading = (state: GenresState) => state.loading;
export const getGenreLoaded = (state: GenresState) => state.loaded;
export const getSelectedGenre = (state: GenresState) => state.selectedGenre;
export const getShowAllGenres = (state: GenresState) => state.showAllGenres;
