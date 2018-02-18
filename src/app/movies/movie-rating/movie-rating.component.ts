import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-rating',
  templateUrl: './movie-rating.component.html',
  styleUrls: ['./movie-rating.component.scss'],
})
export class MovieRatingComponent implements OnInit {
  @Input() rating: number;
  constructor() {}

  ngOnInit() {}

  get parsedRating(): number {
    return this.rating / 10 * 5;
  }

  get fraction(): number {
    return (this.parsedRating - Math.floor(this.parsedRating)) * 100;
  }
}
