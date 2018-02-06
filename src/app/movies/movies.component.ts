import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  @HostBinding('class.app__route') app__route = true;
  @HostBinding('class.app__movies') app__movies = true;
  constructor() {}

  ngOnInit() {}
}
