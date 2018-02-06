import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { GenresListResponse, PopularMoviesResponse } from './movies.model';

@Injectable()
export class MoviesService {
  apiUrl: string;
  apiKey: string;

  constructor(private http: HttpClient) {
    const apiUrl = 'https://api.themoviedb.org/3';
    const apiKey = 'e90e5900c785cc9c251518d316e79f31';
  }

  public getPopularMovies(): Observable<PopularMoviesResponse> {
    return this.http
      .get<PopularMoviesResponse>(
        `${this.apiUrl}/movie/popular?api_key=${this.apiKey}&language=en-US&page=1`
      )
      .pipe(catchError((error: any) => Observable.throw(error.json)));
  }

  public getGenresList(): Observable<GenresListResponse> {
    return this.http
      .get<GenresListResponse>(
        `${this.apiUrl}/genre/movie/list?api_key=${this.apiKey}&language=en-US`
      )
      .pipe(catchError((error: any) => Observable.throw(error.json)));
  }
}
