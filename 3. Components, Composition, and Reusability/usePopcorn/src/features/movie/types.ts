export interface MovieDetails {
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

export interface MovieCast {
  id: number;
  known_for_department: string;
  name: string;
  profile_path: string;
  character: string;
}
