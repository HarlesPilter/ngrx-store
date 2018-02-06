import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';

import * as fromStore from '../store';
import { Observable } from 'rxjs/Observable';
import { catchError, filter, switchMap, take, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Injectable()
export class MoviesGuard implements CanActivate {
  constructor(private store: Store<fromStore.MoviesState>) {}

  canActivate(): Observable<boolean> {
    return this.checkStore().pipe(switchMap(() => of(true)), catchError(() => of(false)));
  }

  checkStore(): Observable<boolean> {
    return this.store.select(fromStore.getMoviesLoaded).pipe(
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new fromStore.LoadMovies());
        }
      }),
      filter(loaded => loaded),
      take(1)
    );
  }
}
