import { type Movie } from '../types';

type Props = Pick<Movie, 'genres'>;

export function MovieGenre({ genres }: Props) {
  return (
    <div className="flex flex-wrap items-center gap-1">
      {genres.map((genre, index) => (
        <span key={genre.id} className="text-sm text-gray-200">
          {genre.name}
          {index !== genres.length - 1 && ','}
        </span>
      ))}
    </div>
  );
}
