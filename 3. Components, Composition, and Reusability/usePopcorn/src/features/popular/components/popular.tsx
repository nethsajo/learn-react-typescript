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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {movies.map(movie => {
            return (
              <Link to={`${ROUTES.MOVIE}/${movie.id}`} key={movie.id} className="relative h-full">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={`${movie.original_title} poster`}
                  className="rounded-md"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </PageLayout>
  );
}
