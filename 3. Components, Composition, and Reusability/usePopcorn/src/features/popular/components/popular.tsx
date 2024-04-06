import { PageLayout } from 'shared/components/layouts/page';

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
              <div className="relative h-full" key={movie.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={`${movie.original_title} poster`}
                  className="rounded-md"
                />
              </div>
            );
          })}
        </div>
      </div>
    </PageLayout>
  );
}
