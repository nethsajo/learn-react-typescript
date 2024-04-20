import { Calendar, ChevronLeft, Plus } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageLayout } from 'shared/components/layouts/page';

import { type MovieCast, type MovieDetails } from '../types';
import { MovieCasts } from './movie-casts';
import { MovieDescription } from './movie-description';
import { MovieGenre } from './movie-genre';
import { MovieInfo } from './movie-info';
import { MovieStarRating } from './movie-star-rating';
import { MovieTitle } from './movie-title';

type MovieProps = {
  movie: MovieDetails;
  casts: MovieCast[];
};

export function Movie({ movie, casts }: MovieProps) {
  const [userRating, setUserRating] = useState(0);

  const directed = casts.find(cast => cast.known_for_department.toLowerCase() === 'directing');
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <PageLayout>
      <img
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        className="fixed left-0 top-0 h-screen w-full object-cover"
      />
      <div className="fixed left-0 top-0 h-screen w-full bg-black/60 backdrop-blur-[2px]" />
      <div className="container relative mx-auto px-6 py-8 md:px-24 lg:px-36 xl:px-40">
        <button
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-600 shadow-md transition-colors duration-500 hover:bg-gray-200 hover:text-gray-700 active:bg-gray-300 active:text-gray-700"
          onClick={handleBack}
        >
          <ChevronLeft className="stroke-current" />
        </button>
        <div className="my-8">
          <div className="mb-4 space-y-5">
            <MovieTitle title={movie.title} average={movie.vote_average} />
            <div className="grid items-center gap-4 sm:grid-cols-[max-content_max-content]">
              <div className="flex items-center space-x-4 text-sm text-gray-200">
                <MovieInfo info={movie.release_date}>
                  <Calendar size={20} className="text-gray-300" />
                </MovieInfo>
                <MovieInfo info={`${Math.floor(movie.runtime / 60)}:${movie.runtime % 60}m`}>
                  <Calendar size={20} className="text-gray-300" />
                </MovieInfo>
              </div>
              <button className="inline-flex items-center justify-center rounded-sm bg-orange-500 px-6 py-1 text-xs font-medium text-orange-50 transition-colors duration-300 hover:bg-orange-600 active:bg-orange-700">
                <Plus className="mr-1 stroke-current" />
                Add to List
              </button>
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
            <MovieStarRating maxRating={10} onSetRating={setUserRating} />
          </div>
          {/* <MoviePoster poster={movie.poster_path} /> */}
        </div>
        <MovieCasts casts={casts} />
      </div>
    </PageLayout>
  );
}
