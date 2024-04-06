import { PopularMovies } from 'src/features/popular/components/popular';
import { useGetPopularMovies } from 'src/features/popular/hooks';

export default function PopularPage() {
  const movies = useGetPopularMovies();

  return <PopularMovies movies={movies} />;
}
