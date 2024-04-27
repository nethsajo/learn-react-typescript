import { Calendar, Clock, Star } from 'lucide-react';

import { type MovieDetails } from '../types';

type Props = {
  movie: MovieDetails;
};

export function MovieInfo({ movie }: Props) {
  const hours = Math.floor(movie.runtime / 60);
  const minutes = movie.runtime % 60;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return (
    <div className="flex items-center space-x-4 text-sm text-gray-200">
      <div className="flex items-center space-x-1.5 text-sm">
        <Calendar size={20} className="text-gray-300" />
        <span>{movie.release_date}</span>
      </div>
      <div className="flex items-center space-x-1.5 text-sm">
        <Clock size={20} className="text-gray-300" />
        <span>{`${hours}:${formattedMinutes}m`}</span>
      </div>
      <div className="flex items-center space-x-1.5 text-sm">
        <Star size={20} color="#facc15" className="ml-2 fill-yellow-400" />
        <span>{`${Math.round(movie.vote_average)}.0`}</span>
      </div>
    </div>
  );
}
