import { type Movie as MovieType } from '../types';

type MovieProps = {
  movie: MovieType;
};

export function Movie({ movie }: MovieProps) {
  return (
    <>
      <img
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        className="fixed inset-0 min-h-full min-w-full"
      />
      <div className="container relative z-10 mx-auto w-full bg-black/40 p-6 md:p-24 lg:p-36 xl:p-40">
        Test
      </div>
    </>
  );
}
