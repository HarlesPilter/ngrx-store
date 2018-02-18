export interface Movie {
  id: number;
  poster_path?: string | null;
  adult?: boolean;
  overview?: string;
  release_date?: string;
  genre_ids?: number[];
  genres?: Genre[];
  original_title?: string;
  original_language?: string;
  title?: string;
  backdrop_path?: string | null;
  popularity?: number;
  vote_count?: number;
  video?: boolean;
  vote_average?: number;
}

export interface Genre {
  id?: number;
  name?: string;
}

export interface PopularMoviesResponseSuccess {
  page?: number;
  results: Movie[];
  total_results?: number;
  total_pages?: number;
}

export interface PopularMoviesResponseFail {
  status_message?: string;
  status_code?: number;
}

export interface GenresListSuccess {
  genres: Genre[];
}

export interface GenresListFail {
  status_message?: string;
  status_code?: number;
}

export type PopularMoviesResponse = PopularMoviesResponseSuccess | PopularMoviesResponseFail;
export type GenresListResponse = GenresListSuccess | GenresListFail;
