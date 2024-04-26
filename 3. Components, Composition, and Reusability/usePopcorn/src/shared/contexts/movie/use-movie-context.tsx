import React, { useState } from 'react';
import { type MovieWatched } from 'src/features/movie/types';

type WatchedMoviesContextType = {
  watched: Array<MovieWatched>;
  addWatchedMovie: (movie: MovieWatched) => void;
  removeWatchedMovie: (id: number) => void;
};

export const WatchedMovieContext = React.createContext<WatchedMoviesContextType>({
  watched: [],
  addWatchedMovie: () => {},
  removeWatchedMovie: () => {},
});

export default function WatchMovieProvider({ children }: React.PropsWithChildren) {
  const [watched, setWatched] = useState<MovieWatched[]>([]);

  const handleAddWatchedMovie = (movie: MovieWatched) => {
    setWatched(watchedMovies => [...watchedMovies, movie]);
  };
  const handleRemoveWatchedMovie = (id: number) => {
    setWatched(watchedMovies => watchedMovies.filter(watchedMovie => watchedMovie.id !== id));
  };

  return (
    <WatchedMovieContext.Provider
      value={{
        watched,
        addWatchedMovie: handleAddWatchedMovie,
        removeWatchedMovie: handleRemoveWatchedMovie,
      }}
    >
      {children}
    </WatchedMovieContext.Provider>
  );
}
