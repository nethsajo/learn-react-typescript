import { Calendar, Clock } from 'lucide-react';

import { type Movie, type MovieCast } from '../types';
import { MovieDescription } from './movie-description';
import { MovieGenre } from './movie-genre';
import { MovieTitle } from './movie-title';

type MovieProps = {
  movie: Movie;
  casts: MovieCast[];
};

export function Movie({ movie, casts }: MovieProps) {
  const directed = casts.find(cast => cast.known_for_department.toLowerCase() === 'directing');

  return (
    <>
      <img
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        className="fixed left-0 top-0 h-screen w-full object-cover"
      />
      <div className="fixed left-0 top-0 h-screen w-full bg-black/60 backdrop-blur-[2px]" />
      <div className="relative">
        <div className="mx-auto max-w-7xl p-6 md:p-16 lg:p-24">
          <div className="mb-8 flex flex-col items-center justify-between md:flex-row md:items-start">
            <div className="mb-4 space-y-5 md:mr-8">
              <MovieTitle title={movie.title} average={movie.vote_average} />
              <div className="flex items-center space-x-4 text-sm text-gray-200">
                <div className="flex items-center space-x-1.5 text-sm">
                  <Calendar size={20} className="text-gray-300" />
                  <span>{movie.release_date}</span>
                </div>
                <div className="flex items-center space-x-1.5 text-sm">
                  <Clock size={20} className="text-gray-300" />
                  <span>
                    {Math.floor(movie.runtime / 60)}:{movie.runtime % 60}m
                  </span>
                </div>
              </div>
              <MovieDescription tagline={movie.tagline} overview={movie.overview} />
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-300">Directed by:</span>
                  <span className="text-sm font-medium text-gray-200">
                    {directed?.name ?? 'N/A'}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-300">Genre:</span>
                  <MovieGenre genres={movie.genres} />
                </div>
              </div>
            </div>
            {/* <MoviePoster poster={movie.poster_path} /> */}
          </div>
          <div className="space-y-4">
            <h2 className="text-lg text-gray-300 md:text-xl">Casts</h2>
            <div className="flex flex-nowrap items-start space-x-6 overflow-x-auto">
              {casts.map(cast => {
                return (
                  <div key={cast.id} className="flex flex-col">
                    <div className="relative grid h-full min-w-[9rem] max-w-[9rem] md:min-w-[10rem] md:max-w-[10rem]">
                      <img
                        src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                        alt={`${cast.name} photo`}
                        className="rounded-md"
                      />
                    </div>
                    <span className="mt-2 text-sm text-gray-200">{cast.name}</span>
                    <span>{cast.character}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
