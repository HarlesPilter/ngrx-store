import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { FilterComponent } from './filter/filter.component';
import { MoviesService } from './movies.service';

@NgModule({
  imports: [CommonModule],
  declarations: [MoviesComponent, FilterComponent],
  providers: [MoviesService],
})
export class MoviesModule {}
