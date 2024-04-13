import { useParams } from 'react-router-dom';
import { Movie } from 'src/features/movie/components/movie';
import { useGetMovie, useGetMovieCasts } from 'src/features/movie/hooks';

export default function MoviePage() {
  const { id } = useParams<{ id?: string }>();
  const movie = useGetMovie(id);
  const casts = useGetMovieCasts(id);

  if (!movie) return;

  return <Movie movie={movie} casts={casts} />;
}
