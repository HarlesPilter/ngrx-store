import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MetaReducer, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { storeFreeze } from 'ngrx-store-freeze';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { RouterModule, Routes } from '@angular/router';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { effects } from './store/effects';
import { State, reducers } from './store/reducers';
import { CustomSerializer } from './store/reducers/router.reducer';
import { MoviesComponent } from './movies/movies.component';
import { MoviesModule } from './movies/movies.module';
import { SharedModule } from './shared/shared.module';
import { AboutModule } from './about/about.module';
import { AboutComponent } from './about/about.component';

import * as fromGuards from './movies/guards';

export const metaReducers: MetaReducer<State>[] = !environment.production ? [storeFreeze] : [];

// routes
const appRoutes: Routes = [
  {
    path: '',
    canActivate: [fromGuards.MoviesGuard, fromGuards.GenresGuard],
    component: MoviesComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot(effects),
    StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    MoviesModule,
    AboutModule,
  ],
  providers: [{ provide: RouterStateSerializer, useClass: CustomSerializer }, ...fromGuards.guards],
  bootstrap: [AppComponent],
})
export class AppModule {}
