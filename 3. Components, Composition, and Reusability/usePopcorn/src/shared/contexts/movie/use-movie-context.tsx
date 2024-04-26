import React, { useState } from 'react';
import { type MovieWatched } from 'src/features/movie/types';

type WatchedMoviesContextType = {
  isOpen: boolean;
  watchedMovies: Array<MovieWatched>;
  addWatchedMovie: (movie: MovieWatched) => void;
  removeWatchedMovie: (id: number) => void;
  toggleWatchedMoviesSheet: () => void;
};

export const WatchedMovieContext = React.createContext<WatchedMoviesContextType>({
  isOpen: false,
  watchedMovies: [],
  addWatchedMovie: () => {},
  removeWatchedMovie: () => {},
  toggleWatchedMoviesSheet: () => {},
});

export default function WatchMovieProvider({ children }: React.PropsWithChildren) {
  const [isOpen, setIsOpen] = useState(false);
  const [watchedMovies, setWatchedMovies] = useState<MovieWatched[]>([]);

  const handleAddWatchedMovie = (movie: MovieWatched) => {
    setWatchedMovies(watched => [...watched, movie]);
  };

  const handleRemoveWatchedMovie = (id: number) => {
    setWatchedMovies(watched => watched.filter(movie => movie.id !== id));
  };

  const handleToggleWatchedMoviesSheet = () => {
    setIsOpen(open => !open);
  };

  return (
    <WatchedMovieContext.Provider
      value={{
        isOpen,
        watchedMovies,
        addWatchedMovie: handleAddWatchedMovie,
        removeWatchedMovie: handleRemoveWatchedMovie,
        toggleWatchedMoviesSheet: handleToggleWatchedMoviesSheet,
      }}
    >
      {children}
    </WatchedMovieContext.Provider>
  );
}
