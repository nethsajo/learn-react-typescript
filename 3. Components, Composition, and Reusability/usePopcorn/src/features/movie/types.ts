export interface Movie {
  id: number;
  title: string;
  tagline?: string;
  overview: string;
  backdrop_path: string;
  poster_path: string;
  genres: Array<{ id: number; name: string }>;
  vote_average: number;
  runtime: number;
  release_date: string;
}
