import { type Movie as MovieType } from '../types';
import { MovieDescription } from './movie-description';
import { MovieGenre } from './movie-genre';
import { MoviePoster } from './movie-poster';
import { MovieTitle } from './movie-title';

type MovieProps = {
  movie: MovieType;
};

export function Movie({ movie }: MovieProps) {
  return (
    <div className="relative">
      <img
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        className="fixed left-0 top-0 h-screen w-full object-cover"
      />
      <div className="absolute left-0 top-0 w-full bg-black/60 backdrop-blur-sm">
        <div className="container mx-auto p-6 md:p-16 lg:p-24">
          <div className="flex flex-col-reverse items-center md:flex-row md:items-start">
            <MoviePoster poster={movie.poster_path} />
            <div className="mb-4 space-y-6 md:mb-9 md:ml-8">
              <MovieTitle title={movie.title} average={movie.vote_average} />
              <MovieGenre genres={movie.genres} />
              <MovieDescription tagline={movie.tagline} overview={movie.overview} />
              <div className="space-y-4">
                <div className="">
                  <span className="text-gray-400">Directed by:</span>
                  <span className="ml-1 font-medium text-gray-300">Jan Kenneth Sajo</span>
                </div>
                <div className="">
                  <span className="text-gray-400">Starring:</span>
                  <span className="ml-1 font-medium text-gray-300">
                    Jan Kenneth Sajo, Joyjoy Reyes
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
