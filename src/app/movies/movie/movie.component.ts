import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { Movie } from '../movies.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieComponent implements OnInit {
  @Input() movie: Movie;
  @Output() movieSelect: EventEmitter<number> = new EventEmitter<number>();
  constructor() {}

  ngOnInit() {}

  private onMovieClick(id: number): void {
    this.movieSelect.emit(id);
  }
}
