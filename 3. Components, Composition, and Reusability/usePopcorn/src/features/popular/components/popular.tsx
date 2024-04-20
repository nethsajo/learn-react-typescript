import { Link } from 'react-router-dom';
import { PageLayout } from 'shared/components/layouts/page';
import { ROUTES } from 'shared/constants/commons';

import { type Popular } from '../types';

type PopularProps = {
  movies: Popular[];
};

export function PopularMovies({ movies }: PopularProps) {
  return (
    <PageLayout>
      <div className="container mx-auto my-8 px-6 md:px-24 lg:px-36 xl:px-40">
        <h1 className="mb-4 text-xl font-semibold text-slate-200 md:mb-8 md:text-2xl lg:text-3xl">
          Popular on usePopcorn
        </h1>
        <div className="grid gap-6 xxs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {movies.map(movie => {
            return (
              <div
                key={movie.id}
                className="relative h-[250px] w-full cursor-pointer overflow-hidden rounded-md sm:h-[400px]"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={`${movie.original_title} poster`}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <Link
                  to={`${ROUTES.MOVIE}/${movie.id}`}
                  className="absolute inset-0 z-10 h-full w-full"
                />
              </div>
            );
          })}
        </div>
      </div>
    </PageLayout>
  );
}
