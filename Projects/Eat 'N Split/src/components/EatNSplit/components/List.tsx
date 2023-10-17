import { type Friend } from '../types';

type Props = {
  friends: Friend[];
};

export function List({ friends }: Props) {
  return (
    <div className="flex flex-col space-y-4">
      <h3 className="text-sm font-semibold text-slate-400">
        Your {friends.length > 1 ? 'friends' : 'friend'}
      </h3>
      <div className="flex flex-col space-y-4">
        {friends.map(friend => {
          return (
            <div
              key={friend.id}
              className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center"
            >
              <div className="grid grid-cols-[44px_1fr] items-center gap-x-2">
                <img
                  src={friend.image}
                  alt={`Photo of ${friend.name}`}
                  className="row-span-2 rounded-full"
                />
                <p className="col-start-2 row-start-1 font-bold leading-none text-slate-700">
                  {friend.name}
                </p>
                <span className="col-start-2 row-start-2 text-xs text-slate-400">
                  You and {friend.name} are even
                </span>
              </div>
              <button className="w-full rounded-sm border border-slate-200 bg-transparent px-3 py-1 text-xs font-medium text-slate-400 transition-colors duration-300 hover:border-transparent hover:bg-slate-200 hover:text-slate-500 sm:w-auto">
                Select
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
