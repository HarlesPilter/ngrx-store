import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { catchError, filter, switchMap, take, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import * as fromStore from '../store';

@Injectable()
export class GenresGuard implements CanActivate {
  constructor(private store: Store<fromStore.MoviesState>) {}

  canActivate(): Observable<boolean> {
    return this.checkStore().pipe(switchMap(() => of(true)), catchError(() => of(false)));
  }

  checkStore(): Observable<boolean> {
    return this.store.select(fromStore.getGenresLoaded).pipe(
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new fromStore.LoadGenres());
        }
      }),
      filter(loaded => loaded),
      take(1)
    );
  }
}
