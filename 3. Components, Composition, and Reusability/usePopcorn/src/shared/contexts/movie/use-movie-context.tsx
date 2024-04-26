import React, { useState } from 'react';
import { type MovieWatched } from 'src/features/movie/types';

type WatchedMoviesContextType = {
  watchedMovies: Array<MovieWatched>;
  addWatchedMovie: (movie: MovieWatched) => void;
  removeWatchedMovie: (id: number) => void;
};

export const WatchedMovieContext = React.createContext<WatchedMoviesContextType>({
  watchedMovies: [],
  addWatchedMovie: () => {},
  removeWatchedMovie: () => {},
});

export default function WatchMovieProvider({ children }: React.PropsWithChildren) {
  const [watchedMovies, setWatchedMovies] = useState<MovieWatched[]>([]);

  const handleAddWatchedMovie = (movie: MovieWatched) => {
    setWatchedMovies(watched => [...watched, movie]);
  };
  const handleRemoveWatchedMovie = (id: number) => {
    setWatchedMovies(watched => watched.filter(movie => movie.id !== id));
  };

  return (
    <WatchedMovieContext.Provider
      value={{
        watchedMovies,
        addWatchedMovie: handleAddWatchedMovie,
        removeWatchedMovie: handleRemoveWatchedMovie,
      }}
    >
      {children}
    </WatchedMovieContext.Provider>
  );
}
