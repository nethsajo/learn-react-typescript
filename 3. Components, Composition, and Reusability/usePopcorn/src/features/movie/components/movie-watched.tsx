import { Clock, MonitorCheck, Sparkles, Star } from 'lucide-react';
import { useContext } from 'react';
import Dialog from 'shared/components/elements/dialog';
import { WatchedMovieContext } from 'shared/contexts/movie/use-movie-context';

export function MovieWatched() {
  const context = useContext(WatchedMovieContext);

  return (
    <Dialog
      open={context.isOpen}
      onOpen={context.toggleWatchedMoviesSheet}
      onClose={context.toggleWatchedMoviesSheet}
    >
      <Dialog.Trigger>
        <button
          type="button"
          className="z-[3] flex h-7 w-7 cursor-pointer items-center justify-center rounded-md bg-orange-100 text-orange-500 transition-colors duration-300"
        >
          <MonitorCheck size={20} color="currentColor" />
        </button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>Movies you watched</Dialog.Title>
        </Dialog.Header>
        <div className="space-y-6">
          {context.watchedMovies.map(movie => (
            <div key={movie.id} className="grid grid-cols-[40px_1fr] grid-rows-[auto_auto] gap-x-4">
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={`${movie.title} poster`}
                className="row-span-full w-full rounded-sm"
              />
              <h3 className="font-semibold text-gray-300">{movie.title}</h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Star size={20} color="#facc15" />
                  <span className="text-sm">{movie.vote_average}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Sparkles size={20} color="#f59e0b" />
                  <span className="text-sm">{movie.userRating}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock size={20} color="#0ea5e9" />
                  <span className="text-sm">{movie.runtime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Dialog.Content>
    </Dialog>
  );
}
