import { MoviesGuard } from './movies.guard';
import { GenresGuard } from './genres.guard';

export const guards: any[] = [MoviesGuard, GenresGuard];

export * from './movies.guard';
export * from './genres.guard';
