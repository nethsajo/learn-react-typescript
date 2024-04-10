import { useParams } from 'react-router-dom';
import { Movie } from 'src/features/movie/components/movie';
import { useGetMovie } from 'src/features/movie/hooks';

export default function MoviePage() {
  const { id } = useParams<{ id?: string }>();
  const movie = useGetMovie(id);

  return movie && <Movie movie={movie} />;
}
