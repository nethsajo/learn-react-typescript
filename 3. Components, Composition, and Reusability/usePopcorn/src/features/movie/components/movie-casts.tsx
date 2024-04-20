import { type MovieCast } from '../types';

type Props = {
  casts: MovieCast[];
};

export function MovieCasts({ casts }: Props) {
  return (
    <div className="space-y-4">
      <h2 className="font-medium text-gray-400">Casts</h2>
      <div className="flex flex-nowrap items-start space-x-6 overflow-x-auto">
        {casts.map(cast => {
          return (
            cast.profile_path && (
              <div key={cast.id} className="flex flex-col">
                <div className="relative grid h-full min-w-[9rem] max-w-[9rem] md:min-w-[10rem] md:max-w-[10rem]">
                  <img
                    src={`https://image.tmdb.org/t/p/original${cast.profile_path}`}
                    alt={`${cast.name} photo`}
                    className="rounded-md"
                  />
                </div>
                <span className="mt-2 text-sm text-gray-200">{cast.name}</span>
                <span className="text-gray-400">{cast.character}</span>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
}
