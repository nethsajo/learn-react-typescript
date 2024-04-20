import { type MovieDetails } from '../types';

type Props = Pick<MovieDetails, 'genres'>;

export function MovieGenre({ genres }: Props) {
  return (
    <div className="flex flex-wrap gap-1">
      {genres.map((genre, index) => (
        <span key={genre.id} className="text-sm text-gray-200">
          {genre.name}
          {index !== genres.length - 1 && ','}
        </span>
      ))}
    </div>
  );
}
