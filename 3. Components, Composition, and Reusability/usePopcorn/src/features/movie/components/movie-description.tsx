import { type Movie } from '../types';

type Props = Pick<Movie, 'tagline' | 'overview'>;

export function MovieDescription({ tagline, overview }: Props) {
  return (
    <div className="space-y-3">
      {tagline && <div className="text-sm text-slate-300">&ldquo;{tagline}&rdquo;</div>}
      <p className="max-w-2xl text-base text-gray-200 xl:text-lg">{overview}</p>
    </div>
  );
}
