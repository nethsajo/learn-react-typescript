import { Calendar, ChevronLeft, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { type Movie, type MovieCast } from '../types';
import { MovieCasts } from './movie-casts';
import { MovieDescription } from './movie-description';
import { MovieGenre } from './movie-genre';
import { MovieTitle } from './movie-title';

type MovieProps = {
  movie: Movie;
  casts: MovieCast[];
};

export function Movie({ movie, casts }: MovieProps) {
  const directed = casts.find(cast => cast.known_for_department.toLowerCase() === 'directing');
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <img
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        className="fixed left-0 top-0 h-screen w-full object-cover"
      />
      <div className="fixed left-0 top-0 h-screen w-full bg-black/60 backdrop-blur-[2px]" />
      <div className="relative mx-auto max-w-7xl p-6 md:p-16 lg:p-24">
        <button
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-600 shadow-md transition-colors duration-500 hover:bg-gray-200 hover:text-gray-700 active:bg-gray-300 active:text-gray-700"
          onClick={handleBack}
        >
          <ChevronLeft className="stroke-current" />
        </button>
        <div className="my-8 flex flex-col items-center justify-between md:flex-row md:items-start">
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
                <span className="text-sm font-medium text-gray-200">{directed?.name ?? 'N/A'}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-300">Genre:</span>
                <MovieGenre genres={movie.genres} />
              </div>
            </div>
          </div>
          {/* <MoviePoster poster={movie.poster_path} /> */}
        </div>
        <MovieCasts casts={casts} />
      </div>
    </>
  );
}
