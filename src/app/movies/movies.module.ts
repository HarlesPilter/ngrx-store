import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MoviesComponent } from './movies.component';
import { FilterComponent } from './filter/filter.component';
import { MoviesService } from './movies.service';
import { reducers, effects } from './store';
import { HttpClientModule } from '@angular/common/http';
import { MovieComponent } from './movie/movie.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('movies', reducers),
    EffectsModule.forFeature(effects),
  ],
  declarations: [MoviesComponent, FilterComponent, MovieComponent],
  providers: [MoviesService],
})
export class MoviesModule {}
