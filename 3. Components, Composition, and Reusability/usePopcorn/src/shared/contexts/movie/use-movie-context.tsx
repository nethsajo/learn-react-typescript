import React, { useState } from 'react';
import { type MovieDetails } from 'src/features/movie/types';

type WatchedMoviesContextType = {
  watched: Array<MovieDetails>;
  addWatchedMovie: (movie: MovieDetails) => void;
  removeWatchedMovie: (id: string) => void;
};

export const WatchedMovieContext = React.createContext<WatchedMoviesContextType>({
  watched: [],
  addWatchedMovie: () => {},
  removeWatchedMovie: () => {},
});

export default function WatchMovieProvider({ children }: React.PropsWithChildren) {
  const [watched, setWatched] = useState([]);

  const handleAddWatchedMovie = (movie: MovieDetails) => {
    console.log(movie);
  };
  const handleRemoveWatchedMovie = (id: string) => {
    console.log(id);
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
